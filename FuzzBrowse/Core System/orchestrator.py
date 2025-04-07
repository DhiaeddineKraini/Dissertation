#!/usr/bin/env python3
"""
orchestrator py
---------------
coordinates multi round fuzzing:
1) picks seeds use "top k with randomness" approach rather than always pick top 2
2) runs advanced mutation pipeline
3) invokes detection gather anomalies coverage crash info etc call detection py from same folder
4) aggregates results across rounds with optional coverage chart
"""

import os  
import sys 
import shutil
import subprocess 
import datetime 
import json 
import logging 
import random 
import time 
from pathlib import Path 
from typing import Any, Dict, List, Tuple 
from collections import defaultdict 

# shared config from tool
from config import (
    LOGGER_DIR, SEEDS_BASE, init_global_seed, # import stuff from config
    COVERAGE_WEIGHT_LINE, COVERAGE_WEIGHT_FUNC, COVERAGE_WEIGHT_PATH, # more config stuff
    logger as base_logger # import base logger rename it
)

# setup logger this file
logger = logging.getLogger("orchestrator-advanced")
logger.setLevel(base_logger.level)

# path this folder
THIS_FOLDER = Path(__file__).parent 
# path mutation script
MUTATION_SCRIPT = str(THIS_FOLDER / "mutation_pipeline_deterministic.py")
# path detection script
CRASH_SCRIPT = str(THIS_FOLDER / "detection.py")

# default run param
DEFAULT_MUTATIONS = 2
DEFAULT_ROUNDS = 2

# -------------------------------------------------------------------------
# helper validate_seed load_coverage_summary etc
# -------------------------------------------------------------------------
def validate_seed(path: Path) -> bool:
    """check seed path good"""
    # check exist
    if not path.exists():
        logger.error("[error] seed not found => %s", path)
        return False
    # check html file
    if path.suffix.lower() != ".html":
        logger.error("[error] not html file => %s", path)
        return False
    # ok if pass check
    return True

def load_coverage_summary(round_path: Path) -> Dict[str, Any]:
    """load coverage summary json file from round dir"""
    # path cov file
    cov_file = round_path / "crash_results" / "coverage_summary.json"
    # check exist
    if cov_file.exists():
        try:
            # open read json
            with open(cov_file, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            # log error fail load
            logger.error("failed load coverage summary: %s", e)
    # return empty dict fail
    return {}

def compute_weighted_coverage_score(cov_data: Dict[str, Any]) -> float:
    """calc score base coverage metric weight"""
    # get metric or 0
    total_ranges = cov_data.get("totalRanges", 0)
    visited_ranges = cov_data.get("visitedRanges", 0)
    total_funcs = cov_data.get("totalFunctions", 0)
    script_count = cov_data.get("scriptCount", 0)

    # calc weight part
    line_cov = visited_ranges * COVERAGE_WEIGHT_LINE
    func_cov = total_funcs * COVERAGE_WEIGHT_FUNC 
    path_cov = script_count * COVERAGE_WEIGHT_PATH
    # sum score
    return line_cov + func_cov + path_cov

def reorder_seeds_based_on_coverage(
    seeds: List[Path],
    coverage_summary: Dict[str, Any]
) -> List[Path]:
    """sort seed list base cover score high first"""
    # get file data from summary
    coverage_files = coverage_summary.get("files", {})

    # helper get score for one seed path
    def get_score(sp: Path) -> float:
        # file name
        name = sp.name
        # get data for file name or empty
        data = coverage_files.get(name, {})
        # calc return score
        return compute_weighted_coverage_score(data)

    # sort seed list use get_score high first
    return sorted(seeds, key=get_score, reverse=True)

def gather_new_crash_seeds(run_dir: Path) -> List[Path]:
    """gather new crash find make seed file use crash input"""
    # list store crash seed path
    crash_seeds = []
    # find round dir sort them
    round_dirs = sorted(d for d in run_dir.iterdir() if d.is_dir() and d.name.startswith("round_"))
    # need at least one round dir
    if not round_dirs:
        return []

    # get last round dir
    last_round = round_dirs[-1]
    # path unique crash file
    unique_crash_file = last_round / "crash_results" / "unique_crashes.json"
    # need crash file exist
    if not unique_crash_file.exists():
        return []

    # path detail report file
    detailed_report_file = last_round / "crash_results" / "reports" / "detailed_report.json"
    # init report dict
    detailed_report = {}

    # try load report file
    if detailed_report_file.exists():
        try:
             with open(detailed_report_file, 'r', encoding='utf-8') as f:
                detailed_report = json.load(f)

        except Exception as e:
            # warn fail load
            logger.warning(f"[detailed report] failed load file {e}")

    try:
        # load crash data json
        with open(unique_crash_file, "r", encoding="utf-8") as f:
            crash_data = json.load(f)

        # loop crash signature info
        for signature, crash_info in crash_data.items():
            # make new seed file path use signature part
            seed_path = run_dir / f"crash_seed_{signature[:8]}.html"

            # find crash input file name from detail report
            test_file_name = ""
            # loop test result in report
            for test_name, test_data in detailed_report.get("tests",{}).items():
                # check if this test crash (root cause not na)
                if test_data.get("root_cause") != "N/A":
                   test_file_name = test_name # get file name
                   break # found exit loop

            # check if found crash file name
            if test_file_name != "":
                # path original file cause crash in mutation folder
                original_seed_path = last_round / "mutations" / test_file_name

                try:
                    # read original crash input
                    with open(original_seed_path, "r", encoding="utf-8") as original_seed_file:
                        crashing_input = original_seed_file.read()
                        # write crash input to new crash seed file
                        with open(seed_path, "w", encoding="utf-8") as crash_seed_file:
                             crash_seed_file.write(crashing_input)

                    # log success create file
                    logger.info(f"crash seed file created: {seed_path} use input {original_seed_path}")
                    # add path to list
                    crash_seeds.append(seed_path)

                except Exception as e:
                    # log error fail create file include detail
                     logger.error(f"failed create crash seed file {seed_path} from {original_seed_path} error: {e}")

            else:
                # warn no crash file found report
                logger.warning("no suitable crash file found detailed_report json")

    except Exception as e:
        # log error fail gather seed general
        logger.error("[crash-seeds] failed gather crash seeds: %s", e)

    # return list crash seed path
    return crash_seeds

def choose_seeds_with_randomness(sorted_seeds: List[Path], top_k: int = 5) -> Tuple[Path, Path]:
    """pick two seed from top k use randomness"""
    # need at least 2 seed
    if len(sorted_seeds) < 2:
        raise RuntimeError("not enough seed pick two distinct seed")

    # find k limit top k or total seed num
    k = min(top_k, len(sorted_seeds))
    # get top k candidate
    candidates = sorted_seeds[:k]

    # pick first seed random from candidate
    seedA = random.choice(candidates)
    # remove seeda from candidate list
    candidates = [c for c in candidates if c != seedA]
    # pick second seed random from remain candidate or use seeda if empty
    seedB = random.choice(candidates) if candidates else seedA

    # return pair seed
    return seedA, seedB

# --- evolutionary seed selection enhancements ---
def calculate_seed_impact(seed_path: Path, coverage_data: Dict[str, Any]) -> float:
    """determine how much new coverage seed contribute"""
    # get file name
    filename = seed_path.name
    # init impact score
    impact = 0
    # loop file data in coverage
    for file_data in coverage_data.get("files", {}).values():
        # check if seed file name in source file list this data
        if filename in file_data.get("source_files", []): 
            # add weighted score base metric
            impact += file_data.get("visitedRanges", 0) * COVERAGE_WEIGHT_LINE
            impact += file_data.get("visitedFunctions", 0) * COVERAGE_WEIGHT_FUNC
    # return total impact score
    return impact

def select_evolutionary_seeds(seeds: List[Path], coverage_data: Dict[str, Any]) -> List[Path]:
    """prioritize seed contribute coverage expansion"""
    # list store seed score pair
    scored = []
    # loop each seed
    for seed in seeds:
        # calc impact score
        score = calculate_seed_impact(seed, coverage_data)
        # bonus if crash seed name
        if "crash_seed" in seed.name:
            score *= 1.5 
        # add pair to list
        scored.append((seed, score))
    # sort score high first
    scored.sort(key=lambda x: x[1], reverse=True)
    # decide how many keep min 2 or half list
    keep_count = max(2, len(scored) // 2)
    # return list seed path kept
    return [s[0] for s in scored[:keep_count]]

def get_seeds(
    cli_args: List[str],
    previous_coverage: Dict[str, Any],
    new_crash_seeds: List[Path],
    top_k: int = 5
) -> Tuple[Path, Path]:
    """get seed a b use cli previous cover crash seed"""
    # init empty seed list
    seeds: List[Path] = []
    # check cli arg for seed file
    for arg in cli_args:
        # check if end html
        if arg.endswith(".html"):
            # make path in seed base dir
            cand = Path(SEEDS_BASE) / arg
            # validate path
            if validate_seed(cand):
                # add seed list
                seeds.append(cand)

    # add new crash seed found
    for sc in new_crash_seeds:
        # validate path
        if validate_seed(sc):
            # add seed list
            seeds.append(sc)

    # remove duplicate use dict trick
    seeds = list(dict.fromkeys(seeds))

    # fallback use complex seed if less than 2
    if len(seeds) < 2:
        # path complex seed dir
        complex_dir = Path(SEEDS_BASE) / "complex" 
        # get all html file there
        fallback_files = list(complex_dir.glob("*.html"))
        # loop fallback file
        for fb in fallback_files:
            # validate path
            if validate_seed(fb):
                # add seed list
                seeds.append(fb)
        # remove duplicate again
        seeds = list(dict.fromkeys(seeds))

    # check final count fatal if still less 2
    if len(seeds) < 2:
        raise RuntimeError("[fatal] not enough seed after fallback complex")

    # reorder sort seed use coverage evo select if have prev cover
    if previous_coverage:
        seeds = reorder_seeds_based_on_coverage(seeds, previous_coverage)
        seeds = select_evolutionary_seeds(seeds, previous_coverage)
    else:
        # shuffle seed if no cover data
        random.shuffle(seeds)

    # choose final two seed use randomness top k
    return choose_seeds_with_randomness(seeds, top_k=top_k)

def aggregate_coverage_across_all_rounds(run_dir: Path) -> None:
    """combine coverage data all round make summary chart"""
    # find sort round dir
    round_dirs = sorted(d for d in run_dir.iterdir() if d.is_dir() and d.name.startswith("round_"))
    # init final cover dict
    final_coverage = {"rounds": {}, "aggregate": {}}

    # track best score seen
    best_score = 0.0
    # loop round dir
    for rd in round_dirs:
        # path cover file this round
        cov_file = rd / "crash_results" / "coverage_summary.json"
        # check exist
        if cov_file.exists():
            # load data
            with open(cov_file, "r", encoding="utf-8") as f:
                data = json.load(f)
            # store round data
            final_coverage["rounds"][rd.name] = data
            # get file data dict
            files_data = data.get("files", {})
            # loop file data find best score
            for f_name, cov_info in files_data.items():
                sc = cov_info.get("weightedCoverageScore", 0.0)
                # update best score if higher
                if sc > best_score:
                    best_score = sc

    # store best score overall
    final_coverage["aggregate"]["highestCoverageSeen"] = best_score
    # path final summary file
    out_file = run_dir / "final_coverage_summary.json"
    # write final summary json
    with open(out_file, "w", encoding="utf-8") as wf:
        json.dump(final_coverage, wf, indent=2)
    # log success write file
    logger.info("[aggregate] final coverage => %s", out_file)

    try:
        # try import plot lib
        import matplotlib.pyplot as plt
        # list store round name total score
        rd_names = []
        total_scores = []
        # loop round dir again calc total score per round
        for rd in round_dirs:
            label = rd.name
            # get round data from final cover dict
            cdata = final_coverage["rounds"].get(label, {})
            # init sum score this round
            sum_score = 0.0
            # loop file data sum score
            for fname, metrics in cdata.get("files", {}).items():
                sum_score += metrics.get("weightedCoverageScore", 0.0)
            # add name score list
            rd_names.append(label)
            total_scores.append(sum_score)

        # check if have score make plot
        if total_scores:
            # make figure plot bar chart
            plt.figure()
            plt.bar(rd_names, total_scores)
            plt.title("coverage across rounds")
            plt.xlabel("round")
            plt.ylabel("total weighted coverage")
            # path save chart image
            chart_path = run_dir / "coverage_across_rounds.png"
            # save chart
            plt.savefig(chart_path)
            # log success save chart
            logger.info("[aggregate] coverage chart => %s", chart_path)
            
            plt.close()
    except ImportError:
        # warn plot lib not install skip chart
        logger.warning("matplotlib not installed => skip coverage chart generation")

# --- coverage guided seed prioritization enhancements ---
def calculate_coverage_gaps(previous_coverage: Dict[str, Any]) -> Dict[str, List[str]]:
    """identify least cover element attribute event from cover data"""
    # init gap dict
    gaps = {"elements": [], "attributes": [], "events": []}
    # need file data exist
    if not previous_coverage.get("files"):
        return gaps

    # dict count elem attr event
    element_counts = defaultdict(int)
    attribute_counts = defaultdict(int)
    event_counts = defaultdict(int)

    # loop file data in prev cover
    for file_data in previous_coverage["files"].values():
        # count element use non exist key element_coverage
        for elem, data in file_data.get("element_coverage", {}).items():
            element_counts[elem] += data.get("count", 0)
        # count attribute use non exist key attribute_coverage
        for attr, data in file_data.get("attribute_coverage", {}).items():
            attribute_counts[attr] += data.get("count", 0)
        # count event use  non exist key event_coverage
        for event, data in file_data.get("event_coverage", {}).items():
            event_counts[event] += data.get("count", 0)

    # calc gap size quarter list size min 1
    gap_size = max(1, len(element_counts) // 4)
    # get least cover element sort count take top gap size
    gaps["elements"] = sorted(element_counts, key=lambda x: element_counts[x])[:gap_size]

    # same for attribute
    gap_size = max(1, len(attribute_counts) // 4)
    gaps["attributes"] = sorted(attribute_counts, key=lambda x: attribute_counts[x])[:gap_size]

    # same for event
    gap_size = max(1, len(event_counts) // 4)
    gaps["events"] = sorted(event_counts, key=lambda x: event_counts[x])[:gap_size]

    # return gap dict
    return gaps

def main() -> None:
    """main fuzz loop run orchestrator"""
    # init global rng seed from config
    init_global_seed()

    # set default mutation round count
    mutation_count = DEFAULT_MUTATIONS
    num_rounds = DEFAULT_ROUNDS

    try:
        # parse cli arg override default count if digit
        if len(sys.argv) > 1 and sys.argv[1].isdigit():
            mutation_count = int(sys.argv[1])
        if len(sys.argv) > 2 and sys.argv[-1].isdigit():
            num_rounds = int(sys.argv[-1])
    except ValueError:
        # warn use default if parse fail
        logger.warning("[warn] use default mutation_count rounds => %d %d", mutation_count, num_rounds)

    # make timestamp string
    timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    # make run dir path use timestamp
    run_dir = Path(LOGGER_DIR) / f"run_{timestamp}"
    # create dir parent ok
    run_dir.mkdir(parents=True, exist_ok=True)
    # log init run dir
    logger.info("[init] created run => %s", run_dir)

    # init prev cover crash data dict empty
    previous_coverage: Dict[str, Any] = {}
    crash_data: Dict[str, Any] = {}
    coverage_gaps_data = {} # init empty gap dict too

    # track unique crash signature coverage across round
    unique_crashes_seen = set()
    

    # loop each round number 1 to num_rounds
    for round_num in range(1, num_rounds + 1):
        # create new random seed this round use time round num
        round_seed = int(time.time()) + round_num * 1000
        # set env var mutation use this seed
        os.environ["MUTATION_ROUND_SEED"] = str(round_seed)

        # make round path in run dir
        round_path = run_dir / f"round_{round_num:03d}"
        round_path.mkdir()
        # log round start dir
        logger.info("[round %d] => directory => %s", round_num, round_path)

        # load cover crash data from previous round if not first round
        if round_num > 1:
            # path prev round dir
            prev_round_dir = run_dir / f"round_{round_num - 1:03d}"
            # load cover summary prev round
            previous_coverage = load_coverage_summary(prev_round_dir)

            # extract crash data prev round
            crash_file = prev_round_dir / "crash_results" / "unique_crashes.json"
            # check file exist
            if crash_file.exists():
                try:
                    # load data add signature to set
                    with open(crash_file, "r", encoding="utf-8") as f:
                        crash_data = json.load(f)
                        for sig in crash_data.keys():
                            unique_crashes_seen.add(sig)
                except Exception as e:
                    # log error fail load crash
                    logger.error("[crash-data] failed load => %s", e)

            # calc coverage gap use prev cover data
            coverage_gaps_data = calculate_coverage_gaps(previous_coverage)

        # gather new crash seed found this run
        new_crash_seeds = gather_new_crash_seeds(run_dir)
        # choose seed a b use logic get_seeds function
        seedA, seedB = get_seeds(sys.argv[1:], previous_coverage, new_crash_seeds, top_k=5)
        # log seed choice this round
        logger.info("[round %d] => seeds => a=%s b=%s", round_num, seedA, seedB)

        # copy chosen seed input round dir
        seed_store = round_path / "seed_inputs"
        seed_store.mkdir()
        shutil.copy(seedA, seed_store)
        shutil.copy(seedB, seed_store)

        # run mutation pipeline script
        mutations_dir = round_path / "mutations"
        mutations_dir.mkdir()
        # path mutation log file this round
        mutation_log_file = round_path / "mutation.log"
        # make command list run python script
        mutation_cmd = ["python3", MUTATION_SCRIPT, str(mutation_count)]

        # setup env var for mutation script use copy current env
        env = os.environ.copy()
        # update specific env var mutation need
        env.update({
            "MUTATION_SEED_A": str(seedA), # path seed a
            "MUTATION_SEED_B": str(seedB), # path seed b
            "MUTATION_OUT_DIR": str(mutations_dir), # output dir mutation
            "MUTATION_ROUND_NUM": str(round_num), # current round num
            "MUTATION_ROUND_SEED": str(round_seed), # specific seed this round
            "UNIQUE_CRASHES_COUNT": str(len(unique_crashes_seen)), # count unique crash seen so far
            "COVERAGE_GAPS": json.dumps(coverage_gaps_data) # pass coverage gap data json string need check if round > 1
        })

        try:
            # run mutation subprocess capture output check success
            mut_proc = subprocess.run(mutation_cmd, env=env, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, check=True)
            # write output log file
            mutation_log_file.write_text(mut_proc.stdout)
            # log success run mutation
            logger.info("[round %d] => mutation => returncode=%d logfile=%s", round_num, mut_proc.returncode, mutation_log_file)

        except subprocess.CalledProcessError as e:
            # log error if mutation fail include output
            logger.error(f"[round {round_num}] mutation process failed return code {e.returncode}")
            logger.error(f"mutation output stderr stdout:\n{e.output}")
            continue  
        except Exception as e:
            # log unexpected error mutation
            logger.exception(f"[round {round_num}] unexpected error occurred during mutation: {e}")
            continue 

        # run detection script
        crash_dir = round_path / "crash_results"
        crash_dir.mkdir()
        # path detection log file
        detection_log_file = crash_dir / "detection.log"
        # make command run python script pass mutation dir
        detection_cmd = ["python3", CRASH_SCRIPT, str(mutations_dir)]

        try:
            # run detection subprocess capture output check success
            det_proc = subprocess.run(detection_cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, check=True)
            # write output log file
            detection_log_file.write_text(det_proc.stdout)
            # log success run detection
            logger.info("[round %d] => detection => returncode=%d", round_num, det_proc.returncode)
        except subprocess.CalledProcessError as e:
            # log error if detection fail include output
            logger.error(f"[round {round_num}] detection process failed return code {e.returncode}")
            logger.error(f"detection output stderr stdout:\n{e.output}")
            continue 
        except Exception as e:
            # log unexpected error detection
            logger.exception(f"[round {round_num}] unexpected error occurred during detection: {e}")
            continue 

    # after all round finish aggregate coverage
    aggregate_coverage_across_all_rounds(run_dir)
    # log complete fuzz run final result dir
    logger.info("[complete] all fuzzing rounds done => results => %s", run_dir)

# run main function if script execute direct
if __name__ == "__main__":
    main()
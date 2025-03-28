import pytest
import subprocess
import os
from pathlib import Path
import json
import re  # Import re for regex
import logging  # Import logging for caplog
import shutil  # Import shutil for copytree

# --- Logging setup for test_orchestrator.py ---
logger = logging.getLogger("test-orchestrator")
logger.setLevel(logging.DEBUG)
logging.basicConfig(level=logging.DEBUG)

# --- Configuration for Orchestrator Test ---
ORCHESTRATOR_SCRIPT_PATH = Path("./orchestrator.py")  # Adjust path if needed
TEST_ORCHESTRATOR_RUN_DIR = Path("./test_orchestrator_run") # Temp output dir for orchestrator test
TEST_ORCHESTRATOR_PERSISTENT_OUTPUT_DIR = Path("./persistent_test_output") # Persistent output directory # ADDED
TEST_SEEDS_DIR_ORCHESTRATOR = Path("./test_seeds_orchestrator") # Separate seed dir for orchestrator test

# --- Pytest Fixtures ---
@pytest.fixture(scope="session", autouse=True)
def setup_orchestrator_test_environment():
    TEST_ORCHESTRATOR_RUN_DIR.mkdir(exist_ok=True, parents=True)
    TEST_SEEDS_DIR_ORCHESTRATOR.mkdir(exist_ok=True)
    TEST_ORCHESTRATOR_PERSISTENT_OUTPUT_DIR.mkdir(exist_ok=True, parents=True) # Ensure persistent output dir exists # ADDED

    # Create minimal seed files for orchestrator test
    (TEST_SEEDS_DIR_ORCHESTRATOR / "seed_a_orch.html").write_text("<!DOCTYPE html><html><head><title>Seed A Orch Test</title></head><body><p>Seed A Orch Test Content</p></body></html>")
    (TEST_SEEDS_DIR_ORCHESTRATOR / "seed_b_orch.html").write_text("<!DOCTYPE html><html><head><title>Seed B Orch Test</title></head><body><p>Seed B Orch Test Content</p></body></html>")
    yield
    # Teardown: Copy output and then cleanup
    if TEST_ORCHESTRATOR_RUN_DIR.exists() and any(TEST_ORCHESTRATOR_RUN_DIR.iterdir()): # Check if run dir is not empty # MODIFIED TEARDOWN
        persistent_run_output_dir = TEST_ORCHESTRATOR_PERSISTENT_OUTPUT_DIR / TEST_ORCHESTRATOR_RUN_DIR.name
        shutil.copytree(TEST_ORCHESTRATOR_RUN_DIR, persistent_run_output_dir, dirs_exist_ok=True) # Copy output
        logger.info(f"Test output copied to persistent directory: {persistent_run_output_dir}") # Log copy action
    shutil.rmtree(TEST_ORCHESTRATOR_RUN_DIR) # Cleanup temp output dir after tests


def run_orchestrator(num_mutations: int, num_rounds: int, run_dir: Path, seed_a_path: Path, seed_b_path: Path) -> subprocess.CompletedProcess:
    """Helper function to run orchestrator pipeline subprocess."""
    orchestrator_cmd = ["python3", str(ORCHESTRATOR_SCRIPT_PATH), str(num_mutations), str(num_rounds)]
    env = os.environ.copy()
    env.update({
        "LOGGER_DIR": str(run_dir),
        "MUTATION_SEED_A": str(seed_a_path),
        "MUTATION_SEED_B": str(seed_b_path),
    })
    logger.debug(f"Running orchestrator command: {orchestrator_cmd}") # Log the command
    logger.debug(f"Environment variables: {env}") # Log environment variables
    result = subprocess.run(orchestrator_cmd, env=env, capture_output=True, text=True, check=False)
    return result

# --- Test Function for Full Orchestrator Run ---
def test_orchestrator_full_pipeline_run(caplog): # Inject caplog fixture for logging capture
    """Test a normal run of the orchestrator pipeline (mutation + detection)."""
    num_mutations = 2
    num_rounds = 1 # Just one round for this test
    run_dir = TEST_ORCHESTRATOR_RUN_DIR / "full_run_test"
    run_dir.mkdir(exist_ok=True)
    seed_a = TEST_SEEDS_DIR_ORCHESTRATOR / "seed_a_orch.html"
    seed_b = TEST_SEEDS_DIR_ORCHESTRATOR / "seed_b_orch.html"

    caplog.set_level(logging.DEBUG) # Capture DEBUG logs from test

    result = run_orchestrator(num_mutations=num_mutations, num_rounds=num_rounds, run_dir=run_dir, seed_a_path=seed_a, seed_b_path=seed_b)

    assert result.returncode == 0, f"Orchestrator pipeline failed. Return code: {result.returncode}\nStdout:\n{result.stdout}\nStderr:\n{result.stderr}"

    assert run_dir.exists(), f"Run directory (base) not created at: {run_dir}. Orchestrator Stdout:\n{result.stdout}\nOrchestrator Stderr:\n{result.stderr}" # More detailed error message

    # Dynamically extract run directory name from orchestrator output
    run_dir_match = re.search(r"\[INIT\] Created run => (.+)", result.stdout) # Regex to find the log message
    assert run_dir_match, "Run directory log message not found in orchestrator output."
    dynamic_run_dir_name = Path(run_dir_match.group(1)) # Extract the captured path
    assert dynamic_run_dir_name.is_dir(), f"Run directory path extracted is not a directory: {dynamic_run_dir_name}. Orchestrator Stdout:\n{result.stdout}\nOrchestrator Stderr:\n{result.stderr}"


    round_001_dir = dynamic_run_dir_name / "round_001" # Use dynamic run dir name
    assert round_001_dir.exists(), f"Round 001 directory not created at: {round_001_dir}. Orchestrator Stdout:\n{result.stdout}\nOrchestrator Stderr:\n{result.stderr}"

    mutations_dir = round_001_dir / "mutations" # Use dynamic run dir name here too!
    assert mutations_dir.exists() and any(mutations_dir.iterdir()), f"Mutations directory missing or empty at: {mutations_dir}. Orchestrator Stdout:\n{result.stdout}\nOrchestrator Stderr:\n{result.stderr}"

    crash_results_dir = round_001_dir / "crash_results" # Use dynamic run dir name here too!
    assert crash_results_dir.exists(), f"Crash results directory missing at: {crash_results_dir}. Orchestrator Stdout:\n{result.stdout}\nOrchestrator Stderr:\n{result.stderr}"

    reports_dir = crash_results_dir / "reports" # Use dynamic run dir name here too!
    assert reports_dir.exists() and any(reports_dir.glob("*.txt")) and any(reports_dir.glob("*.json")), f"Reports directory missing or report files missing at: {reports_dir}. Orchestrator Stdout:\n{result.stdout}\nOrchestrator Stderr:\n{result.stderr}"

    coverage_summary_path = crash_results_dir / "coverage_summary.json" # Use dynamic run dir name here too!
    assert coverage_summary_path.is_file(), f"Coverage summary JSON file missing at: {coverage_summary_path}. Orchestrator Stdout:\n{result.stdout}\nOrchestrator Stderr:\n{result.stderr}"

    with open(coverage_summary_path, "r", encoding="utf-8") as f:
        coverage_data = json.load(f)
        assert "files" in coverage_data and coverage_data["files"], f"Coverage summary JSON should contain file coverage data in: {coverage_summary_path}. Orchestrator Stdout:\n{result.stdout}\nOrchestrator Stderr:\n{result.stderr}"

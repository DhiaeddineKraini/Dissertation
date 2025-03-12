#!/usr/bin/env python3
"""
seed_selector.py
----------------
Handles adaptive seed selection with a multi-armed-bandit (UCB) approach.
Stores seed data in a local seed_db.json with:
  - score
  - tries
  - last_used_round
"""

import os
import json
import math
import logging
from typing import Dict, Any, List

logger = logging.getLogger(__name__)

SEED_DB_FILE = "seed_db.json"

def load_seed_db() -> Dict[str, Any]:
    """
    Loads (or creates) the seed database from seed_db.json
    """
    if not os.path.exists(SEED_DB_FILE):
        return {}
    try:
        with open(SEED_DB_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        logger.exception("Failed to load seed_db.json => returning empty. Error: %s", e)
        return {}

def save_seed_db(seed_db: Dict[str, Any]) -> None:
    """
    Saves the updated seed database to disk.
    """
    try:
        with open(SEED_DB_FILE, "w", encoding="utf-8") as f:
            json.dump(seed_db, f, indent=2)
    except Exception as e:
        logger.exception("Failed to save seed_db.json => %s", e)

def update_seed_stats(
    seed_db: Dict[str, Any],
    coverage_improvements: Dict[str, float],
    crashes: List[str],
    round_num: int
):
    """
    Increments 'score' for seeds that discovered coverage or triggered a unique crash.
    coverage_improvements: { '/abs/path/seed.html': coverage_gain }
    crashes: list of seed paths that caused new crashes
    """
    COVERAGE_WEIGHT = 1.0
    CRASH_BONUS = 10.0

    for seed_path, gain in coverage_improvements.items():
        if seed_path not in seed_db:
            seed_db[seed_path] = {"score": 0.0, "tries": 0, "last_used_round": -1}
        seed_db[seed_path]["score"] += COVERAGE_WEIGHT * gain

    for seed_path in crashes:
        if seed_path not in seed_db:
            seed_db[seed_path] = {"score": 0.0, "tries": 0, "last_used_round": -1}
        seed_db[seed_path]["score"] += CRASH_BONUS

def pick_seeds_ucb(
    seed_db: Dict[str, Any],
    round_num: int,
    num_seeds: int = 2,
    skip_recent_round: bool = True
) -> List[str]:
    """
    Picks seeds using UCB1. If skip_recent_round=True, excludes seeds used last round_num-1.
    Returns up to num_seeds paths. If none found, returns empty list.
    """
    total_tries = sum((s["tries"] for s in seed_db.values() if s["tries"]>0))
    if total_tries < 1:
        total_tries = 1

    c = 2.0  # exploration constant
    candidates = []
    for path_str, meta in seed_db.items():
        if skip_recent_round and meta["last_used_round"] == (round_num - 1):
            continue
        tries = meta["tries"] if meta["tries"]>0 else 1
        avg_reward = meta["score"] / tries
        bonus = c * math.sqrt(math.log(total_tries)/tries)
        ucb = avg_reward + bonus
        candidates.append((path_str, ucb))

    if not candidates:
        return []

    # sort descending by UCB
    candidates.sort(key=lambda x: x[1], reverse=True)
    chosen = [c[0] for c in candidates[:num_seeds]]

    # increment tries & mark round usage
    for path_str in chosen:
        seed_db[path_str]["tries"] += 1
        seed_db[path_str]["last_used_round"] = round_num

    return chosen

"""Convert HF dataset CSVs to JSON for the npm package.

Run from repo root:
  python scripts/convert_csv_to_json.py
"""
from pathlib import Path
import csv, json

ROOT = Path(__file__).resolve().parents[1]
HF = ROOT / "hf-dataset" / "data"
NPM_DATA = ROOT / "npm-package" / "src" / "data"
NPM_DATA.mkdir(parents=True, exist_ok=True)

def to_json(csv_path: Path):
    with csv_path.open(newline="", encoding="utf-8") as f:
        return list(csv.DictReader(f))

states = to_json(HF / "states.csv")
operators = to_json(HF / "operators.csv")

(NPM_DATA / "states.json").write_text(json.dumps(states, indent=2), encoding="utf-8")
(NPM_DATA / "operators.json").write_text(json.dumps(operators, indent=2), encoding="utf-8")

print("Wrote JSON files to", NPM_DATA)

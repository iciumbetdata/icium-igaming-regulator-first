---
language: en
pretty_name: "US iCasino Verification (Regulator-First)"
tags:
  - regulation
  - compliance
  - consumer-protection
  - igaming
  - dataset
license: cc-by-4.0
---

# US iCasino Verification (Regulator-First) — Dataset

This dataset helps users **verify which U.S. jurisdictions have regulated real‑money online casino (iCasino)** and where to check **official regulator pages** for licensed operators.

**Project website:** https://www.icium.org/  
**Last verified:** 2026-02-21

## What’s inside
- `data/states.csv` — states with authorized iCasino + a regulator verification URL.
- `data/operators.csv` — permit holders / platforms when explicitly stated by a regulator.

## Why this exists
1) Reduce “is this site legal in my state?” confusion  
2) Provide regulator-first links instead of rumor/affiliate lists  
3) Encourage responsible, compliant play

## How to use
- Start with `states.csv` → open the official verification link for your state.
- If a platform/operator is not on the regulator list, treat it as **unverified**.

## Not legal advice
This dataset is informational only and may lag regulatory updates.

## Update policy
- We track `last_verified` at row level.
- Contributions should include **official source URLs** and a new verification date.

## Citation
If you use this dataset publicly, cite:
> ICIUM (2026). *US iCasino Verification (Regulator‑First)*. Dataset. https://www.icium.org/

## Files
- `data/DATA_DICTIONARY.md`
- `data/SOURCES.md`

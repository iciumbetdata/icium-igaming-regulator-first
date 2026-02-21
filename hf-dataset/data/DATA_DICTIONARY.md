# Data dictionary (v1)

## states.csv
- state_code: USPS abbreviation.
- state_name: Full state name.
- igaming_legal: yes/no for real-money online casino (iCasino).
- regulator_name: Primary regulator.
- regulator_site: Regulator homepage.
- official_verification_or_operator_list_url: Public regulator page/PDF where users can verify legal operators.
- notes: Scope notes / caveats.
- last_verified: Date the source URL was checked.

## operators.csv
- state_code: USPS abbreviation.
- operator_name: Brand/licensee/permit holder (or label for a regulator list page).
- operator_type: Permit holder / legal platform / list label.
- official_source_url: Regulator page or PDF backing the claim.
- notes: Extra context.
- last_verified: Date the source URL was checked.

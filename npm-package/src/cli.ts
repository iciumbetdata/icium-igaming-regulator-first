#!/usr/bin/env node
import { getStates } from "./index.js";

function main() {
  const rows = getStates();
  console.log("US iCasino verification (regulator-first)");
  console.log("----------------------------------------");
  for (const r of rows) {
    console.log(`${r.state_code} | ${r.state_name} | legal=${r.igaming_legal} | verify: ${r.official_verification_or_operator_list_url}`);
  }
}

main();

# icium-igaming-registry

Regulator-first **US iCasino verification** data + tiny helper functions.

- ✅ No affiliate links
- ✅ Uses official regulator pages as the source of truth
- ✅ Includes `last_verified` fields for freshness

**Project website:** https://www.icium.org/  
**Initial data verified:** 2026-02-21

## Install
```bash
npm i icium-igaming-registry
```

## Use (library)
```js
import { getStates, getStateByCode, getVerificationUrl } from "icium-igaming-registry";

console.log(getStates().length);
console.log(getStateByCode("PA"));
console.log(getVerificationUrl("NJ"));
```

## Use (CLI)
```bash
npx icium-igaming-registry
# or after install:
icium-igaming
```

## Notes
Informational only — not legal advice. Always confirm via the regulator verification URL.

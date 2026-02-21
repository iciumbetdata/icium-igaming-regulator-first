import states from "./data/states.json" assert { type: "json" };
import operators from "./data/operators.json" assert { type: "json" };

export type StateRow = typeof states[number];
export type OperatorRow = typeof operators[number];

export function getStates(): StateRow[] {
  return states as StateRow[];
}

export function getOperators(): OperatorRow[] {
  return operators as OperatorRow[];
}

export function getStateByCode(code: string): StateRow | undefined {
  const c = code.trim().toUpperCase();
  return (states as StateRow[]).find(s => s.state_code.toUpperCase() === c);
}

export function getOperatorsByState(code: string): OperatorRow[] {
  const c = code.trim().toUpperCase();
  return (operators as OperatorRow[]).filter(o => o.state_code.toUpperCase() === c);
}

export function getVerificationUrl(code: string): string | undefined {
  return getStateByCode(code)?.official_verification_or_operator_list_url;
}

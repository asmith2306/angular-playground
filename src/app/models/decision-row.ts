export class DecisionData {
  name: string;
  type: string;
  value: string;
}

export class DecisionRow {
  comment: string;
  inputs: Array<DecisionData>;
  outputs: Array<DecisionData>;
}

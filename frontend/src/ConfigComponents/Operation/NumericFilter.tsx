type DefaultFilterNames =
  | "above level"
  | "below level"
  | "above degrees"
  | "below degrees"
  | "None";

export type NumericFilter = {
  name: DefaultFilterNames;
  maxValue: number;
  minValue: number;
};

export const NoneFilter: NumericFilter = {
  name: "None",
  maxValue: 0,
  minValue: 0,
};

export const aboveLevelFilter: NumericFilter = {
  name: "above level",
  maxValue: 1000,
  minValue: -1000,
};
export const belowLevelFilter: NumericFilter = {
  name: "below level",
  maxValue: 1000,
  minValue: -1000,
};
export const aboveDegreesFilter: NumericFilter = {
  name: "above degrees",
  maxValue: 90,
  minValue: 0,
};
export const belowDegreesFilter: NumericFilter = {
  name: "below degrees",
  maxValue: 90,
  minValue: 0,
};
export const StandardFilters: NumericFilter[] = [
  aboveDegreesFilter,
  belowDegreesFilter,
  aboveLevelFilter,
  belowLevelFilter,
];

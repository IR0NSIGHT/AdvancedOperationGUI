import { NumericFilterSetting } from "./NumericFilterSetting";
import {
  aboveDegreesFilter,
  aboveLevelFilter,
  belowDegreesFilter,
  belowLevelFilter,
} from "./NumericFilter";

export type StandardFilter = {
  aboveLevel: number | undefined;
  belowLevel: number | undefined;
  belowDegrees: number | undefined;
  aboveDegrees: number | undefined;
};

export const StandardToNumericFilter = (
  std: StandardFilter
): NumericFilterSetting[] => {
  return [
    { filter: aboveLevelFilter, value: std.aboveLevel },
    { filter: belowLevelFilter, value: std.belowLevel },
    { filter: aboveDegreesFilter, value: std.aboveDegrees },
    { filter: belowDegreesFilter, value: std.belowDegrees },
  ];
};

export const NumericToStandardFilter = (
  xs: NumericFilterSetting[]
): StandardFilter => {
  const filter: StandardFilter = {
    aboveDegrees: undefined,
    aboveLevel: undefined,
    belowDegrees: undefined,
    belowLevel: undefined,
  };
  xs.forEach((x) => {
    switch (x.filter.name) {
      case "above degrees":
        filter.aboveDegrees = x.value;
        return;
      case "below degrees":
        filter.belowDegrees = x.value;
        return;
      case "above level":
        filter.aboveLevel = x.value;
        return;
      case "below level":
        filter.belowLevel = x.value;
        return;
      default: //ignore
    }
  });
  return filter;
};

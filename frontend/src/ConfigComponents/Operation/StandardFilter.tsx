import { NumericFilterSetting } from "./NumericFilterSetting";

export type StandardFilter = {
  aboveLevel: number | undefined;
  belowLevel: number | undefined;
  belowDegrees: number | undefined;
  aboveDegrees: number | undefined;
};
export const NumericToStandardFilter = (
  xs: NumericFilterSetting[]
): StandardFilter => {
  const filter = {
    aboveDegrees: undefined,
    aboveLevel: undefined,
    belowDegrees: undefined,
    belowLevel: undefined,
  };
  return filter;
};
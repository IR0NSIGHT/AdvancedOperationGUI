import React from "react";
import { SelectChangeEvent } from "@mui/material";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

export const StandardFilters: NumericFilter[] = [
  { name: "above level", maxValue: 1000, minValue: -1000 },
  { name: "below level", maxValue: 1000, minValue: -1000 },
  { name: "above degrees", maxValue: 90, minValue: 0 },
  { name: "below degrees", maxValue: 90, minValue: 0 },
];

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

type NumericFilterSelectProp = {
  selectedFilter: NumericFilter;
  allowedFilters: NumericFilter[];
  onFilterChanged: (old: NumericFilter, newF: NumericFilter) => void;
};
export const NumericFilterSelect: React.FC<NumericFilterSelectProp> = ({
  selectedFilter,
  allowedFilters,
  onFilterChanged,
}) => {
  const handleChange = (event: SelectChangeEvent<number>) => {
    onFilterChanged(
      selectedFilter,
      allowedFilters[event.target.value as number]
    );
  };
  const displayedFilterIdx = allowedFilters.findIndex(
    (f) => f.name == selectedFilter.name
  );
  return (
    <FormControl style={{ width: "10em" }}>
      <InputLabel id="demo-select-small-label">Layer</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={displayedFilterIdx}
        label="Filter Type"
        // @ts-ignore
        onChange={handleChange}
      >
        {allowedFilters.map((x, idx) => (
          <MenuItem value={idx}>{x.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

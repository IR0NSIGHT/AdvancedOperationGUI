import React from "react";
import { SelectChangeEvent } from "@mui/material";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { NumericFilter } from "./NumericFilter";

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
    (f) => f.name === selectedFilter.name
  );
  return (
    <FormControl style={{ width: "10em" }}>
      <InputLabel id="demo-select-small-label">Filter</InputLabel>
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

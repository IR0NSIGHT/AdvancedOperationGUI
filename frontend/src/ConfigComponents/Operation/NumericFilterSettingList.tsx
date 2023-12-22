import { NumericFilter, NumericFilterSelect } from "./NumericFilterSelect";
import React from "react";
import { Button } from "@material-ui/core";

type NumericFilterSetting = { filter: NumericFilter; value: number };
type NumericFilterSettingListProps = {
  listedFilters: NumericFilterSetting[];
  allowedFilters: NumericFilter[];
  onFiltersChanged: (
    old: NumericFilterSetting[],
    newFilters: NumericFilterSetting[]
  ) => void;
};
export const NumericFilterSettingList: React.FC<
  NumericFilterSettingListProps
> = ({ allowedFilters, listedFilters, onFiltersChanged }) => {
  const setFilterType = (idx: number, filter: NumericFilter) => {
    const newFilters = [...listedFilters];
    newFilters[idx] = { filter: filter, value: newFilters[idx].value };
    onFiltersChanged(listedFilters, newFilters);
  };

  const addFilter = () => {};

  const filters = listedFilters.map((f, idx) => (
    <NumericFilterSelect
      selectedFilter={f.filter}
      allowedFilters={allowedFilters}
      onFilterChanged={(old, newF) => setFilterType(idx, newF)}
    />
  ));
  return (
    <div>
      {filters}
      <Button variant="contained" color="primary" onClick={addFilter}>
        Add new filter
      </Button>
    </div>
  );
};

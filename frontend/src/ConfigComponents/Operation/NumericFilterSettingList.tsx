import { NumericFilter, NumericFilterSelect } from "./NumericFilterSelect";
import React from "react";
import { Button } from "@material-ui/core";
import { DeleteButton } from "../DeleteButton";

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

  const deleteFilter = (id: number) => {};

  const filters = listedFilters.map((f, idx) => (
    <div>
      <NumericFilterSelect
        selectedFilter={f.filter}
        allowedFilters={allowedFilters}
        onFilterChanged={(old, newF) => setFilterType(idx, newF)}
      />
      <DeleteButton onClick={() => deleteFilter(idx)} />
    </div>
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

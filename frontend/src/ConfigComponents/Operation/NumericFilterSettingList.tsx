import { NumericFilterSelect } from "./NumericFilterSelect";
import React from "react";
import { Button } from "@material-ui/core";
import { DeleteButton } from "../DeleteButton";
import { NumericFilterSetting } from "./NumericFilterSetting";
import { NumericFilter } from "./NumericFilter";

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
  const setFilterType = (
    oldF: NumericFilter | undefined,
    newF: NumericFilter | undefined
  ) => {
    const others = listedFilters.filter(
      (f) => f.filter.name != oldF?.name && f.filter.name != newF?.name
    );
    const out =
      newF !== undefined
        ? [...others, { filter: newF, value: 0 }].sort((a, b) =>
            a.filter.name.localeCompare(b.filter.name)
          )
        : others;
    onFiltersChanged(listedFilters, out);
  };

  const addFilter = () => {
    const newFilters = [
      ...listedFilters.filter((t) => t.filter.name != allowedFilters[0].name),
      {
        filter: allowedFilters[0],
        value: 0,
      },
    ];
    onFiltersChanged(listedFilters, newFilters);
  };

  const deleteFilter = (f: NumericFilter) => {
    onFiltersChanged(
      listedFilters,
      listedFilters.filter((x) => x.filter.name !== f.name)
    );
  };

  const filters = listedFilters.map((f, idx) => (
    <div>
      <NumericFilterSelect
        selectedFilter={f.filter}
        allowedFilters={allowedFilters}
        onFilterChanged={setFilterType}
      />
      <DeleteButton onClick={() => deleteFilter(f.filter)} />
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

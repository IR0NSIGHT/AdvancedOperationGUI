import React from "react";
import { Button } from "@material-ui/core";
import { NumericFilterSetting } from "./NumericFilterSetting";
import { NumericFilter } from "./NumericFilter";
import { NumericFilterSettingEditor } from "./NumericFilterSettingEditor";
import { AddButton } from "../Terrain/AddButton";

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
  const onFilterChanged = (
    oldF: NumericFilterSetting | null,
    newF: NumericFilterSetting | null
  ) => {
    const others = listedFilters.filter(
      (f) =>
        f.filter.name != oldF?.filter.name && f.filter.name != newF?.filter.name
    );
    const out =
      newF !== null
        ? [...others, newF].sort((a, b) =>
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

  const filters = listedFilters.map((f, idx) => (
    <NumericFilterSettingEditor
      allowedFilters={allowedFilters}
      onSettingChanged={onFilterChanged}
      setting={f}
    ></NumericFilterSettingEditor>
  ));
  return (
    <div>
      {filters}
      <AddButton title={"Add filter"} addAction={addFilter} />
    </div>
  );
};

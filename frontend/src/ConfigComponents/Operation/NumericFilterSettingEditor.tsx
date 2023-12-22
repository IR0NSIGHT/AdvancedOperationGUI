import React from "react";
import { NumericFilter } from "./NumericFilter";
import { NumericFilterSelect } from "./NumericFilterSelect";
import { NumberInput } from "./NumberInput";
import { DeleteButton } from "../DeleteButton";
import { NumericFilterSetting } from "./NumericFilterSetting";

type NumericFilterSettingEditorProps = {
  setting: NumericFilterSetting;
  allowedFilters: NumericFilter[];
  onSettingChanged: (
    old: NumericFilterSetting | null,
    newS: NumericFilterSetting | null
  ) => void;
};
/**
 * component to select a filter type, filter value and delete button
 * @param setting
 * @param onSettingChanged
 * @param allowedFilters
 * @constructor
 */
export const NumericFilterSettingEditor: React.FC<
  NumericFilterSettingEditorProps
> = ({ setting, onSettingChanged, allowedFilters }) => {
  const setFilterType = (oldT: NumericFilter, newT: NumericFilter) => {
    onSettingChanged(setting, {
      filter: newT,
      value: 0.5 * (newT.maxValue + newT.minValue),
    });
  };

  const setFilterValue = (oldV: number, newV: number) => {
    onSettingChanged(setting, { filter: setting.filter, value: newV });
  };

  return (
    <div>
      <NumericFilterSelect
        selectedFilter={setting.filter}
        allowedFilters={allowedFilters}
        onFilterChanged={setFilterType}
      />
      <NumberInput
        value={setting.value ?? 0}
        onInput={setFilterValue}
        isAllowed={(n) =>
          setting.filter.maxValue >= n && setting.filter.minValue <= n
        }
      />
      <DeleteButton onClick={() => onSettingChanged(setting, null)} />
    </div>
  );
};

import { NumericFilterSelect } from "./NumericFilterSelect";
import React, { useEffect, useState } from "react";
import { Button, TextField } from "@material-ui/core";
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
      <Button variant="contained" color="primary" onClick={addFilter}>
        Add new filter
      </Button>
    </div>
  );
};

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
const NumericFilterSettingEditor: React.FC<NumericFilterSettingEditorProps> = ({
  setting,
  onSettingChanged,
  allowedFilters,
}) => {
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

type NumberInputProps = {
  value: number;
  onInput: (nOld: number, nNew: number) => void;
  isAllowed: (n: number) => boolean;
};
const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onInput,
  isAllowed,
}) => {
  const [inputValue, setInputValue] = useState<number>(value);
  //update input value state when props change
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const parsedNumber = parseInt(value, 10);
    if (!isNaN(parsedNumber) && isAllowed(parsedNumber)) {
      onInput(inputValue, parsedNumber);
      setInputValue(parsedNumber);
    }
  };

  return (
    <TextField
      id="outlined-number"
      label="Number"
      type="number"
      onChange={handleInputChange}
      InputLabelProps={{
        shrink: true,
      }}
      value={inputValue}
    />
  );
};

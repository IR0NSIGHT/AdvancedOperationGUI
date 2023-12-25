import React from "react";
import { MenuItem, Select } from "@material-ui/core";

export type NamedValue = { value: number; name: string };
export const DropdownSelect: React.FC<{
  selected: NamedValue;
  allItems: NamedValue[];
  noneItem: NamedValue;
  onChange: (newSelected: NamedValue) => void;
  label: string;
}> = ({ selected, allItems, noneItem, onChange, label }) => {
  const changed = (
    event: React.ChangeEvent<{
      name?: string;
      value: unknown;
    }>
  ) => {
    const id = parseInt((event.target as HTMLSelectElement).value);
    onChange(allItems.find((i) => i.value == id)!);
  };
  return (
    <Select
      labelId="demo-select-small-label"
      id="demo-select-small"
      value={selected.value}
      label={label}
      onChange={changed}
    >
      <MenuItem value={noneItem.value} disabled style={{ display: "none" }}>
        {noneItem.name}
      </MenuItem>
      {allItems.map((item) => (
        <MenuItem value={item.value}>{item.name}</MenuItem>
      ))}
    </Select>
  );
};

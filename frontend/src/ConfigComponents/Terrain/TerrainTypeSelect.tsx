import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NoneTerrain, WpTerrainType } from "./WpTerrainTypes";

export type TerrainTypeSelectProps = {
  terrain: WpTerrainType;
  terrainList: WpTerrainType[];
  onUpdateTerrainName: (newTerrainId: number) => void;
  noneTerrain: WpTerrainType;
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "25em",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const TerrainTypeSelect: React.FC<TerrainTypeSelectProps> = ({
  terrain,
  terrainList,
  onUpdateTerrainName,
  noneTerrain,
}: TerrainTypeSelectProps) => {
  const handleNameChange = (newSelected: NamedValue) => {
    onUpdateTerrainName(newSelected.value);
  };

  const classes = useStyles();
  const selectedItem = { value: terrain.id, name: terrain.shortName };
  const allItems = terrainList.map((t) => ({ value: t.id, name: t.shortName }));
  const noneItem = { value: noneTerrain.id, name: noneTerrain.shortName };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-select-small-label">Layer</InputLabel>
      <DropdownSelect
        selected={selectedItem}
        allItems={allItems}
        noneItem={noneItem}
        onChange={handleNameChange}
        label={"Terrain"}
      />
    </FormControl>
  );
};

export default TerrainTypeSelect;

type NamedValue = { value: number; name: string };
const DropdownSelect: React.FC<{
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

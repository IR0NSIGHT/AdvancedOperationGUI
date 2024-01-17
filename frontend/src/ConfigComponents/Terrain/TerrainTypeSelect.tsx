import React from "react";
import { FormControl, InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { WpTerrainType } from "./WpTerrainTypes";
import { DropdownSelect, NamedValue } from "./DropdownSelect";

export type TerrainTypeSelectProps = {
  terrain: WpTerrainType;
  terrainList: WpTerrainType[];
  onUpdateTerrainName: (newTerrainId: number) => void;
  noneTerrain: WpTerrainType;
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "10em",
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
  const allItems = terrainList
    .sort((a, b) => a.shortName.localeCompare(b.shortName))
    .map((t) => ({ value: t.id, name: t.shortName }));
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

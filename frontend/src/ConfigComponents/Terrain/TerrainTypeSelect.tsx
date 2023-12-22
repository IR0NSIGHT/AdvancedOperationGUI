import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { WpTerrainType } from "./WpTerrainTypes";

export type TerrainTypeSelectProps = {
  terrain: WpTerrainType;
  terrainList: WpTerrainType[];
  onUpdateTerrainName: (newTerrainId: number) => void;
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

export const NoneTerrain: WpTerrainType = {
  id: -1,
  name: "None",
  shortName: "None",
};

export const TerrainTypeSelect: React.FC<TerrainTypeSelectProps> = ({
  terrain,
  terrainList,
  onUpdateTerrainName,
}: TerrainTypeSelectProps) => {
  const handleNameChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>,
    child: React.ReactNode
  ) => {
    const newName = (event.target as HTMLSelectElement).value;
    onUpdateTerrainName(parseInt(newName)); // Call the prop function to update the name in the parent component
  };

  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-select-small-label">Layer</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={terrain.id}
        label="Terrain"
        onChange={handleNameChange}
        renderValue={(selected) => {
          const selectedTerrain = terrainList.find((t) => t.id === selected);
          return selectedTerrain
            ? selectedTerrain.shortName
            : NoneTerrain.shortName;
        }}
      >
        <MenuItem value={NoneTerrain.id}>
          <em>{NoneTerrain.name}</em>
        </MenuItem>
        {terrainList.map((terrain) => (
          <MenuItem value={terrain.id}>{terrain.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TerrainTypeSelect;

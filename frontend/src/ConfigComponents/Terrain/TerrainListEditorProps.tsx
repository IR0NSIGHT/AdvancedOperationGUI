import React from "react";
import {
  NoneTerrain,
  sortTerrainAlphabetically,
  WpTerrainType,
} from "./WpTerrainTypes";
import TerrainTypeSelect from "./TerrainTypeSelect";
import { DeleteButton } from "../DeleteButton";
import { Button } from "@material-ui/core";

export type TerrainListEditorProps = {
  terrainList: WpTerrainType[];
  allowedTerrains: WpTerrainType[];
  onListChanged: (old: WpTerrainType[], newTerrain: WpTerrainType[]) => void;
};
export const TerrainListEditor: React.FC<TerrainListEditorProps> = ({
  onListChanged,
  terrainList,
  allowedTerrains,
}) => {
  const addTerrain = () => {
    onListChanged(terrainList, [...terrainList, NoneTerrain]);
  };
  const changeTerrain = (fromId: number, toId: number) => {
    const others = terrainList.filter((t) => t.id !== fromId && t.id !== toId);
    const toTerrain = allowedTerrains.find((t) => t.id === toId);
    if (toTerrain !== undefined) others.push(toTerrain);
    onListChanged(terrainList, sortTerrainAlphabetically(others));
  };
  const deleteTerrain = (fromId: number) => {
    return () =>
      onListChanged(
        terrainList,
        terrainList.filter((t) => t.id !== fromId)
      );
  };

  return (
    <div>
      {terrainList.map((t) => (
        <div>
          <TerrainTypeSelect
            terrain={t}
            terrainList={allowedTerrains}
            onUpdateTerrainName={(newId: number) => changeTerrain(t.id, newId)}
          />
          <DeleteButton onClick={deleteTerrain(t.id)} />
        </div>
      ))}
      <Button variant="contained" color="primary" onClick={addTerrain}>
        Add new terrain
      </Button>
    </div>
  );
};

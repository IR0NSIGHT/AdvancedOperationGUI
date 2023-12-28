import React from "react";
import {
  NoneTerrain,
  sortTerrainAlphabetically,
  WpTerrainType,
} from "./WpTerrainTypes";
import TerrainTypeSelect from "./TerrainTypeSelect";
import { DeleteButton } from "../DeleteButton";
import { AddButton } from "./AddButton";

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
  const allLegalValues = [NoneTerrain, ...allowedTerrains];
  const addTerrain = () => {
    changeTerrain(NoneTerrain.id, NoneTerrain.id);
  };
  const changeTerrain = (fromId: number, toId: number) => {
    const others = terrainList.filter((t) => t.id !== fromId && t.id !== toId);
    const toTerrain = allLegalValues.find((t) => t.id === toId);
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
            noneTerrain={NoneTerrain}
          />
          <DeleteButton onClick={deleteTerrain(t.id)} />
        </div>
      ))}
      <AddButton title={"Add terrain"} addAction={addTerrain} />
    </div>
  );
};

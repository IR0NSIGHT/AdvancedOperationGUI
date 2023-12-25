import {
  getTerrainById,
  NoneTerrain,
  sortTerrainAlphabetically,
  WpTerrainType,
  wpTerrainTypes,
} from "./WpTerrainTypes";
import { DeleteButton } from "../DeleteButton";
import { NumberInput } from "../Operation/NumberInput";
import React from "react";
import TerrainTypeSelect from "./TerrainTypeSelect";

export type WeightedTerrainSetting = { terrain: WpTerrainType; weight: number };

export type WeightedTerrainEditorProps = {
  terrainSetting: WeightedTerrainSetting;
  onUpdateSetting: (
    oldSetting: WeightedTerrainSetting | null,
    newSetting: WeightedTerrainSetting | null
  ) => void;
};

export const WeightedTerrainEditor: React.FC<WeightedTerrainEditorProps> = ({
  terrainSetting,
  onUpdateSetting,
}: WeightedTerrainEditorProps) => {
  const allowedTerrains = wpTerrainTypes;

  const onTerrainTypeChanged = (id: number) => {
    const newTerrain = getTerrainById(id, allowedTerrains);
    if (newTerrain === undefined) {
      console.error("terrain type with id " + id + " was not found!");
      return;
    }
    onUpdateSetting(terrainSetting, { ...terrainSetting, terrain: newTerrain });
  };
  const onValueChange = (oldV: number, value: number) => {
    console.log("on value change: newValue", value);
    onUpdateSetting(terrainSetting, {
      ...terrainSetting,
      weight: value,
    });
  };

  return (
    <div>
      <TerrainTypeSelect
        onUpdateTerrainName={onTerrainTypeChanged}
        terrain={terrainSetting.terrain}
        terrainList={sortTerrainAlphabetically(allowedTerrains)}
        noneTerrain={NoneTerrain}
      />
      <NumberInput
        value={terrainSetting.weight}
        onInput={onValueChange}
        sanitizeInput={(n) => Math.max(1, n)}
      />

      <DeleteButton
        onClick={() => {
          onUpdateSetting(terrainSetting, null);
        }}
      ></DeleteButton>
    </div>
  );
};

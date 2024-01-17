import { NoneTerrain } from "./WpTerrainTypes";
import {
  WeightedTerrainEditor,
  WeightedTerrainSetting,
} from "./WeightedTerrainEditor";
import React from "react";
import { AddButton } from "./AddButton";
import { iconByTerrain } from "../Icons/IconBar";

export type WeightedTerrainListEditorProps = {
  terrains: WeightedTerrainSetting[];
  onTerrainChanged: (
    oldSetting: WeightedTerrainSetting | null,
    newSetting: WeightedTerrainSetting | null
  ) => void;
};

/**
 * @param xs
 */
export const sortWeightedTerrainList = (
  xs: WeightedTerrainSetting[]
): WeightedTerrainSetting[] => {
  return [...xs].sort(
    (a: WeightedTerrainSetting, b: WeightedTerrainSetting): number => {
      const weight = a.weight - b.weight;
      if (weight !== 0) return weight;
      else return a.terrain.shortName.localeCompare(b.terrain.shortName);
    }
  );
};

export const updateWeightedTerrainList = (
  oldSetting: WeightedTerrainSetting | null,
  newSetting: WeightedTerrainSetting | null,
  terrains: WeightedTerrainSetting[]
): WeightedTerrainSetting[] => {
  const isDeletion = newSetting === null;
  if (terrains === null) {
    return newSetting === null ? [] : [newSetting];
  }

  const otherTerrains = terrains.filter(
    (t) =>
      t.terrain.id !== oldSetting?.terrain.id &&
      t.terrain.id !== newSetting?.terrain.id
  );

  const out = isDeletion ? otherTerrains : [...otherTerrains, newSetting];
  return sortWeightedTerrainList(out);
  //sort by display name aphabetically
};

export const WeightedTerrainListEditor: React.FC<
  WeightedTerrainListEditorProps
> = ({ terrains, onTerrainChanged }) => {
  const terrainList = (): JSX.Element => {
    const icons = terrains
      .map((t) => Array(t.weight).fill(iconByTerrain(t.terrain)))
      .flatMap((i) => i)
      .slice(0, 20);

    return (
      <div>
        <div>{icons}</div>
        <br />
        <div>
          {terrains.map((t) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              {iconByTerrain(t.terrain)}
              <WeightedTerrainEditor
                terrainSetting={t}
                onUpdateSetting={onTerrainChanged}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const addTerrain = () => {
    onTerrainChanged(null, { terrain: NoneTerrain, weight: 1 });
  };
  return (
    <div>
      {terrainList()}
      <AddButton title={"Add terrain"} addAction={addTerrain} />
    </div>
  );
};

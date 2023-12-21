import {NoneTerrain} from "./WpTerrainTypes";
import {WeightedTerrainEditor, WeightedTerrainSetting,} from "./WeightedTerrainEditor";
import React from "react";
import {Button} from "@material-ui/core";

export type WeightedTerrainListEditorProps = {
    terrains: WeightedTerrainSetting[];
    onTerrainChanged: (
        oldSetting: WeightedTerrainSetting | null,
        newSetting: WeightedTerrainSetting | null
    ) => void;
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
    //sort by display name aphabetically
    return out.sort(
        (a: WeightedTerrainSetting, b: WeightedTerrainSetting): number => {
            const weight = a.weight - b.weight;
            if (weight !== 0) return weight;
            else return a.terrain.shortName.localeCompare(b.terrain.shortName);
        }
    );
};

export const WeightedTerrainListEditor: React.FC<WeightedTerrainListEditorProps> =
    ({terrains, onTerrainChanged,}) => {
        const terrainList = (): JSX.Element[] => {
            if (terrains == null)
                return []


            return terrains.map((t) => (
                <WeightedTerrainEditor
                    terrainSetting={t}
                    onUpdateSetting={onTerrainChanged}
                />
            ));
        }
        const addTerrain = () => {
            onTerrainChanged(null, {terrain: NoneTerrain, weight: 1});
        };
        const title = "Apply Terrain"
        return (
            <div>
                <div>
                    <h3>{title}</h3>
                    {terrainList()}
                </div>
                <Button variant="contained" color="primary" onClick={addTerrain}>
                    Add new terrain
                </Button>
                <hr/>
            </div>
        );
    };

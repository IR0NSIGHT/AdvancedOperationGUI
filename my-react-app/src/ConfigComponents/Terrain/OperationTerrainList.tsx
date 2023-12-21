import {sortTerrainAlphabetically, WpTerrainType, wpTerrainTypes} from "./WpTerrainTypes";
import {
    WeightedTerrainEditor,
    WeightedTerrainSetting,
} from "./WeightedTerrainEditor";
import React from "react";
import {Button} from "@material-ui/core";
import TerrainTypeSelect from "./TerrainTypeSelect";
import {DeleteButton} from "../DeleteButton";

export enum TerrainSettingsMode {
    APPLY = "Apply",
    ONLY_ON_TERRAIN = "Filter",
}

export type OperationTerrainListProps = {
    terrains: WeightedTerrainSetting[];
    onTerrainChanged: (
        oldSetting: WeightedTerrainSetting | null,
        newSetting: WeightedTerrainSetting | null
    ) => void;
};

export const updateTerrainList = (
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

const NoneTerrain: WpTerrainType = {id: -1, name: "None", shortName: "None"};

export type TerrainListEditor = {
    terrainList: WpTerrainType[],
    allowedTerrains: WpTerrainType[],
    onListChanged: (old: WpTerrainType[], newTerrain: WpTerrainType[]) => void
}
export const TerrainListEditor: React.FC<TerrainListEditor> =
    ({onListChanged, terrainList, allowedTerrains}) => {
        const addTerrain = () => {
            onListChanged(terrainList, [...terrainList, NoneTerrain])
        }
        const changeTerrain = (fromId: number, toId: number) => {
            const others = terrainList.filter(t => t.id !== fromId && t.id !== toId)
            const toTerrain = allowedTerrains.find(t => t.id === toId);
            if (toTerrain !== undefined)
                others.push(toTerrain)
            onListChanged(terrainList, sortTerrainAlphabetically(others))
        }
        const deleteTerrain = (fromId: number) => {
            return ()=>onListChanged(terrainList, terrainList.filter(t => t.id !== fromId))
        }

        return <div>
            <div>
                <h3>{"Only on terrain"}</h3>
                {terrainList.map(t =>
                    <div>

                    <TerrainTypeSelect
                        terrain={t}
                        terrainList={allowedTerrains}//TODO how does deletion work here??
                        onUpdateTerrainName={(newId: number) => changeTerrain(t.id, newId)}/>
                        <DeleteButton onClick={deleteTerrain(t.id)}/>
                    </div>)}
            </div>
            <Button variant="contained" color="primary" onClick={addTerrain}>
                Add new terrain
            </Button>
            <hr/>
        </div>
    }

export const OperationTerrainList: React.FC<OperationTerrainListProps> =
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

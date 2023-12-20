import {WpTerrainType} from "./WpTerrainTypes";
import TerrainSettingMenu, {WeightedTerrainSetting} from "./TerrainSettingMenu";
import React from "react";
import {Button} from "@material-ui/core";

export enum TerrainSettingsMode {
    APPLY = "Apply",
    ONLY_ON_TERRAIN = "Filter"
}

export type OperationTerrainListProps = {
    mode: TerrainSettingsMode,
    terrains: WeightedTerrainSetting[] | undefined,
    onTerrainChanged: (oldSetting: WeightedTerrainSetting | null, newSetting: WeightedTerrainSetting | null) => void
}

export const updateTerrainList = (oldSetting: WeightedTerrainSetting| null, newSetting: WeightedTerrainSetting | null, terrains: WeightedTerrainSetting[]): WeightedTerrainSetting[] => {
    const isDeletion = newSetting === null
    if (terrains === null) {
        return newSetting === null ? [] : [ newSetting]
    }

    const otherTerrains = terrains.filter(
        t => t.terrain.id !== oldSetting?.terrain.id && t.terrain.id !== newSetting?.terrain.id
    )

    const out = isDeletion ? otherTerrains : [...otherTerrains, newSetting]
    //sort by display name aphabetically
    return out.sort((a: WeightedTerrainSetting, b: WeightedTerrainSetting): number => {
        const weight = a.weight - b.weight
        if (weight !== 0)
            return weight
        else
            return a.terrain.shortName.localeCompare(b.terrain.shortName)
    })
}

const NoneTerrain: WpTerrainType = { id: -1, name: "None", shortName: "None"}

export const OperationTerrainList: React.FC<OperationTerrainListProps> = ({mode, terrains, onTerrainChanged}) => {
    const allTerrains = terrains == null ? [] : terrains.map(t =>
        <TerrainSettingMenu terrainSetting={t} onUpdateSetting={onTerrainChanged} />
    )
    const addTerrain = () => {
        onTerrainChanged(null, {terrain: NoneTerrain, weight: 1})
    }
    const title = mode === TerrainSettingsMode.APPLY ? "Apply Terrain" : "Only on Terrain"
    return <div>
        <div>
            <h3>{title}</h3>
            {allTerrains}
        </div>
        <Button variant="contained" color="primary" onClick={addTerrain}>
            Add new terrain
        </Button>
        <hr/>
    </div>
}
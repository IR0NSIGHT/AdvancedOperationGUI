import {WpLayerSetting} from "../Layer/WpLayerSetting";
import {DisplayOperation} from "./DisplayOperation";
import {configEntryToArray} from "../RawConfig";
import {terrainIdsToTerrains} from "../Terrain/WpTerrainTypes";

export type ConfigOperation = {
    name: string;
    terrain: number[] | number | undefined;
    onlyOnTerrain: number[] | number | undefined;
    layer: WpLayerSetting[] | WpLayerSetting | undefined;
    onlyOnLayer: WpLayerSetting[] | WpLayerSetting | undefined;
    aboveLevel: number | undefined;
    belowLevel: number | undefined;
    belowDegrees: number | undefined;
    aboveDegrees: number | undefined;

    perlin:
        | {
        seed: number;
        scale: number;
        amplitude: number;
        threshold: number;
    }
        | undefined;
    slopeDir: slopeDir | slopeDir[] | undefined,
    "facing": compassDir | compassDir[] | undefined,
};
export type compassDir = "N"|"W"|"S"|"E"
export type slopeDir = { "dir": number, "maxOffset": number };

export const emptyConfigOperation: ConfigOperation = {
    aboveDegrees: undefined,
    aboveLevel: undefined,
    belowDegrees: undefined,
    belowLevel: undefined,
    layer: undefined,
    name: "",
    onlyOnLayer: undefined,
    perlin: undefined,
    terrain: undefined,
    onlyOnTerrain: undefined,
    facing: undefined,
    slopeDir: undefined
};

export const configOperationToDisplay = (
    configOp: ConfigOperation,
    id: number
): DisplayOperation => {
    return {
        displayId: id,
        aboveDegrees: undefined,
        aboveLevel: undefined,
        belowDegrees: undefined,
        belowLevel: undefined,
        layer: configEntryToArray<WpLayerSetting>(configOp.layer),
        name: configOp.name,
        onlyOnLayer: configEntryToArray<WpLayerSetting>(configOp.onlyOnLayer),
        perlin: undefined,
        terrain: terrainIdsToTerrains(
            configEntryToArray<number>(configOp.terrain)
        ).map((t) => ({
            weight: 1,
            terrain: t,
        })),
        onlyOnTerrain: terrainIdsToTerrains(configEntryToArray<number>(configOp.onlyOnTerrain)),
        slopeDir: configEntryToArray(configOp.slopeDir),
        facing: configEntryToArray(configOp.facing)
    };
};

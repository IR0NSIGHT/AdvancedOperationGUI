import {WeightedTerrainSetting} from "../Terrain/TerrainSettingMenu";
import {WpLayerSetting} from "../Layer/WpLayerSetting";

export type DisplayOperation = {
    displayId: number,
    name: string,
    terrain: WeightedTerrainSetting[]
    layer: WpLayerSetting[],
    onlyOnLayer: WpLayerSetting[]
    aboveLevel: number | undefined,
    belowLevel: number | undefined,
    belowDegrees: number | undefined,
    aboveDegrees: number | undefined,

    perlin: {
        "seed": number,
        "scale": number,
        "amplitude": number,
        "threshold": number,
    } | undefined
}
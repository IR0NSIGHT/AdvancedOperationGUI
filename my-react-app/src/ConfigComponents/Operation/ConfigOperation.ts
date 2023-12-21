import {WpLayerSetting} from "../Layer/WpLayerSetting";

export type ConfigOperation = {
    name: string,
    terrain: number[] | number | undefined
    layer: WpLayerSetting[] | WpLayerSetting | undefined,
    onlyOnLayer: WpLayerSetting[] | WpLayerSetting | undefined
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

export const emptyConfigOperation: ConfigOperation = {
    aboveDegrees: undefined,
    aboveLevel: undefined,
    belowDegrees: undefined,
    belowLevel: undefined,
    layer: undefined,
    name: "",
    onlyOnLayer: undefined,
    perlin: undefined,
    terrain: undefined
}
import {WpLayerSetting} from "ConfigComponents/Operation/WpLayerSetting";

export type GlobalWpOperation = {
    name: string,
    layer: WpLayerSetting[],
    onlyOnLayer: WpLayerSetting[]
    perlin: {
        "seed": number,
        "scale": number,
        "amplitude": number,
        "threshold": number,
    }
}

export const changeWriteLayer = (op: GlobalWpOperation, writeLayer: WpLayerSetting): GlobalWpOperation => {
    const changedLayers = op.layer.map(oldSetting =>
        oldSetting[0] == writeLayer[0] ? writeLayer : oldSetting)

    return {
        ...op,
        layer: changedLayers
    }
}
import {WpLayerSetting} from "./WpLayerSetting";

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

//FIXME use layer name, not setting to identify old Layer
export const changeWriteLayer = (op: GlobalWpOperation, oldLayer: WpLayerSetting | null, writeLayer: WpLayerSetting): GlobalWpOperation => {
    const changedLayers = oldLayer ?
        op.layer.map(oldSetting =>
            oldSetting[0] == writeLayer[0] ? writeLayer : oldSetting)
        : [...op.layer, writeLayer]

    const newOp =
        {
            ...op,
            layer: changedLayers
        }
    return newOp
}
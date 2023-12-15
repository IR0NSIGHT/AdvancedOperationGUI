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
//fixme do layers have to be unique in operation?
export const changeWriteLayer = (op: GlobalWpOperation, oldLayer: WpLayerSetting | null, newLayer: WpLayerSetting | null): GlobalWpOperation => {
    const isDeletion = newLayer == null

    const otherLayers = op.layer.filter(s => oldLayer == null || s[0] != oldLayer![0]);

    if (isDeletion) { //remove oldLayer from list
        return {...op, layer: otherLayers }
    }

    return {...op, layer: [...otherLayers, newLayer]}
}
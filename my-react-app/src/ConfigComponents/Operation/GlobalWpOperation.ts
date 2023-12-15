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
export const changeWriteLayer = (op: GlobalWpOperation, oldLayer: WpLayerSetting | null, newLayer: WpLayerSetting | null): GlobalWpOperation => {
    const isInsertion = oldLayer == null
    const isDeletion = newLayer == null


    if (isDeletion) { //remove oldLayer from list
        const newLayers = op.layer.filter(s => s[0] != oldLayer![0])
        return {...op, layer: newLayers }
    }

    if (isInsertion) {
        return {...op, layer: [...op.layer, newLayer]}
    }

    //is overwrite existing op
    return {
        ...op,
        layer: op.layer.map(someSetting =>
            someSetting[0] == newLayer[0] ? newLayer : someSetting)
    }
}
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
/**
 * will change an operation.
 * will insert new LayerSetting if oldlayer == null. will remove layerSetting if newLayer == null
 * will overwrite all layersettings that match old or new layer with the new layer
 * will never produce two layersettings with the same name in the operation
 * layers are sorted alphabetically
 * @param op
 * @param oldLayer
 * @param newLayer
 */
export const changeWriteLayer = (op: GlobalWpOperation, oldLayer: WpLayerSetting | null, newLayer: WpLayerSetting | null): GlobalWpOperation => {
    const isDeletion = newLayer == null

    const otherLayers = op.layer.filter(s => (oldLayer == null || s[0] != oldLayer![0]) && (newLayer == null || s[0] != newLayer![0]));

    if (isDeletion) { //remove oldLayer from list
        return {...op, layer: sortLayersAlphabetic(otherLayers) }
    }

    return {...op, layer: sortLayersAlphabetic([...otherLayers, newLayer])}
}

const sortLayersAlphabetic = (layers: WpLayerSetting[]) => {
    return layers.sort((a, b) => {
        return a[0].localeCompare(b[0]);
    })
}
import {WpLayerSetting} from "./WpLayerSetting";
import assert from "assert";
import {NoneLayer} from "../Layer/LayerSelector";

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

/**
 * will apply a change in a layerSetting to the list of layerSettings
 * will insert new LayerSetting if oldlayer == null. will remove layerSetting if newLayer == null
 * will overwrite all layersettings that match old or new layer with the new layer
 * will never produce two layersettings with the same name in the operation
 * layers are sorted alphabetically
 * @param layers
 * @param oldLayer
 * @param newLayer
 * @returns new layerSetting[] in alphabetic order
 */
export const applyLayerChange = (layers: WpLayerSetting[], oldLayer: WpLayerSetting | null, newLayer: WpLayerSetting | null): WpLayerSetting[] => {
    const isDeletion = newLayer == null || newLayer![0] == NoneLayer

    const otherLayers = layers.filter(s => (oldLayer == null || s[0] != oldLayer![0]) && (newLayer == null || s[0] != newLayer![0]));

    const output = isDeletion ? //remove oldLayer from list
         sortLayersAlphabetic(otherLayers) :
        sortLayersAlphabetic([...otherLayers, newLayer])

    assert(output.filter(a => a == undefined).length == 0, "Postcondition: illegal values in layersetting list")
    return output
}

const sortLayersAlphabetic = (layers: WpLayerSetting[]) => {
    return layers.sort((a, b) => {
        return a[0].localeCompare(b[0]);
    })
}
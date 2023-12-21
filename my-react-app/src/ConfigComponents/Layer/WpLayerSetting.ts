import assert from "assert";

export type WpLayerSetting = [string, number];

export type DefaultLayersType = "Frost" | "Annotations" | "Deciduous" | "Pines";

export const DefaultLayers: DefaultLayersType[] = [
  "Frost",
  "Annotations",
  "Deciduous",
  "Pines",
];
/**
 * will apply a change in a layerSetting to the list of layerSettings
 * will insert new LayerSetting if oldlayer === null. will remove layerSetting if newLayer === null
 * will overwrite all layersettings that match old or new layer with the new layer
 * will never produce two layersettings with the same name in the operation
 * layers are sorted alphabetically
 * @param layers
 * @param oldLayer
 * @param newLayer
 * @returns new layerSetting[] in alphabetic order
 */
export const applyLayerChange = (
  layers: WpLayerSetting[] | undefined,
  oldLayer: WpLayerSetting | null,
  newLayer: WpLayerSetting | null
): WpLayerSetting[] => {
  const isDeletion = newLayer === null;
  if (layers === undefined) {
    return newLayer === null ? [] : [newLayer];
  }

  const otherLayers = layers.filter(
    (s) =>
      (oldLayer === null || s[0] !== oldLayer![0]) &&
      (newLayer === null || s[0] !== newLayer![0])
  );

  const output = isDeletion //remove oldLayer from list
    ? sortLayersAlphabetic(otherLayers)
    : sortLayersAlphabetic([...otherLayers, newLayer]);

  assert(
    output.filter((a) => a === undefined).length === 0,
    "Postcondition: illegal values in layersetting list"
  );
  return output;
};
const sortLayersAlphabetic = (layers: WpLayerSetting[]) => {
  return layers.sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });
};

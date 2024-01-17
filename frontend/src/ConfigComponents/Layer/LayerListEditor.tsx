import { NoneLayer, WpLayerSetting } from "./WpLayerSetting";
import React from "react";
import LayerSettingMenu from "./LayerSettingMenu";
import { AddButton } from "../Terrain/AddButton";

export enum LayerSettingsMode {
  APPLY = "Apply",
  ONLY_ON_LAYER = "Filter",
}

type OperationLayerSettingsProps = {
  mode: LayerSettingsMode;
  layers: WpLayerSetting[] | undefined;
  updateLayer: (
    oldSetting: WpLayerSetting | null,
    newSetting: WpLayerSetting | null
  ) => void;
};
export const LayerListEditor: React.FC<OperationLayerSettingsProps> = ({
  mode,
  layers,
  updateLayer,
}) => {
  const layersettings =
    layers !== undefined
      ? layers.map((setting) => (
          <LayerSettingMenu
            layerSetting={setting}
            onUpdateSetting={updateLayer}
          />
        ))
      : [];
  const addLayer = () => {
    updateLayer(null, [NoneLayer, 0]);
  };
  return (
    <div>
      {layersettings}
      <AddButton title={"Add layer"} addAction={addLayer} />
    </div>
  );
};

import { WpLayerSetting } from "./WpLayerSetting";
import React from "react";
import LayerSettingMenu from "./LayerSettingMenu";
import { NoneLayer } from "./LayerSelector";
import { Button } from "@material-ui/core";

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
  const title =
    mode === LayerSettingsMode.APPLY ? "Apply Layer" : "Only on layer";
  return (
    <div>
      {layersettings}
      <Button variant="contained" color="primary" onClick={addLayer}>
        Add new layer
      </Button>
    </div>
  );
};

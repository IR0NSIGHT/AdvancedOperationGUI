import React from 'react';
import LayerSelector from "./LayerSelector";
import {DefaultLayers, WpLayerSetting} from "../Operation/WpLayerSetting";
import {DefaultLayerValues, findNamesLayer, NamedValueSelector} from "./NamedValueSelector";

export type LayerSettingMenuProps = {
    layerSetting: WpLayerSetting
    onUpdateSetting: (oldSetting: WpLayerSetting, newSetting: WpLayerSetting) => void
}

const LayerSettingMenu: React.FC<LayerSettingMenuProps> = ({layerSetting, onUpdateSetting}: LayerSettingMenuProps) => {
    const onNameChange = (name: string) => {
        onUpdateSetting(layerSetting, [name, layerSetting[1]])
    }
    const onValueChange = (value: string) => {
        console.log("on value change: newValue", value)
        onUpdateSetting(layerSetting, [layerSetting[0], parseInt(value)])
    }
    return (
        <div>
            <LayerSelector layerName={layerSetting[0]} layerList={DefaultLayers} onUpdateLayerName={onNameChange}/>
            <NamedValueSelector layerValue={{ name: layerSetting[0], value: layerSetting[1]}} allowedValues={DefaultLayerValues} onUpdateValue={onValueChange}/>
        </div>
    );
};

export default LayerSettingMenu;

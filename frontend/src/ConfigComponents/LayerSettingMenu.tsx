import React from 'react';
import LayerSelector from "ConfigComponents/LayerSelector";
import {DefaultLayers, WpLayerSetting} from "ConfigComponents/Operation/WpLayerSetting";

export type LayerSettingMenuProps = {
    layerSetting: WpLayerSetting
    onUpdateSetting: (newSetting: WpLayerSetting) => void
}
const LayerSettingMenu: React.FC<LayerSettingMenuProps> = ({layerSetting, onUpdateSetting}: LayerSettingMenuProps) => {
    const onNameChange = (name: string) => {
        onUpdateSetting([name, layerSetting[1]])
    }
    return (
        <div>
            <LayerSelector layerName={layerSetting[0]} layerList={DefaultLayers} onUpdateLayerName={onNameChange} />
        </div>
    );
};

export default LayerSettingMenu;

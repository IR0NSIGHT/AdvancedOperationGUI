import React from 'react';
import LayerSelector from "./LayerSelector";
import {DefaultLayers, WpLayerSetting} from "./Operation/WpLayerSetting";

export type LayerSettingMenuProps = {
    layerSetting: WpLayerSetting
    onUpdateSetting: (oldSetting: WpLayerSetting, newSetting: WpLayerSetting) => void
}
const LayerSettingMenu: React.FC<LayerSettingMenuProps> = ({layerSetting, onUpdateSetting}: LayerSettingMenuProps) => {
    const onNameChange = (name: string) => {
        onUpdateSetting(layerSetting, [name, layerSetting[1]])
    }
    return (
        <div>
            <LayerSelector layerName={layerSetting[0]} layerList={DefaultLayers} onUpdateLayerName={onNameChange}/>
        </div>
    );
};

export default LayerSettingMenu;

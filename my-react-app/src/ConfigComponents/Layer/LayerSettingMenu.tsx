import React from 'react';
import LayerSelector from "./LayerSelector";
import {DefaultLayers, WpLayerSetting} from "../Operation/WpLayerSetting";
import {makeStyles} from '@material-ui/core/styles';

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
            {layerSetting[1]}
        </div>
    );
};

export default LayerSettingMenu;

import {WpLayerSetting} from "../Operation/WpLayerSetting";

export type TerrainSettingMenuProps = {
    layerSetting: WpLayerSetting
    onUpdateSetting: (oldSetting: WpLayerSetting, newSetting: WpLayerSetting) => void
}

const TerrainSettingMenu: React.FC<TerrainSettingMenuProps> = ({layerSetting, onUpdateSetting}: TerrainSettingMenuProps) => {
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
    <LayerValueSelector layerValue={{ name: layerSetting[0], value: layerSetting[1]}} allowedValues={DefaultLayerValues} onUpdateValue={onValueChange}/>
    </div>
);
};

export default LayerSettingMenu;

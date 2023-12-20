import React, {useState} from 'react';
import {applyLayerChange, GlobalWpOperation} from "./GlobalWpOperation";
import {WpLayerSetting} from "./WpLayerSetting";
import LayerSettingMenu from "../Layer/LayerSettingMenu";
import {Button} from "@material-ui/core";
import {NoneLayer} from "../Layer/LayerSelector";
import {CollapsibleComponent} from "./CollapsibleComponent";

export type OperationWrapperProps = {
    initalOperation: GlobalWpOperation
}


const OperationWrapper = (props: OperationWrapperProps) => {
    const [advancedConfig, setAdvancedConfig] = useState(props.initalOperation);

    const updateLayer = (oldSetting: WpLayerSetting | null, newSetting: WpLayerSetting | null) => {
        const newOp = {...advancedConfig, layer: applyLayerChange(advancedConfig.layer, oldSetting, newSetting)}
        setAdvancedConfig(newOp)
    }

    const addLayer = () => {
        updateLayer(null, [NoneLayer, 0])
    }
    const writeLayers = advancedConfig.layer.map(setting =>
        <LayerSettingMenu layerSetting={setting} onUpdateSetting={updateLayer}/>
    )

    const operationComponent =
        <div>
            <div>
                <h3>Apply Layers</h3>
                {writeLayers}
            </div>
            <Button variant="contained" color="primary" onClick={addLayer}>
                Add new layer
            </Button>
            <hr/>

        </div>
    return (
        <div>
            <CollapsibleComponent title={advancedConfig.name} content={operationComponent}/>
            <pre>{JSON.stringify(advancedConfig, null, 3)}</pre>
        </div>
    );
};

export default OperationWrapper;

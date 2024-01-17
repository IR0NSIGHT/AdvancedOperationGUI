import React, {useState} from 'react';
import {applyLayerChange, GlobalWpOperation} from "./GlobalWpOperation";
import {WpLayerSetting} from "./WpLayerSetting";
import LayerSettingMenu from "../Layer/LayerSettingMenu";
import {Button} from "@material-ui/core";
import {NoneLayer} from "../Layer/LayerSelector";

export type OperationWrapperProps = {
    initalOperation: GlobalWpOperation
}

const OperationWrapper = (props: OperationWrapperProps) => {
    const [operation, setOperation] = useState(props.initalOperation);

    const updateLayer = (oldSetting: WpLayerSetting | null, newSetting: WpLayerSetting | null) => {
        const newOp = {...operation, layer: applyLayerChange(operation.layer, oldSetting, newSetting)}
        setOperation(newOp)
    }

    const addLayer = () => {
        updateLayer(null, [NoneLayer, 0])
    }
    const writeLayers = operation.layer.map(setting =>
        <LayerSettingMenu layerSetting={setting} onUpdateSetting={updateLayer}/>
    )
    return (
        <div>
            <div
                style={{
                    backgroundColor: operation ? 'black' : 'white',
                    color: operation ? 'white' : 'black',
                    padding: '20px',
                    cursor: 'pointer',
                }}
            >
                Global Operation {operation.name}
            </div>
            {writeLayers}
            <Button variant="contained" color="primary" onClick={addLayer}>
                Add new layer
            </Button>
            <pre>{JSON.stringify(operation, null, 3)}</pre>
        </div>
    );
};

export default OperationWrapper;

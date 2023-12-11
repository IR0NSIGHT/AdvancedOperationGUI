import React, {useState} from 'react';
import {changeWriteLayer, GlobalWpOperation} from "./GlobalWpOperation";
import {WpLayerSetting} from "./WpLayerSetting";
import LayerSettingMenu from "../Layer/LayerSettingMenu";

export type OperationWrapperProps = {
    initalOperation: GlobalWpOperation
}

const OperationWrapper = (props: OperationWrapperProps) => {
    const [operation, setOperation] = useState(props.initalOperation);

    const updateLayer = (oldSetting: WpLayerSetting, newSetting: WpLayerSetting) => {
        const newOp = changeWriteLayer(operation, oldSetting, newSetting)
        setOperation(newOp)
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

            <pre>{JSON.stringify(operation,null,3)}</pre>
        </div>
    );
};

export default OperationWrapper;

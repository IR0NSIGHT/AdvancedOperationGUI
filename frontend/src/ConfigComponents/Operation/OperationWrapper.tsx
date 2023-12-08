import React, {useState} from 'react';
import {changeWriteLayer, GlobalWpOperation} from "ConfigComponents/Operation/GlobalWpOperation";
import {WpLayerSetting} from "ConfigComponents/Operation/WpLayerSetting";
import LayerSettingMenu from "ConfigComponents/LayerSettingMenu";

export type OperationWrapperProps = {
    initalOperation: GlobalWpOperation
}

const OperationWrapper = (props: OperationWrapperProps) => {
    const [operation, setOperation] = useState(props.initalOperation);

    const updateLayer = (layerSetting: WpLayerSetting) => {
        const newOp = changeWriteLayer(operation, layerSetting)
        console.log(layerSetting, "=======>", newOp.layer )
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

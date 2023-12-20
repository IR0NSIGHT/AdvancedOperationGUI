import React, {useState} from 'react';
import {applyLayerChange, GlobalWpOperation} from "./GlobalWpOperation";
import {WpLayerSetting} from "./WpLayerSetting";
import {CollapsibleComponent} from "./CollapsibleComponent";
import {LayerSettingsMode, OperationLayerSettings} from "./OperationLayerSettings";

export type OperationWrapperProps = {
    initalOperation: GlobalWpOperation
}


const OperationWrapper: React.FC<OperationWrapperProps>  = ({ initalOperation }) => {
    const [globalWpOperation, setGlobalWpOperation] = useState(initalOperation);

    const updateApplyLayer = (oldSetting: WpLayerSetting | null, newSetting: WpLayerSetting | null) => {
        const newOp = {...globalWpOperation, layer: applyLayerChange(globalWpOperation.layer, oldSetting, newSetting)}
        setGlobalWpOperation(newOp)
    }

    const updateOnlyOnLayer = (oldSetting: WpLayerSetting | null, newSetting: WpLayerSetting | null) => {
        const newOp = {
            ...globalWpOperation,
            onlyOnLayer: applyLayerChange(globalWpOperation.onlyOnLayer, oldSetting, newSetting)
        }
        setGlobalWpOperation(newOp)
    }

    return (
        <CollapsibleComponent
            title={globalWpOperation.name}
            content={<div>
                <OperationLayerSettings mode={LayerSettingsMode.APPLY}
                                        layers={globalWpOperation.layer}
                                        updateLayer={updateApplyLayer}/>
                <OperationLayerSettings mode={LayerSettingsMode.ONLY_ON_LAYER}
                                        layers={globalWpOperation.onlyOnLayer}
                                        updateLayer={updateOnlyOnLayer}/>
                <pre>{JSON.stringify(globalWpOperation, null, 3)}</pre>
            </div>}
        />
    );
};

export default OperationWrapper;

import React, {useState} from 'react';
import {applyLayerChange, DisplayOperation, GlobalWpOperation} from "./GlobalWpOperation";
import {WpLayerSetting} from "../Layer/WpLayerSetting";
import {CollapsibleComponent} from "./CollapsibleComponent";
import {LayerSettingsMode, OperationLayerSettings} from "../Layer/OperationLayerSettings";
import {OperationTerrainList, TerrainSettingsMode, updateTerrainList} from "../Terrain/OperationTerrainList";
import {WeightedTerrainSetting} from "../Terrain/TerrainSettingMenu";

export type OperationWrapperProps = {
    initalOperation: DisplayOperation
}

const OperationWrapper: React.FC<OperationWrapperProps> = ({initalOperation}) => {
    const [globalOperation, setGlobalOperation] = useState(initalOperation);

    const weightedApplyTerrain = initalOperation.terrain
    const handleTerrainChanged = (oldSetting: WeightedTerrainSetting | null, newSetting: WeightedTerrainSetting | null) => {
        setGlobalOperation({
            ...globalOperation, terrain: updateTerrainList(oldSetting, newSetting, globalOperation.terrain)
    })
    }

    const updateApplyLayer = (oldSetting: WpLayerSetting | null, newSetting: WpLayerSetting | null) => {
        const newOp = {...globalOperation, layer: applyLayerChange(globalOperation.layer, oldSetting, newSetting)}
        setGlobalOperation(newOp)
    }

    const updateOnlyOnLayer = (oldSetting: WpLayerSetting | null, newSetting: WpLayerSetting | null) => {
        const newOp = {
            ...globalOperation,
            onlyOnLayer: applyLayerChange(globalOperation.onlyOnLayer, oldSetting, newSetting)
        }
        setGlobalOperation(newOp)
    }

    return (
        <CollapsibleComponent
            title={globalOperation.name}
            content={<div>
                <OperationLayerSettings mode={LayerSettingsMode.APPLY}
                                        layers={globalOperation.layer}
                                        updateLayer={updateApplyLayer}/>

                <OperationTerrainList mode={TerrainSettingsMode.APPLY}
                                      terrains={globalOperation.terrain}
                                      onTerrainChanged={handleTerrainChanged}/>

                <OperationLayerSettings mode={LayerSettingsMode.ONLY_ON_LAYER}
                                        layers={globalOperation.onlyOnLayer}
                                        updateLayer={updateOnlyOnLayer}/>
                <pre>{JSON.stringify(globalOperation, null, 3)}</pre>
            </div>}
        />
    );
};

export default OperationWrapper;

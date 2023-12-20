import React, {useState} from 'react';
import {applyLayerChange, DisplayOperation} from "./GlobalWpOperation";
import {WpLayerSetting} from "../Layer/WpLayerSetting";
import {CollapsibleComponent} from "./CollapsibleComponent";
import {LayerSettingsMode, OperationLayerSettings} from "../Layer/OperationLayerSettings";
import {OperationTerrainList, TerrainSettingsMode, updateTerrainList} from "../Terrain/OperationTerrainList";
import {WeightedTerrainSetting} from "../Terrain/TerrainSettingMenu";
import {translateDisplayOperation} from "../AdvancedConfigEditor";

export type OperationWrapperProps = {
    initalOperation: DisplayOperation
}

const OperationWrapper: React.FC<OperationWrapperProps> = ({initalOperation}) => {
    const [globalOperation, setGlobalOperation] = useState(initalOperation);

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

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGlobalOperation({ ...globalOperation, name: event.target.value });
    };

    return(
        <CollapsibleComponent
            title={globalOperation.name}
            content={<div>
                <div>
                    <label htmlFor="nameInput">Operation Name:</label>
                    <input
                        type="text"
                        id="nameInput"
                        value={globalOperation.name}
                        onChange={handleNameChange}
                    />
                </div>
                <OperationLayerSettings mode={LayerSettingsMode.APPLY}
                                        layers={globalOperation.layer}
                                        updateLayer={updateApplyLayer}/>

                <OperationTerrainList mode={TerrainSettingsMode.APPLY}
                                      terrains={globalOperation.terrain}
                                      onTerrainChanged={handleTerrainChanged}/>

                <OperationLayerSettings mode={LayerSettingsMode.ONLY_ON_LAYER}
                                        layers={globalOperation.onlyOnLayer}
                                        updateLayer={updateOnlyOnLayer}/>
                <pre>{JSON.stringify(translateDisplayOperation(globalOperation), null, 3)}</pre>
            </div>}
        />
    );
};

export default OperationWrapper;

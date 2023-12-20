import React, {useState} from 'react';
import {applyLayerChange, DisplayOperation} from "./GlobalWpOperation";
import {WpLayerSetting} from "../Layer/WpLayerSetting";
import {CollapsibleComponent} from "./CollapsibleComponent";
import {LayerSettingsMode, OperationLayerSettings} from "../Layer/OperationLayerSettings";
import {OperationTerrainList, TerrainSettingsMode, updateTerrainList} from "../Terrain/OperationTerrainList";
import {WeightedTerrainSetting} from "../Terrain/TerrainSettingMenu";
import {translateDisplayOperation} from "../AdvancedConfigEditor";

export type OperationEditorProps = {
    initalOperation: DisplayOperation
}

export const OperationEditor: React.FC<OperationEditorProps> = ({initalOperation}) => {
    const [displayedOperation, setDisplayedOperation] = useState(initalOperation);

    const handleTerrainChanged = (oldSetting: WeightedTerrainSetting | null, newSetting: WeightedTerrainSetting | null) => {
        setDisplayedOperation({
            ...displayedOperation, terrain: updateTerrainList(oldSetting, newSetting, displayedOperation.terrain)
    })
    }

    const updateApplyLayer = (oldSetting: WpLayerSetting | null, newSetting: WpLayerSetting | null) => {
        const newOp = {...displayedOperation, layer: applyLayerChange(displayedOperation.layer, oldSetting, newSetting)}
        setDisplayedOperation(newOp)
    }

    const updateOnlyOnLayer = (oldSetting: WpLayerSetting | null, newSetting: WpLayerSetting | null) => {
        const newOp = {
            ...displayedOperation,
            onlyOnLayer: applyLayerChange(displayedOperation.onlyOnLayer, oldSetting, newSetting)
        }
        setDisplayedOperation(newOp)
    }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDisplayedOperation({ ...displayedOperation, name: event.target.value });
    };

    return(
        <CollapsibleComponent
            title={displayedOperation.name}
            content={<div>
                <div>
                    <label htmlFor="nameInput">Operation Name:</label>
                    <input
                        type="text"
                        id="nameInput"
                        value={displayedOperation.name}
                        onChange={handleNameChange}
                    />
                </div>
                <OperationLayerSettings mode={LayerSettingsMode.APPLY}
                                        layers={displayedOperation.layer}
                                        updateLayer={updateApplyLayer}/>

                <OperationTerrainList mode={TerrainSettingsMode.APPLY}
                                      terrains={displayedOperation.terrain}
                                      onTerrainChanged={handleTerrainChanged}/>

                <OperationLayerSettings mode={LayerSettingsMode.ONLY_ON_LAYER}
                                        layers={displayedOperation.onlyOnLayer}
                                        updateLayer={updateOnlyOnLayer}/>
                <pre>{JSON.stringify(translateDisplayOperation(displayedOperation), null, 3)}</pre>
            </div>}
        />
    );
};


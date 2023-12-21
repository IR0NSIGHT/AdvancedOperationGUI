import React from 'react';
import {applyLayerChange, WpLayerSetting} from "../Layer/WpLayerSetting";
import {CollapsibleComponent} from "./CollapsibleComponent";
import {LayerSettingsMode, LayerListEditor} from "../Layer/LayerListEditor";
import {OperationTerrainList, TerrainSettingsMode, updateTerrainList} from "../Terrain/OperationTerrainList";
import {WeightedTerrainSetting} from "../Terrain/TerrainSettingMenu";
import {DisplayOperation, translateDisplayOperation} from "./DisplayOperation";

export type OperationEditorProps = {
    initialOperation: DisplayOperation,
    updateOperation: (op: DisplayOperation) => void,
    deleteOperation: (op: DisplayOperation) => void
}

export const OperationEditor: React.FC<OperationEditorProps> = ({initialOperation, updateOperation}) => {
    const handleTerrainChanged = (oldSetting: WeightedTerrainSetting | null, newSetting: WeightedTerrainSetting | null) => {
        updateOperation({
            ...initialOperation, terrain: updateTerrainList(oldSetting, newSetting, initialOperation.terrain)
    })
    }

    const updateApplyLayer = (oldSetting: WpLayerSetting | null, newSetting: WpLayerSetting | null) => {
        const newOp = {...initialOperation, layer: applyLayerChange(initialOperation.layer, oldSetting, newSetting)}
        updateOperation(newOp)
    }

    const updateOnlyOnLayer = (oldSetting: WpLayerSetting | null, newSetting: WpLayerSetting | null) => {
        const newOp = {
            ...initialOperation,
            onlyOnLayer: applyLayerChange(initialOperation.onlyOnLayer, oldSetting, newSetting)
        }
        updateOperation(newOp)
    }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateOperation({ ...initialOperation, name: event.target.value });
    };

    return(
        <CollapsibleComponent
            title={initialOperation.name}
            content={<div>
                <div>
                    <label htmlFor="nameInput">Operation Name:</label>
                    <input
                        type="text"
                        id="nameInput"
                        value={initialOperation.name}
                        onChange={handleNameChange}
                    />
                </div>
                <LayerListEditor mode={LayerSettingsMode.APPLY}
                                 layers={initialOperation.layer}
                                 updateLayer={updateApplyLayer}/>

                <OperationTerrainList mode={TerrainSettingsMode.APPLY}
                                      terrains={initialOperation.terrain}
                                      onTerrainChanged={handleTerrainChanged}/>

                <LayerListEditor mode={LayerSettingsMode.ONLY_ON_LAYER}
                                 layers={initialOperation.onlyOnLayer}
                                 updateLayer={updateOnlyOnLayer}/>
                <pre>{JSON.stringify(translateDisplayOperation(initialOperation), null, 3)}</pre>
            </div>}
        />
    );
};


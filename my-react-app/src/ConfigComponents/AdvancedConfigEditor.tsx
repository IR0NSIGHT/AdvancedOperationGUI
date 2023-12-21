import {emptyOperation, GlobalWpOperation} from "./Operation/GlobalWpOperation";
import React, {useState} from "react";
import {getTerrainById, WpTerrainType, wpTerrainTypes} from "./Terrain/WpTerrainTypes";
import {WpLayerSetting} from "./Layer/WpLayerSetting";
import {OperationEditor} from "./Operation/OperationEditor";
import {Button} from "@material-ui/core";
import assert from "assert";
import {DisplayOperation} from "./Operation/DisplayOperation";

export type AdvancedConfigEditorProps = {
    initialConfig: AdvancedConfig
}

export type AdvancedConfig = {
    operations: GlobalWpOperation[],
    author: string,
    date: string
}

function denullifyConfigArray<T>(configT: T | T[] | undefined): T[] {
    if (configT === undefined)
        return []
    if (typeof configT === 'number')
        return [configT]
    else if (Array.isArray(configT))
        return configT
    else
        throw Error("can not translate config array!" + configT)
}

const terrainIdsToTerrains = (xs: number[]): WpTerrainType[] => {
    return xs
        .map(x => getTerrainById(x, wpTerrainTypes))
        .filter(x => x !== undefined) as WpTerrainType[]
}

export const translateDisplayOperation = (x: DisplayOperation): GlobalWpOperation => {
    const configTerrain: number[] = [];
    x.terrain.forEach(t => {
        for (let i = 0; i < t.weight; i++) {
            configTerrain.push(t.terrain.id)
        }
    })
    return {
        name: x.name,
        aboveLevel: x.aboveLevel,
        belowLevel: x.belowLevel,
        aboveDegrees: x.aboveDegrees,
        belowDegrees: x.belowDegrees,
        perlin: x.perlin,
        onlyOnLayer: x.layer,
        layer: x.layer,
        terrain: configTerrain
    }
}


const advancedOperationToDisplay = (configOp: GlobalWpOperation, id: number): DisplayOperation => {
    return {
        displayId: id,
        aboveDegrees: undefined,
        aboveLevel: undefined,
        belowDegrees: undefined,
        belowLevel: undefined,
        layer: denullifyConfigArray<WpLayerSetting>(configOp.layer),
        name: configOp.name,
        onlyOnLayer: denullifyConfigArray<WpLayerSetting>(configOp.onlyOnLayer),
        perlin: undefined,
        terrain: terrainIdsToTerrains(denullifyConfigArray<number>(configOp.terrain)).map(t => ({
            weight: 1,
            terrain: t
        }))
    }
}

export const emptyDisplayOperation: DisplayOperation = {
    name: "",
    displayId: -1,
    terrain: [],
    layer: [],
    onlyOnLayer: [],
    perlin: undefined,
    aboveDegrees: undefined,
    belowDegrees: undefined,
    belowLevel: undefined,
    aboveLevel: undefined
}

export enum ArrayMutationAction {
    INSERT,
    OVERWRITE,
    DELETE
}

/**
 * updates operations with given op. will replace op with same id, or append to list if not present
 * @param op
 * @param actionType type of action to perform
 * @param displayedOperations
 */
export const updateOperationArray = (op: DisplayOperation, actionType: ArrayMutationAction, displayedOperations: DisplayOperation[]): DisplayOperation[] => {
    switch (actionType) {
        case ArrayMutationAction.DELETE:
            return displayedOperations.filter(x => x.displayId !== op.displayId)

        case ArrayMutationAction.INSERT:
            //find max id in existing ops to generate a higher one:
            const maxId = displayedOperations.map(op => op.displayId).reduce((previousValue, currentValue) => Math.max(previousValue, currentValue))
            op.displayId = maxId + 1

            displayedOperations.push(op);
            return displayedOperations

        case ArrayMutationAction.OVERWRITE:
            const index = displayedOperations.findIndex(x => x.displayId === op.displayId);
            assert(displayedOperations[index].displayId == op.displayId, "operation ids went out of synch")
            displayedOperations[index] = op
            return displayedOperations
        default:
            throw Error("illegal enum type")
    }
}
export const AdvancedConfigEditor = (props: AdvancedConfigEditorProps) => {
    const displayOps = props.initialConfig.operations.map(advancedOperationToDisplay)
    const [displayedOperations, setDisplayedOperations] = useState<DisplayOperation[]>(displayOps);

    const addOperation = () => {
        const newOps = updateOperationArray(
            {...emptyDisplayOperation, name: "my new operation"},
            ArrayMutationAction.INSERT,
            [...displayedOperations]);
        console.log("new operations after adding:", newOps.map(op => ({name: op.name, id: op.displayId})))
        setDisplayedOperations(newOps)
    }

    const updateOperation = (op: DisplayOperation) => {
        setDisplayedOperations(updateOperationArray(op, ArrayMutationAction.OVERWRITE, [...displayedOperations]))
    }

    const deleteOperation = (op: DisplayOperation) => {
        setDisplayedOperations(updateOperationArray(op, ArrayMutationAction.DELETE, [...displayedOperations]))
    }

    return (
        <div>
            <h1>AdvancedConfig GUI</h1>
            <div>
                Editor for the AdvancedOperator script
                by IR0NSIGHT
            </div>
            {displayedOperations.map(op => (<OperationEditor initialOperation={op} updateOperation={updateOperation} deleteOperation={deleteOperation}/>))}
            <Button variant="contained" color="primary" onClick={addOperation}>
                Add new global operation
            </Button>
            <pre>{JSON.stringify(displayedOperations, null, 3)}</pre>
        </div>
    )
}
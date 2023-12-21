import {ConfigOperation} from "./Operation/ConfigOperation";
import React, {useState} from "react";
import {getTerrainById, WpTerrainType, wpTerrainTypes} from "./Terrain/WpTerrainTypes";
import {WpLayerSetting} from "./Layer/WpLayerSetting";
import {OperationEditor} from "./Operation/OperationEditor";
import {Button} from "@material-ui/core";
import {DisplayOperation, emptyDisplayOperation, updateOperationArray} from "./Operation/DisplayOperation";

export type AdvancedConfigEditorProps = {
    initialConfig: AdvancedConfig
}

export type AdvancedConfig = {
    operations: ConfigOperation[],
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


const advancedOperationToDisplay = (configOp: ConfigOperation, id: number): DisplayOperation => {
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

export enum ArrayMutationAction {
    INSERT,
    OVERWRITE,
    DELETE
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
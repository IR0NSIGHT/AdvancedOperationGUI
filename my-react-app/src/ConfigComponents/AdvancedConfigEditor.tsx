import {DisplayOperation, GlobalWpOperation} from "./Operation/GlobalWpOperation";
import {useState} from "react";
import OperationWrapper from "./Operation/OperationWrapper";
import {getTerrainById, WpTerrainType, wpTerrainTypes} from "./Terrain/WpTerrainTypes";
import {WpLayerSetting} from "./Layer/WpLayerSetting";

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
        throw Error("can not translate config array!"+configT)
}

const terrainIdsToTerrains = (xs: number[]): WpTerrainType[] => {
    return xs
        .map(x => getTerrainById(x, wpTerrainTypes))
        .filter(x => x !== undefined) as WpTerrainType[]
}


const advancedOperationToDisplay = (configOp: GlobalWpOperation): DisplayOperation => {
    return {
        aboveDegrees: undefined,
        aboveLevel: undefined,
        belowDegrees: undefined,
        belowLevel: undefined,
        layer: denullifyConfigArray<WpLayerSetting>(configOp.layer),
        name: configOp.name,
        onlyOnLayer: denullifyConfigArray<WpLayerSetting>(configOp.onlyOnLayer),
        perlin: undefined,
        terrain: terrainIdsToTerrains(denullifyConfigArray<number>(configOp.terrain)).map(t => ({weight: 1, terrain: t}))
    }
}

export const AdvancedConfigEditor = (props: AdvancedConfigEditorProps) => {
    const [displayedConfig, setDisplayedConfig] = useState(props.initialConfig);
    const operations = displayedConfig.operations
        .map(advancedOperationToDisplay)
        .map(op => (<OperationWrapper initalOperation={op}/>))

    return (
        <div>
            <h1>AdvancedConfig GUI</h1>
            <div>
                Editor for the AdvancedOperator script
                by IR0NSIGHT
            </div>
            {operations}
        </div>
    )
}
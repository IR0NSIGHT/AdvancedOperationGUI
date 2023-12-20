import {GlobalWpOperation} from "./Operation/GlobalWpOperation";
import {useState} from "react";
import OperationWrapper from "./Operation/OperationWrapper";

export type AdvancedConfigEditorProps = {
    initialConfig: AdvancedConfig
}

type AdvancedConfig = {
    operations: GlobalWpOperation[]
}


export const AdvancedConfigEditor = (props: AdvancedConfigEditorProps) => {
    const [displayedConfig, setDisplayedConfig] = useState(props.initialConfig);
    const operations = displayedConfig.operations.map(op => (<OperationWrapper initalOperation={op}/>))

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
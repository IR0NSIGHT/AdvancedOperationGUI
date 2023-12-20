import React, {useState} from 'react';
import {applyLayerChange, GlobalWpOperation} from "./GlobalWpOperation";
import {WpLayerSetting} from "./WpLayerSetting";
import LayerSettingMenu from "../Layer/LayerSettingMenu";
import {Button, Collapse, IconButton, Paper, Typography} from "@material-ui/core";
import {NoneLayer} from "../Layer/LayerSelector";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {makeStyles} from "@material-ui/core/styles";

export type OperationWrapperProps = {
    initalOperation: GlobalWpOperation
}


const useStyles = makeStyles((theme) => ({
    root: {
        width: 'auto',
        maxWidth: 1200,
        margin: 'auto',
        marginTop: theme.spacing(2),
        padding: theme.spacing(2),
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
    },
}));

const OperationWrapper = (props: OperationWrapperProps) => {
    const [advancedConfig, setAdvancedConfig] = useState(props.initalOperation);

    const updateLayer = (oldSetting: WpLayerSetting | null, newSetting: WpLayerSetting | null) => {
        const newOp = {...advancedConfig, layer: applyLayerChange(advancedConfig.layer, oldSetting, newSetting)}
        setAdvancedConfig(newOp)
    }

    const addLayer = () => {
        updateLayer(null, [NoneLayer, 0])
    }
    const writeLayers = advancedConfig.layer.map(setting =>
        <LayerSettingMenu layerSetting={setting} onUpdateSetting={updateLayer}/>
    )

    const operationComponent =
        <div>
            <div>
                <h3>Apply Layers</h3>
                {writeLayers}
            </div>
            <Button variant="contained" color="primary" onClick={addLayer}>
                Add new layer
            </Button>
            <hr/>

        </div>
    return (
        <div>
            <CollapsibleComponent title={advancedConfig.name} content={operationComponent}/>
            <pre>{JSON.stringify(advancedConfig, null, 3)}</pre>
        </div>
    );
};

type CollapsibleProps = {
    title: string;
    content: JSX.Element;
};

const CollapsibleComponent: React.FC<CollapsibleProps> = ({title, content}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Paper className={classes.root}>
            <div
                className={classes.header}
                onClick={handleExpandClick}
                role="button"
                tabIndex={0}
            >
                <Typography variant="h6">{title}</Typography>
                <IconButton>
                    {expanded ? <ExpandLess/> : <ExpandMore/>}
                </IconButton>
            </div>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography variant="body1">{content}</Typography>
            </Collapse>
        </Paper>
    );
};

export default OperationWrapper;

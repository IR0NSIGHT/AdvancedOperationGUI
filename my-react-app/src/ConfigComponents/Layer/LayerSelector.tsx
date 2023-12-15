import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

export type LayerSelectorProps = {
    layerName: string,
    layerList: string[],
    onUpdateLayerName: (newName: string) => void
}

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export const LayerSelector: React.FC<LayerSelectorProps> = ({
                                                                layerName,
                                                                layerList,
                                                                onUpdateLayerName
                                                            }: LayerSelectorProps) => {
    const handleNameChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>, child: React.ReactNode) => {
        const newName = (event.target as HTMLSelectElement).value;
        onUpdateLayerName(newName); // Call the prop function to update the name in the parent component
    };

    const layerListComps = layerList.map((name) => (
        <MenuItem value={name}>{name}</MenuItem>
    ))
    const classes = useStyles();
    return (

        <FormControl className={classes.formControl}>
            <InputLabel id="demo-select-small-label">Layer</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={layerName}
                label="Layer"
                onChange={handleNameChange}
            >
                <MenuItem value={undefined}>
                    <em>None</em>
                </MenuItem>
                {layerListComps}
            </Select>
        </FormControl>
    );
};

export default LayerSelector;

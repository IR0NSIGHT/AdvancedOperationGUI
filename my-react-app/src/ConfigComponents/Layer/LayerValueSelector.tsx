import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

export type LayerValueSelectorProps = {
    layerValue: NamedLayerValue
    allowedValues: NamedLayerValue[],
    onUpdateValue: (newValue: string) => void
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

export const PresentValue = {name: "present", value: -1}

export const AbsentValue = {name: "absent", value: 0}

export type NamedLayerValue = { name: string, value: number }

export const DefaultLayerValues: NamedLayerValue[] = [
    AbsentValue,
    PresentValue,
    {name: '1', value: 1},
    {name: '2', value: 2},
    {name: '3', value: 3},
    {name: '4', value: 4},
    {name: '5', value: 5},
    {name: '6', value: 6},
    {name: '7', value: 7},
    {name: '8', value: 8},
    {name: '9', value: 9},
    {name: '10', value: 10},
    {name: '11', value: 11},
    {name: '12', value: 12},
    {name: '13', value: 13},
    {name: '14', value: 14},
    {name: '15', value: 15}
]


export const findNamesLayer = (value: number): NamedLayerValue => {
    return DefaultLayerValues.find(a => a.value == value)!
}
export const LayerValueSelector: React.FC<LayerValueSelectorProps> = ({
                                                                          layerValue,
                                                                          allowedValues,
                                                                          onUpdateValue
                                                                      }: LayerValueSelectorProps) => {
    const onValueChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>, child: React.ReactNode) => {
        const newValue = (event.target as HTMLSelectElement).value; //numeric value as string
        onUpdateValue(newValue); // Call the prop function to update the name in the parent component
    };

    const layerListComps = allowedValues.map((namedLayer) => (
        <MenuItem value={namedLayer.value}>{namedLayer.name}</MenuItem>
    ))
    const classes = useStyles();
    return (

        <FormControl className={classes.formControl}>
            <InputLabel id="demo-select-small-label">Layer</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={layerValue.value}
                label="Layer"
                onChange={onValueChange}
            >
                {layerListComps}
            </Select>
        </FormControl>
    );
};

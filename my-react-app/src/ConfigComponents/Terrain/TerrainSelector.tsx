import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

export type TerrainSelectorProps = {
    terrain: WpTerrain,
    terrainList: WpTerrain[],
    onUpdateTerrainName: (newTerrainId: number) => void
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

type WpTerrain = { id: number, name: string }
export const NoneTerrain : WpTerrain = { id: -1, name: "None"}

export const TerrainSelector: React.FC<TerrainSelectorProps> = ({
                                                                    terrain,
                                                                    terrainList,
                                                                    onUpdateTerrainName
                                                                }: TerrainSelectorProps) => {
    const handleNameChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>, child: React.ReactNode) => {
        const newName = (event.target as HTMLSelectElement).value;
        onUpdateTerrainName(parseInt(newName)); // Call the prop function to update the name in the parent component
    };

    const classes = useStyles();
    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-select-small-label">Layer</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={terrain.id}
                label="Terrain"
                onChange={handleNameChange}
            >
                <MenuItem value={NoneTerrain.id}>
                    <em>{NoneTerrain.name}</em>
                </MenuItem>
                {terrainList.map((terrain) => (
                    <MenuItem value={terrain.id}>{terrain.name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default TerrainSelector;

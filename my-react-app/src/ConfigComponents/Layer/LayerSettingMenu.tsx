import React from 'react';
import LayerSelector from "./LayerSelector";
import {DefaultLayers, WpLayerSetting} from "../Operation/WpLayerSetting";
import { makeStyles } from '@material-ui/core/styles';

export type LayerSettingMenuProps = {
    layerSetting: WpLayerSetting
    onUpdateSetting: (oldSetting: WpLayerSetting, newSetting: WpLayerSetting) => void
}

const useStyles = makeStyles({
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr', /* Two columns with equal width */
        gridGap: '10px', /* Gap between cells */
        width: 'min-content', /* Shrink width around content */
        height: 'min-content', /* Shrink height around content */
        border: '2px solid #ccc', /* Border for visualization */
        padding: '10px',
    },
    gridItem: {
        padding: '3px',
        width: '10em', /* Shrink width around content */
        height: '1em', /* Shrink height around content */
    },
});

const LayerSettingMenu: React.FC<LayerSettingMenuProps> = ({layerSetting, onUpdateSetting}: LayerSettingMenuProps) => {
    const onNameChange = (name: string) => {
        onUpdateSetting(layerSetting, [name, layerSetting[1]])
    }
    const classes = useStyles();

    return (
        <div className={classes.gridContainer}>
            <div className={ classes.gridItem }>Layer</div>
            <div className={ classes.gridItem }>
                <LayerSelector layerName={layerSetting[0]} layerList={DefaultLayers} onUpdateLayerName={onNameChange}/>
            </div>
            <div className={ classes.gridItem }>Value</div>
            <div className={ classes.gridItem }>{layerSetting[1]}</div>
        </div>


    );
};

export default LayerSettingMenu;

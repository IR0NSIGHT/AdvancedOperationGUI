import {changeWriteLayer, GlobalWpOperation} from './GlobalWpOperation';
import {WpLayerSetting} from "ConfigComponents/Operation/WpLayerSetting"; // Replace with the correct path

describe('changeWriteLayer function', () => {

    const initialOp: GlobalWpOperation = {
        "name": "small bubble forest",
        "layer": [['Frost', 1], ['Deciduous', 4], ['Pines', 3]],
        "onlyOnLayer": [[
            "Mask - Forest",
            1
        ]],
        "perlin": {
            "seed": 12345678.0,
            "scale": 40.0,
            "amplitude": 1.0,
            "threshold": 0.5,
        }
    }

    it('add new layer', () => {
        const writeLayer: WpLayerSetting = ['Deciduous', 4]; // New layer to replace 'Deciduous' in the operation
        const updatedOp = changeWriteLayer(initialOp, writeLayer);

        expect(updatedOp.layer).toEqual([['Frost', 1], ['Deciduous', 4], ['Pines', 3], ['Deciduous', 4]]);
        // Ensure 'Deciduous' has been updated to the new layer with value 4
    });

    it('should not change the operation if write layer does not exist', () => {
        const writeLayer: WpLayerSetting = ['MissingLayer', 5]; // A layer that doesn't exist in the initial operation
        const updatedOp = changeWriteLayer(initialOp, writeLayer);

        expect(updatedOp).toEqual(initialOp);
        // Ensure the operation remains unchanged as the write layer doesn't exist in the initial layers
    });

    // Add more test cases as needed to cover different scenarios and edge cases
});

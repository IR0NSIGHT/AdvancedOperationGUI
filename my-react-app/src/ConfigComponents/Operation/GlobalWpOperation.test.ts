import {changeWriteLayer, GlobalWpOperation} from './GlobalWpOperation';
import {WpLayerSetting} from "./WpLayerSetting";

describe('changeWriteLayer function', () => {

    const initialOp: GlobalWpOperation = {
        "name": "small bubble forest",
        "layer": [['Frost', 1], ['Pines', 3]],
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
        const updatedOp = changeWriteLayer(initialOp, null, writeLayer);

        expect(updatedOp.layer).toEqual([['Frost', 1], ['Pines', 3], ['Deciduous', 4]]);
    });

    it('mutate existing layer', () => {
        expect(initialOp.layer).toEqual([['Frost', 1], ['Pines', 3]])

        const writeLayer: WpLayerSetting = ['Pines', 12]; // A layer that doesn't exist in the initial operation
        const updatedOp = changeWriteLayer(initialOp, ['Pines', 3], writeLayer);

        expect(updatedOp.layer).toEqual([['Frost', 1], ['Pines', 12]])
    });

});

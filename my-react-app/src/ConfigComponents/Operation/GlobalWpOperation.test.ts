import {changeWriteLayer, GlobalWpOperation} from './GlobalWpOperation';
import {WpLayerSetting} from "./WpLayerSetting";

describe('changeWriteLayer function', () => {



    it('add new layer', () => {
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
        const writeLayer: WpLayerSetting = ['Deciduous', 4]; // New layer to replace 'Deciduous' in the operation
        const updatedOp = changeWriteLayer(initialOp, null, writeLayer);

        expect(updatedOp.layer).toEqual([['Frost', 1], ['Pines', 3], ['Deciduous', 4]]);
    });

    it('mutate existing layer value', () => {
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
        expect(initialOp.layer).toEqual([['Frost', 1], ['Pines', 3]])

        const writeLayer: WpLayerSetting = ['Pines', 12]; // A layer that doesn't exist in the initial operation
        const updatedOp = changeWriteLayer(initialOp, ['Pines', 3], writeLayer);

        expect(updatedOp.layer).toEqual([['Frost', 1], ['Pines', 12]])
    });

    it('remove existing layer', () => {
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
        expect(initialOp.layer).toEqual([['Frost', 1], ['Pines', 3]])

        const writeLayer: WpLayerSetting|null = null; // A layer that doesn't exist in the initial operation
        const updatedOp = changeWriteLayer(initialOp, ['Pines', 3], writeLayer);

        expect(updatedOp.layer).toEqual([['Frost', 1]])
    });

    it('mutate layer name pines => annotations', () => {
        const initialOp: GlobalWpOperation = {
            "name": "small bubble forest",
            "layer": [['Pines', 7]],
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
        expect(initialOp.layer).toEqual([['Pines', 7]])

        const writeLayer: WpLayerSetting = ['Annotations', 7];
        const updatedOp = changeWriteLayer(initialOp, ['Pines', 7], writeLayer);

        expect(updatedOp.layer).toEqual([['Annotations', 7]])
    });
});

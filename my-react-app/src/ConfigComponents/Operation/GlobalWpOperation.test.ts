import {applyLayerChange, emptyOperation, GlobalWpOperation} from './GlobalWpOperation';
import {WpLayerSetting} from "./WpLayerSetting";

describe('changeWriteLayer function', () => {


    it('add new layer', () => {
        const initialOp: GlobalWpOperation = {
            ...emptyOperation,
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
        const updatedOp = applyLayerChange(initialOp.layer!, null, writeLayer);

        expect(updatedOp).toEqual([['Deciduous', 4], ['Frost', 1], ['Pines', 3]]);
    });

    it('mutate existing layer value', () => {
        const initialOp: GlobalWpOperation = {
            ...emptyOperation,
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
        const updatedOp = applyLayerChange(initialOp.layer!, ['Pines', 3], writeLayer);

        expect(updatedOp).toEqual([['Frost', 1], ['Pines', 12]])
    });

    it('remove existing layer', () => {
        const initialOp: GlobalWpOperation = {
            ...emptyOperation,
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

        const writeLayer: WpLayerSetting | null = null; // A layer that doesn't exist in the initial operation
        const updatedOp = applyLayerChange(initialOp.layer!, ['Pines', 3], writeLayer);

        expect(updatedOp).toEqual([['Frost', 1]])
    });

    it('mutate layer name pines => annotations', () => {
        const initialOp: GlobalWpOperation = {
            ...emptyOperation,
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
        const updatedOp = applyLayerChange(initialOp.layer!, ['Pines', 7], writeLayer);

        expect(updatedOp).toEqual([['Annotations', 7]])
    });

    it('does not allow double entries', () => {
        const initialOp: GlobalWpOperation = {
            ...emptyOperation,
            "name": "small bubble forest",
            "layer": [['Pines', 7], ["Annotations", 12]],
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
        const updatedOp = applyLayerChange(initialOp.layer!, ['Pines', 7], ['Annotations', 7]);

        expect(updatedOp).toEqual([['Annotations', 7]])
    });

    it('overwrites old and new layer matches', () => {
        const initialOp: GlobalWpOperation = {
            ...emptyOperation,
            "name": "small bubble forest",
            "layer": [['Pines', 7], ['Pines', 2], ["Annotations", 12], ["Annotations", 2], ["Burgers", 3]],
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
        const updatedOp = applyLayerChange(initialOp.layer!, ['Pines', 7], ['Annotations', 7]);

        expect(updatedOp).toEqual([['Annotations', 7],["Burgers", 3] ])
    });
});

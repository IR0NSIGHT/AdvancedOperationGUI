import React from 'react';
import {Story} from '@storybook/react';
import {GlobalWpOperation} from "./Operation/GlobalWpOperation";
import {AdvancedConfigEditor} from "./AdvancedConfigEditor";

export default {
    title: 'Components/AdvancedConfigEditor',
    component: AdvancedConfigEditor,
};

const emptyOperation: GlobalWpOperation = {
    aboveDegrees: undefined,
    aboveLevel: undefined,
    belowDegrees: undefined,
    belowLevel: undefined,
    layer: [],
    name: "",
    onlyOnLayer: [],
    perlin: undefined,
    terrain: undefined
}

const operations: GlobalWpOperation[] = [
    {
        ...emptyOperation,
        layer: [["Pines", 0], ["Annotations", 0], ["Frost", 0]],
        name: 'remove crap',
        onlyOnLayer: [],
        terrain: 2
    },
    {
        ...emptyOperation,
        aboveLevel: 70,
        belowDegrees: 40,
        belowLevel: 90,
        layer: [['Frost', 1]],
        name: 'flat ice desert',
        onlyOnLayer: [],
        terrain: [40]
    },
    {
        ...emptyOperation,
        belowDegrees: 40,
        belowLevel: 70,
        layer: [],
        name: 'flat shore',
        onlyOnLayer: [],
        terrain: 29
    },
    {
        ...emptyOperation,
        aboveDegrees: 40,
        belowLevel: 70,
        layer: [],
        name: 'steep shore',
        onlyOnLayer: [],
        terrain: 72
    },
    {
        ...emptyOperation,
        aboveLevel: 70,
        belowDegrees: 40,
        layer: [["Pines", 5], ["Deciduous", 3]],
        name: 'flat iced forest',
        onlyOnLayer: [],
        perlin: {seed: 420, scale: 100, amplitude: 1, threshold: 0.5},
        terrain: [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 2,
            100, 158
        ]
    },
    {
        ...emptyOperation,
        name: 'rocky cliffs', terrain: 31, aboveDegrees: 30,
    },
    {
        ...emptyOperation,
        name: 'frost perlin on water',
        belowLevel: 64,
        layer: [['Frost', 1]],
        perlin: {seed: 421, scale: 30, amplitude: 1, threshold: 0.6}
    }
]

const Template: Story = () => <AdvancedConfigEditor
    initialConfig={{operations: operations}}/>;

export const Default = Template.bind({});

import React from 'react';
import {Story} from '@storybook/react';
import OperationWrapper from './OperationWrapper';
import {GlobalWpOperation} from "ConfigComponents/Operation/GlobalWpOperation"; // Adjust the path as per your project structure

export default {
    title: 'Components/OperationWrapper',
    component: OperationWrapper,
};

const defaultOperation: GlobalWpOperation = {
    "name": "small bubble forest",
    "layer": [[
        "Ta - Eurasian Aspen (Z)",
        7
    ]],
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

const Template: Story = () => <OperationWrapper initalOperation={defaultOperation}/>;

export const Default = Template.bind({});

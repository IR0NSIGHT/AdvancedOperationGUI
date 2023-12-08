import React from 'react';
import { Story } from '@storybook/react';
import LayerSelector, {LayerSelectorProps} from "./LayerSelector";

export default {
    title: 'Components/NameSelector',
    component: LayerSelector,
};

const Template: Story<LayerSelectorProps> = (args) => <LayerSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
    layerName: 'Selected Layer',
    layerList: ['Layer 1', 'Layer 2', 'Layer 3'],
    onUpdateLayerName: (newName: string) => {
        console.log(`Updated name: ${newName}`);
    },
};

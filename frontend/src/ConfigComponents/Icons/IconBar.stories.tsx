// src/stories/IconBar.stories.tsx

import React from "react";
import { Meta, Story } from "@storybook/react";
import { IconBar, IconBarProps } from "./IconBar";
import { DefaultLayers } from "../Layer/WpLayerSetting";
import { wpTerrainTypes } from "../Terrain/WpTerrainTypes";

export default {
  title: "IconBar",
  component: IconBar,
} as Meta;

const Template: Story<IconBarProps> = (args) => <IconBar {...args} />;

export const PinesIconBar = Template.bind({});
PinesIconBar.args = {
  defaultLayers: ["Pines", "Deciduous", "Annotations"],
  terrainList: [],
};

export const DefaultLayersIconBar = Template.bind({});
DefaultLayersIconBar.args = {
  defaultLayers: DefaultLayers,
  terrainList: [],
};

export const EmptyIconBar = Template.bind({});
EmptyIconBar.args = {
  defaultLayers: [],
  terrainList: [],
};

export const TerrainsBar = Template.bind({});
EmptyIconBar.args = {
  defaultLayers: [],
  terrainList: wpTerrainTypes,
};

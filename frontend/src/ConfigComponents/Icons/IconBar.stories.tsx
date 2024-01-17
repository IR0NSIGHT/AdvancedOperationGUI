// src/stories/IconBar.stories.tsx

import React from "react";
import { Meta, Story } from "@storybook/react";
import { IconBar, IconBarProps } from "./IconBar";
import { DefaultLayers } from "../Layer/WpLayerSetting";
import { wpTerrainTypes } from "../Terrain/WpTerrainTypes";
import { StandardFilters } from "../Operation/NumericFilter";

export default {
  title: "IconBar",
  component: IconBar,
} as Meta;

const Template: Story<IconBarProps> = (args) => <IconBar {...args} />;

export const PinesIconBar = Template.bind({});
PinesIconBar.args = {
  defaultLayers: ["Pines", "Deciduous", "Annotations"],
  terrainList: [],
  numericFilters: [],
};

export const DefaultLayersIconBar = Template.bind({});
DefaultLayersIconBar.args = {
  defaultLayers: DefaultLayers,
  terrainList: [],
  numericFilters: [],
};

export const EmptyIconBar = Template.bind({});
EmptyIconBar.args = {
  defaultLayers: [],
  terrainList: [],
  numericFilters: [],
};

export const TerrainsBar = Template.bind({});
EmptyIconBar.args = {
  defaultLayers: [],
  terrainList: wpTerrainTypes,
  numericFilters: StandardFilters,
};

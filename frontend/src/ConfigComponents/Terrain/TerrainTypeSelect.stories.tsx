import TerrainTypeSelect, { TerrainTypeSelectProps } from "./TerrainTypeSelect";
import { Story } from "@storybook/react";
import {
  NoneTerrain,
  sortTerrainAlphabetically,
  wpTerrainTypes,
} from "./WpTerrainTypes";

export default {
  title: "Components/TerrainSelector",
  component: TerrainTypeSelect,
};

const Template: Story<TerrainTypeSelectProps> = (args) => (
  <TerrainTypeSelect {...args} />
);

export const Default = Template.bind({});
Default.args = {
  terrain: wpTerrainTypes[0],
  terrainList: sortTerrainAlphabetically(wpTerrainTypes),
  onUpdateTerrainName: (newId: number) => {
    console.log("SELECTED NEW TERRAIN: ", newId);
  },
  noneTerrain: NoneTerrain,
};

export const NoneTerrainSelected = Template.bind({});
NoneTerrainSelected.args = {
  terrain: NoneTerrain,
  terrainList: sortTerrainAlphabetically(wpTerrainTypes),
  onUpdateTerrainName: (newId: number) => {
    console.log("SELECTED NEW TERRAIN: ", newId);
  },
  noneTerrain: NoneTerrain,
};

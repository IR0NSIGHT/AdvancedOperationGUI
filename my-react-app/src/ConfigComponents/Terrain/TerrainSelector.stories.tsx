import TerrainSelector, { TerrainSelectorProps } from "./TerrainSelector";
import { Story } from "@storybook/react";
import { sortTerrainAlphabetically, wpTerrainTypes } from "./WpTerrainTypes";

export default {
  title: "Components/TerrainSelector",
  component: TerrainSelector,
};

const Template: Story<TerrainSelectorProps> = (args) => (
  <TerrainSelector {...args} />
);

export const Default = Template.bind({});
Default.args = {
  terrain: wpTerrainTypes[0],
  terrainList: sortTerrainAlphabetically(wpTerrainTypes),
  onUpdateTerrainName: (newId: number) => {
    console.log("SELECTED NEW TERRAIN: ", newId);
  },
};

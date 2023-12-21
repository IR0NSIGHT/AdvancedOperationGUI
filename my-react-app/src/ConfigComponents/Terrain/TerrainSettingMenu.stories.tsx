import { Story } from "@storybook/react";
import { wpTerrainTypes } from "./WpTerrainTypes";
import {WeightedTerrainEditor,
  WeightedTerrainEditorProps,
  WeightedTerrainSetting,
} from "./WeightedTerrainEditor";

export default {
  title: "Components/TerrainSettingMenu",
  component: WeightedTerrainEditor,
};

const Template: Story<WeightedTerrainEditorProps> = (args) => (
  <WeightedTerrainEditor {...args} />
);

const onUpdateSetting = (
  oldSetting: WeightedTerrainSetting,
  newSetting: WeightedTerrainSetting
) => {
  console.log("new setting was set:", oldSetting, " => ", newSetting);
};

export const Default = Template.bind({});
Default.args = {
  terrainSetting: { terrain: wpTerrainTypes[0], weight: 1 },
  onUpdateSetting: onUpdateSetting,
};

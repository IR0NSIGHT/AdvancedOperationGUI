import {Story} from "@storybook/react";
import { wpTerrainTypes} from "./WpTerrainTypes";
import TerrainSettingMenu, {TerrainSettingMenuProps, WeightedTerrainSetting} from "./TerrainSettingMenu";

export default {
    title: 'Components/TerrainSettingMenu',
    component: TerrainSettingMenu,
};

const Template: Story<TerrainSettingMenuProps> = (args) => <TerrainSettingMenu {...args} />;

const onUpdateSetting = (oldSetting: WeightedTerrainSetting, newSetting: WeightedTerrainSetting) => {
    console.log("new setting was set:",oldSetting," => ", newSetting)
}

export const Default = Template.bind({});
Default.args = {
    terrainSetting: { terrain: wpTerrainTypes[0], weight: 1 },
    onUpdateSetting: onUpdateSetting
};

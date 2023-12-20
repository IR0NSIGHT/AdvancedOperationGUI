import TerrainSelector, {TerrainSelectorProps} from "./TerrainSelector";
import {Story} from "@storybook/react";
import {sortTerrainAlphabetically, terrainTypes} from "./TerrainTypes";

export default {
    title: 'Components/TerrainSelector',
    component: TerrainSelector,
};

const Template: Story<TerrainSelectorProps> = (args) => <TerrainSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
    terrain: terrainTypes[0],
    terrainList: sortTerrainAlphabetically(terrainTypes),
    onUpdateTerrainName: (newId: number) => {
        console.log("SELECTED NEW TERRAIN: ", newId)
    }
};

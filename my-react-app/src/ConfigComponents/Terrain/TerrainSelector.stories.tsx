import TerrainSelector, {TerrainSelectorProps} from "./TerrainSelector";
import {Story} from "@storybook/react";

export default {
    title: 'Components/TerrainSelector',
    component: TerrainSelector,
};

const Template: Story<TerrainSelectorProps> = (args) => <TerrainSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
    terrain: { id: 0, name: "Stone"},
    terrainList: [{ id: 0, name: "Stone"},{ id: 1, name: "Dirt"},{ id: 2, name: "Sand"}],
    onUpdateTerrainName: (newId: number) => {
        console.log("SELECTED NEW TERRAIN: ", newId)
    }
};

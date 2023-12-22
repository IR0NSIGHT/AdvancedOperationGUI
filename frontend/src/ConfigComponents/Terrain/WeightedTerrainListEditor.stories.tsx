import { Story } from "@storybook/react";
import { WeightedTerrainSetting } from "./WeightedTerrainEditor";
import {
  sortWeightedTerrainList,
  updateWeightedTerrainList,
  WeightedTerrainListEditor,
} from "./WeightedTerrainListEditor";
import { useState } from "react";
import { terrainIdsToWeightedTerrains, wpTerrainTypes } from "./WpTerrainTypes";

export default {
  title: "Components/OperationTerrainList",
  component: WeightedTerrainListEditor,
};

type templateProps = {
  listedTerrains: WeightedTerrainSetting[];
};

const Template: Story<templateProps> = ({ listedTerrains }) => {
  console.log("listed terrains:" + listedTerrains);
  const [currentTerrains, setCurrentTerrains] = useState(
    sortWeightedTerrainList(listedTerrains)
  );

  const handleTerrainChanged = (
    oldSetting: WeightedTerrainSetting | null,
    newSetting: WeightedTerrainSetting | null
  ) => {
    setCurrentTerrains(
      updateWeightedTerrainList(oldSetting, newSetting, currentTerrains)
    );
  };

  return (
    <WeightedTerrainListEditor
      terrains={currentTerrains}
      onTerrainChanged={handleTerrainChanged}
    />
  );
};

export const SingleWeights = Template.bind({});
SingleWeights.args = {
  listedTerrains: wpTerrainTypes
    .slice(0, 10)
    .map((t) => ({ terrain: t, weight: 1 })),
};
SingleWeights.storyName = "Terrains with weight=1";

export const Variation = Template.bind({});
Variation.args = {
  listedTerrains: terrainIdsToWeightedTerrains([
    1, 1, 1, 1, 2, 3, 4, 5, 1, 2, 2, 3,
  ]),
};
Variation.storyName = "Terrains with different weights";

import { Story } from "@storybook/react";
import { WeightedTerrainSetting } from "./WeightedTerrainEditor";
import {
  WeightedTerrainListEditor,
  WeightedTerrainListEditorProps,
  updateWeightedTerrainList,
} from "./WeightedTerrainListEditor";
import { wpTerrainTypes } from "./WpTerrainTypes";
import { useState } from "react";

export default {
  title: "Components/OperationTerrainList",
  component: WeightedTerrainListEditor,
};

const Template: Story<WeightedTerrainListEditorProps> = (args) => {
  const [currentTerrains, setCurrentTerrains] = useState(
    wpTerrainTypes.slice(3, 10).map((t) => ({
      terrain: t,
      weight: 1,
    }))
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

export const Default = Template.bind({});

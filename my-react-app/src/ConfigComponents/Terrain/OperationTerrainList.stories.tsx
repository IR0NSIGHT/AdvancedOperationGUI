import { Story } from "@storybook/react";
import { WeightedTerrainSetting } from "./WeightedTerrainEditor";
import {
  OperationTerrainList,
  OperationTerrainListProps,
  TerrainSettingsMode,
  updateTerrainList,
} from "./OperationTerrainList";
import { wpTerrainTypes } from "./WpTerrainTypes";
import { useState } from "react";

export default {
  title: "Components/OperationTerrainList",
  component: OperationTerrainList,
};

const Template: Story<OperationTerrainListProps> = (args) => {
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
      updateTerrainList(oldSetting, newSetting, currentTerrains)
    );
  };

  return (
    <OperationTerrainList
      terrains={currentTerrains}
      onTerrainChanged={handleTerrainChanged}
      mode={TerrainSettingsMode.APPLY}
    />
  );
};

export const Default = Template.bind({});

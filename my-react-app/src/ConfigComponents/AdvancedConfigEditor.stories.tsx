import React from "react";
import { Story } from "@storybook/react";
import {
  emptyConfigOperation,
  ConfigOperation, configOperationToDisplay,
} from "./Operation/ConfigOperation";
import { AdvancedConfigEditor } from "./AdvancedConfigEditor";
import { formatDate } from "@storybook/blocks";

export default {
  title: "Components/AdvancedConfigEditor",
  component: AdvancedConfigEditor,
};

const operations: ConfigOperation[] = [
  {
    ...emptyConfigOperation,
    layer: [
      ["Pines", 0],
      ["Annotations", 0],
      ["Frost", 0],
    ],
    name: "remove crap",
    onlyOnLayer: [],
    terrain: 2,
  },
  {
    ...emptyConfigOperation,
    aboveLevel: 70,
    belowDegrees: 40,
    belowLevel: 90,
    layer: [["Frost", 1]],
    name: "flat ice desert",
    onlyOnLayer: [],
    terrain: [40],
  },
  {
    ...emptyConfigOperation,
    belowDegrees: 40,
    belowLevel: 70,
    layer: [],
    name: "flat shore",
    onlyOnLayer: [],
    terrain: 29,
  },
  {
    ...emptyConfigOperation,
    aboveDegrees: 40,
    belowLevel: 70,
    layer: [],
    name: "steep shore",
    onlyOnLayer: [],
    terrain: 72,
  },
  {
    ...emptyConfigOperation,
    aboveLevel: 70,
    belowDegrees: 40,
    layer: [
      ["Pines", 5],
      ["Deciduous", 3],
    ],
    name: "flat iced forest",
    onlyOnLayer: [],
    perlin: { seed: 420, scale: 100, amplitude: 1, threshold: 0.5 },
    terrain: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 100, 158],
  },
  {
    ...emptyConfigOperation,
    name: "rocky cliffs",
    terrain: 31,
    aboveDegrees: 30,
  },
  {
    ...emptyConfigOperation,
    name: "frost perlin on water",
    belowLevel: 64,
    layer: [["Frost", 1]],
    perlin: { seed: 421, scale: 30, amplitude: 1, threshold: 0.6 },
  },
];

const Template: Story = () => (
  <AdvancedConfigEditor
    initialConfig={{
      operations: operations.map(configOperationToDisplay),
      name: "DebugConfig",
      author: "IR0NSIGHT",
      date: formatDate(Date.now()),
      description: ""
    }}
  />
);

export const Default = Template.bind({});

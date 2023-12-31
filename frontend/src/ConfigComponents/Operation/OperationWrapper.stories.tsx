import React from "react";
import { Story } from "@storybook/react";
import { OperationEditor } from "./OperationEditor";
import { DisplayOperation } from "./DisplayOperation";
import { aboveDegreesFilter, belowDegreesFilter } from "./NumericFilter"; // Adjust the path as per your project structure

export default {
  title: "Components/OperationEditor",
  component: OperationEditor,
};

const defaultOperation: DisplayOperation = {
  displayId: 0,
  layer: [
    ["Annotations", 5],
    ["Frost", 0],
    ["Pines", 7],
  ],
  name: "small bubble forest",
  onlyOnLayer: [["Pines", -1]],
  perlin: {
    seed: 12345678.0,
    scale: 40.0,
    amplitude: 1.0,
    threshold: 0.5,
  },
  terrain: [],
  onlyOnTerrain: [],
  numericFilters: [
    { filter: aboveDegreesFilter, value: 45 },
    { filter: belowDegreesFilter, value: 50 },
  ],
  slopeDir: [],
  facing: [],
};

const Template: Story = () => (
  <OperationEditor
    initialOperation={defaultOperation}
    deleteOperation={() => {}}
    updateOperation={(x) => {}}
  />
);

export const Default = Template.bind({});

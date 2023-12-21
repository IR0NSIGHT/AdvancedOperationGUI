import { AdvancedConfigEditor } from "./ConfigComponents/AdvancedConfigEditor";
import { formatDate } from "@storybook/blocks";
import { RawConfig } from "./ConfigComponents/RawConfig";

const initialConfig: RawConfig = {
  operations: [
    {
      name: "My first operation",
      terrain: [0, 0, 0, 1, 2, 3],
      onlyOnTerrain: [],
      layer: [
        ["Pines", 5],
        ["Deciduous", 7],
        ["Annotations", 1],
      ],
      belowDegrees: undefined,
      aboveDegrees: undefined,
      belowLevel: undefined,
      aboveLevel: undefined,
      onlyOnLayer: undefined,
      perlin: undefined,
      slopeDir: undefined,
      facing: undefined
    },
  ],
  name: "DebugConfig",
  author: "IR0NSIGHT",
  date: formatDate(Date.now()),
};
function App() {
  return (
    <div className="App">
      <AdvancedConfigEditor initialConfig={initialConfig} />
    </div>
  );
}

export default App;

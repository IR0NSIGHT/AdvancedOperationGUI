import { AdvancedConfigEditor } from "./ConfigComponents/AdvancedConfigEditor";
import { formatDate } from "@storybook/blocks";
import {DisplayConfig} from "./ConfigComponents/DisplayConfig";
import {
  ConfigOperation,
  configOperationToDisplay,
  emptyConfigOperation
} from "./ConfigComponents/Operation/ConfigOperation";

const ops : ConfigOperation[] = [{
  ...emptyConfigOperation,
  name: "My first operation",
  terrain: [0, 0, 0, 1, 2, 3],
  layer: [
    ["Pines", 5],
    ["Deciduous", 7],
    ["Annotations", 1],
  ],
}]
const initialConfig: DisplayConfig = {
  operations: ops.map(configOperationToDisplay),
  name: "DebugConfig",
  author: "IR0NSIGHT",
  date: formatDate(Date.now()),
  description: "owo!"
};
function App() {
  return (
    <div className="App">
      <AdvancedConfigEditor initialConfig={initialConfig} />
    </div>
  );
}

export default App;

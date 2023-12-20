import {AdvancedConfig, AdvancedConfigEditor} from "./ConfigComponents/AdvancedConfigEditor";
import {formatDate} from "@storybook/blocks";

const initialConfig: AdvancedConfig= {
  operations: [{
    name: "My first operation",
    terrain: [0,0,0,1,2,3],
    layer: [["Pines",5],["Deciduous",7],["Annotations",1]],
    belowDegrees: undefined,
    aboveDegrees: undefined,
    belowLevel: undefined,
    aboveLevel: undefined,
    onlyOnLayer: undefined,
    perlin: undefined
  }],
  author: "IR0NSIGHT",
  date: formatDate(Date.now())
}
function App() {
  return (
    <div className="App">
      <AdvancedConfigEditor initialConfig={initialConfig} />
    </div>
  );
}

export default App;

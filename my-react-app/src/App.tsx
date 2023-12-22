import { AdvancedConfigEditor } from "./ConfigComponents/AdvancedConfigEditor";
import {
  IcyPinesConfig,
  rawConfigToDisplay,
} from "./ConfigComponents/RawConfigToDisplay";

function App() {
  return (
    <div className="App">
      <AdvancedConfigEditor
        initialConfig={rawConfigToDisplay(IcyPinesConfig)}
      />
    </div>
  );
}

export default App;

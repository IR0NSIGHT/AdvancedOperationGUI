import { AdvancedConfigEditor } from "./ConfigComponents/AdvancedConfigEditor";
import {IcyPinesConfig, rawConfigToDisplay} from "./ConfigComponents/AdvancedConfigEditor.stories";

function App() {
  return (
    <div className="App">
      <AdvancedConfigEditor initialConfig={rawConfigToDisplay(IcyPinesConfig)} />
    </div>
  );
}

export default App;

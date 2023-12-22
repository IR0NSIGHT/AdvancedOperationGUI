import { AdvancedConfigEditor } from "./ConfigComponents/AdvancedConfigEditor";

import {
  advancedConfigEditorStories,
  IcyPinesConfig,
} from "./ConfigComponents/RawConfig";

function App() {
  return (
    <div className="App">
      <AdvancedConfigEditor
        initialConfig={advancedConfigEditorStories(IcyPinesConfig)}
      />
    </div>
  );
}

export default App;

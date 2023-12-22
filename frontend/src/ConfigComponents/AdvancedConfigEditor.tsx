import React, { useEffect, useState } from "react";
import { OperationEditor } from "./Operation/OperationEditor";
import { Button } from "@material-ui/core";
import { ArrayMutationAction, RawConfig } from "./RawConfig";
import DownloadJsonButton from "./DownloadJsonButton";
import { DisplayConfig } from "./DisplayConfig";
import {
  DisplayOperation,
  newEmptyDisplayOperation,
  translateDisplayOperation,
  updateOperationArray,
} from "./Operation/DisplayOperation";
import { JsonTextPanel } from "./Operation/JsonTextPanel";

export type AdvancedConfigEditorProps = {
  initialConfig: DisplayConfig;
};

export const AdvancedConfigEditor: React.FC<AdvancedConfigEditorProps> = ({
  initialConfig,
}) => {
  const [displayedOperations, setDisplayedOperations] = useState<
    DisplayOperation[]
  >([...initialConfig.operations]);

  useEffect(() => {
    setDisplayedOperations([...initialConfig.operations]);
  }, [initialConfig]);
  const addOperation = () => {
    const newOps = updateOperationArray(
      { ...newEmptyDisplayOperation(), name: "my new operation" },
      ArrayMutationAction.INSERT,
      [...displayedOperations]
    );
    console.log(
      "new operations after adding:",
      newOps.map((op) => ({ name: op.name, id: op.displayId }))
    );
    setDisplayedOperations(newOps);
  };

  const updateOperation = (op: DisplayOperation) => {
    setDisplayedOperations(
      updateOperationArray(op, ArrayMutationAction.OVERWRITE, [
        ...displayedOperations,
      ])
    );
  };

  const deleteOperation = (op: DisplayOperation) => {
    setDisplayedOperations(
      updateOperationArray(op, ArrayMutationAction.DELETE, [
        ...displayedOperations,
      ])
    );
  };

  return (
    <div>
      <h1>AdvancedConfig GUI</h1>
      <div>Editor for the AdvancedOperator script by IR0NSIGHT</div>
      {displayedOperations.map((op) => (
        <OperationEditor
          initialOperation={op}
          updateOperation={updateOperation}
          deleteOperation={deleteOperation}
        />
      ))}
      <Button variant="contained" color="primary" onClick={addOperation}>
        Add new global operation
      </Button>

      <DownloadJsonButton
        config={rawConfigFromDisplay(initialConfig)}
        fileName={"AdvancedOperator_config_" + initialConfig.name}
      />
      <JsonTextPanel
        json={JSON.stringify(
          displayedOperations.map(translateDisplayOperation),
          null,
          3
        )}
        title={"executable JSON config"}
      />
    </div>
  );
};

const rawConfigFromDisplay = (displayConfig: DisplayConfig): RawConfig => {
  return {
    ...displayConfig,
    operations: displayConfig.operations.map(translateDisplayOperation),
  };
};

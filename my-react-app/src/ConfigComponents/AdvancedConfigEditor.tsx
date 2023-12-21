import { configOperationToDisplay } from "./Operation/ConfigOperation";
import React, { useState } from "react";
import { OperationEditor } from "./Operation/OperationEditor";
import { Button } from "@material-ui/core";
import {
  DisplayOperation,
  emptyDisplayOperation,
  updateOperationArray,
} from "./Operation/DisplayOperation";
import { ArrayMutationAction, RawConfig } from "./RawConfig";

export type AdvancedConfigEditorProps = {
  initialConfig: RawConfig;
};

export const AdvancedConfigEditor = (props: AdvancedConfigEditorProps) => {
  const displayOps = props.initialConfig.operations.map(
    configOperationToDisplay
  );
  const [displayedOperations, setDisplayedOperations] =
    useState<DisplayOperation[]>(displayOps);

  const addOperation = () => {
    const newOps = updateOperationArray(
      { ...emptyDisplayOperation, name: "my new operation" },
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
      <pre>{JSON.stringify(displayedOperations, null, 3)}</pre>
    </div>
  );
};

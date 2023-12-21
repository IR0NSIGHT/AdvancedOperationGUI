import React from "react";
import { applyLayerChange, WpLayerSetting } from "../Layer/WpLayerSetting";
import { CollapsibleComponent } from "./CollapsibleComponent";
import { LayerSettingsMode, LayerListEditor } from "../Layer/LayerListEditor";
import {
  OperationTerrainList,
  TerrainSettingsMode,
  updateTerrainList,
} from "../Terrain/OperationTerrainList";
import { WeightedTerrainSetting } from "../Terrain/WeightedTerrainEditor";
import {
  DisplayOperation,
  translateDisplayOperation,
} from "./DisplayOperation";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DeleteButton } from "../DeleteButton";

export type OperationEditorProps = {
  initialOperation: DisplayOperation;
  updateOperation: (op: DisplayOperation) => void;
  deleteOperation: (op: DisplayOperation) => void;
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export const OperationEditor: React.FC<OperationEditorProps> = ({
  initialOperation,
  updateOperation,
  deleteOperation,
}) => {
  const handleTerrainChanged = (
    oldSetting: WeightedTerrainSetting | null,
    newSetting: WeightedTerrainSetting | null
  ) => {
    updateOperation({
      ...initialOperation,
      terrain: updateTerrainList(
        oldSetting,
        newSetting,
        initialOperation.terrain
      ),
    });
  };

  const updateApplyLayer = (
    oldSetting: WpLayerSetting | null,
    newSetting: WpLayerSetting | null
  ) => {
    const newOp = {
      ...initialOperation,
      layer: applyLayerChange(initialOperation.layer, oldSetting, newSetting),
    };
    updateOperation(newOp);
  };

  const updateOnlyOnLayer = (
    oldSetting: WpLayerSetting | null,
    newSetting: WpLayerSetting | null
  ) => {
    const newOp = {
      ...initialOperation,
      onlyOnLayer: applyLayerChange(
        initialOperation.onlyOnLayer,
        oldSetting,
        newSetting
      ),
    };
    updateOperation(newOp);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateOperation({ ...initialOperation, name: event.target.value });
  };
  const classes = useStyles();
  return (
    <CollapsibleComponent
      title={initialOperation.name}
      content={
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <label htmlFor="nameInput">Operation Name:</label>
              <input
                type="text"
                id="nameInput"
                value={initialOperation.name}
                onChange={handleNameChange}
              />
            </div>
            <DeleteButton
              onClick={() => {
                deleteOperation(initialOperation);
              }}
            />
          </div>

          <div className={classes.root}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <LayerListEditor
                  mode={LayerSettingsMode.APPLY}
                  layers={initialOperation.layer}
                  updateLayer={updateApplyLayer}
                />
              </Grid>
              <Grid item xs={6}>
                <LayerListEditor
                  mode={LayerSettingsMode.ONLY_ON_LAYER}
                  layers={initialOperation.onlyOnLayer}
                  updateLayer={updateOnlyOnLayer}
                />
              </Grid>
              <Grid item xs={6}>
                <OperationTerrainList
                  mode={TerrainSettingsMode.APPLY}
                  terrains={initialOperation.terrain}
                  onTerrainChanged={handleTerrainChanged}
                />
              </Grid>
              <Grid item xs={6}>
                <OperationTerrainList
                  mode={TerrainSettingsMode.ONLY_ON_TERRAIN}
                  terrains={initialOperation.terrain}
                  onTerrainChanged={handleTerrainChanged}
                />
              </Grid>
            </Grid>
          </div>

          <CollapsibleComponent
            title={"JSON config"}
            content={
              <pre>
                {JSON.stringify(
                  translateDisplayOperation(initialOperation),
                  null,
                  3
                )}
              </pre>
            }
          ></CollapsibleComponent>
        </div>
      }
    />
  );
};

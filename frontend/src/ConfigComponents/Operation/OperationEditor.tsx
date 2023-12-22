import React from "react";
import { applyLayerChange, WpLayerSetting } from "../Layer/WpLayerSetting";
import { CollapsibleComponent } from "./CollapsibleComponent";
import { LayerListEditor, LayerSettingsMode } from "../Layer/LayerListEditor";
import {
  updateWeightedTerrainList,
  WeightedTerrainListEditor,
} from "../Terrain/WeightedTerrainListEditor";
import { WeightedTerrainSetting } from "../Terrain/WeightedTerrainEditor";
import {
  DisplayOperation,
  translateDisplayOperation,
} from "./DisplayOperation";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DeleteButton } from "../DeleteButton";
import { WpTerrainType, wpTerrainTypes } from "../Terrain/WpTerrainTypes";
import { TerrainListEditor } from "../Terrain/TerrainListEditorProps";
import { StandardFilters } from "./NumericFilterSelect";
import { NumericFilterSettingList } from "./NumericFilterSettingList";

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
  const onApplyTerrainChange = (
    oldSetting: WeightedTerrainSetting | null,
    newSetting: WeightedTerrainSetting | null
  ) => {
    updateOperation({
      ...initialOperation,
      terrain: updateWeightedTerrainList(
        oldSetting,
        newSetting,
        initialOperation.terrain
      ),
    });
  };

  const onApplyLayerChange = (
    oldSetting: WpLayerSetting | null,
    newSetting: WpLayerSetting | null
  ) => {
    const newOp = {
      ...initialOperation,
      layer: applyLayerChange(initialOperation.layer, oldSetting, newSetting),
    };
    updateOperation(newOp);
  };

  const onLayerFilterChange = (
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

  const onTerrainFilterChange = (
    old: WpTerrainType[],
    newL: WpTerrainType[]
  ) => {
    const newOp = {
      ...initialOperation,
      onlyOnTerrain: newL,
    };
    updateOperation(newOp);
  };

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                onChange={onNameChange}
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
                  updateLayer={onApplyLayerChange}
                />
              </Grid>
              <Grid item xs={6}>
                <LayerListEditor
                  mode={LayerSettingsMode.ONLY_ON_LAYER}
                  layers={initialOperation.onlyOnLayer}
                  updateLayer={onLayerFilterChange}
                />
              </Grid>
              <Grid item xs={6}>
                <WeightedTerrainListEditor
                  terrains={initialOperation.terrain}
                  onTerrainChanged={onApplyTerrainChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TerrainListEditor
                  terrainList={initialOperation.onlyOnTerrain}
                  onListChanged={onTerrainFilterChange}
                  allowedTerrains={wpTerrainTypes}
                />
              </Grid>
              <Grid item xs={6}>
                <NumericFilterSettingList
                  listedFilters={StandardFilters.map((f) => ({
                    filter: f,
                    value: 1,
                  }))}
                  allowedFilters={StandardFilters}
                  onFiltersChanged={(a, b) => {}}
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

import React from "react";
import {
  applyLayerChange,
  isDefaultLayersType,
  WpLayerSetting,
} from "../Layer/WpLayerSetting";
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
import { NumericFilterSettingList } from "./NumericFilterSettingList";
import { OperationSubsection } from "./OperationSubsection";
import { NumericFilterSetting } from "./NumericFilterSetting";
import { NoneFilter, StandardFilters } from "./NumericFilter";
import { JsonTextPanel } from "./JsonTextPanel";
import { TerrainListEditor } from "../Terrain/TerrainListEditor";
import { IconBar } from "../Icons/IconBar";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

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

  const onNumericFilterChange = (
    old: NumericFilterSetting[],
    newF: NumericFilterSetting[]
  ) => {
    console.log("changed filter from:", old, " to: ", newF);
    const newOp: DisplayOperation = {
      ...initialOperation,
      numericFilters: newF,
    };
    updateOperation(newOp);
  };

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateOperation({ ...initialOperation, name: event.target.value });
  };
  const classes = useStyles();

  const allowedFilters = [NoneFilter, ...StandardFilters];
  const standardFilterEditor = (
    <NumericFilterSettingList
      listedFilters={initialOperation.numericFilters}
      allowedFilters={allowedFilters}
      onFiltersChanged={onNumericFilterChange}
    />
  );

  const applyLayersEditor = (
    <LayerListEditor
      mode={LayerSettingsMode.APPLY}
      layers={initialOperation.layer}
      updateLayer={onApplyLayerChange}
    />
  );
  const onlyOnLayerEditor = (
    <LayerListEditor
      mode={LayerSettingsMode.ONLY_ON_LAYER}
      layers={initialOperation.onlyOnLayer}
      updateLayer={onLayerFilterChange}
    />
  );
  const applyTerrainEditor = (
    <WeightedTerrainListEditor
      terrains={initialOperation.terrain}
      onTerrainChanged={onApplyTerrainChange}
    />
  );
  const onlyOnTerrainEditor = (
    <TerrainListEditor
      terrainList={initialOperation.onlyOnTerrain}
      onListChanged={onTerrainFilterChange}
      allowedTerrains={wpTerrainTypes}
    />
  );
  return (
    <CollapsibleComponent
      title={
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div style={{ width: "10em" }}>{initialOperation.name}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "right",
              justifyContent: "flex-end",

              marginLeft: "auto",
              marginRight: 0,
            }}
          >
            <IconBar
              defaultLayers={initialOperation.onlyOnLayer
                .map((o) => o[0])
                .filter(isDefaultLayersType)}
              terrainList={initialOperation.onlyOnTerrain}
              numericFilters={initialOperation.numericFilters.map(
                (s) => s.filter
              )}
            />
            <ArrowForwardIosOutlinedIcon style={{ width: "3em" }} />

            <IconBar
              defaultLayers={initialOperation.layer
                .map((o) => o[0])
                .filter(isDefaultLayersType)}
              terrainList={initialOperation.terrain.map((s) => s.terrain)}
              numericFilters={[]}
            />
          </div>
        </div>
      }
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
              <OperationSubsection
                xs={6}
                title={"Apply Layer"}
                content={applyLayersEditor}
              />

              <OperationSubsection
                xs={6}
                title={"Only on Layer"}
                content={onlyOnLayerEditor}
              />

              <OperationSubsection
                xs={6}
                title={"Apply Terrain"}
                content={applyTerrainEditor}
              />

              <OperationSubsection
                xs={6}
                title={"Only on Terrain"}
                content={onlyOnTerrainEditor}
              />

              <OperationSubsection
                xs={6}
                title={"Standard Filter"}
                content={standardFilterEditor}
              />
            </Grid>
          </div>
          <JsonTextPanel
            json={JSON.stringify(
              translateDisplayOperation(initialOperation),
              null,
              3
            )}
            title={"JSON"}
          />
        </div>
      }
    />
  );
};

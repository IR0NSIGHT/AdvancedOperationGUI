import TerrainSelector, { NoneTerrain } from "./TerrainSelector";
import {
  getTerrainById,
  sortTerrainAlphabetically,
  wpTerrainTypes,
  WpTerrainType,
} from "./WpTerrainTypes";
import {
  NamedValueSelector,
  NamedNumericValue,
} from "../Layer/NamedValueSelector";
import {DeleteButton} from "../DeleteButton";
import {updateTerrainList} from "./OperationTerrainList";

export type WeightedTerrainSetting = { terrain: WpTerrainType; weight: number };

export type WeightedTerrainEditorProps = {
  terrainSetting: WeightedTerrainSetting;
  onUpdateSetting: (
    oldSetting: WeightedTerrainSetting|null,
    newSetting: WeightedTerrainSetting|null
  ) => void;
};

export const WeightedTerrainEditor: React.FC<WeightedTerrainEditorProps> = ({
  terrainSetting,
  onUpdateSetting,
}: WeightedTerrainEditorProps) => {
  const allowedTerrains = [...wpTerrainTypes, NoneTerrain];

  const onTerrainTypeChanged = (id: number) => {
    const newTerrain = getTerrainById(id, allowedTerrains);
    if (newTerrain === undefined) {
      console.error("terrain type with id " + id + " was not found!");
      return;
    }
    onUpdateSetting(terrainSetting, { ...terrainSetting, terrain: newTerrain });
  };
  const onValueChange = (value: string) => {
    console.log("on value change: newValue", value);
    onUpdateSetting(terrainSetting, {
      ...terrainSetting,
      weight: parseInt(value),
    });
  };

  const allowedWeights: NamedNumericValue[] = [
    0, 1, 2, 3, 4, 5, 10, 20, 50,
  ].map((w) => ({ name: w.toString(), value: w }));

  return (
    <div>
      <TerrainSelector
        onUpdateTerrainName={onTerrainTypeChanged}
        terrain={terrainSetting.terrain}
        terrainList={sortTerrainAlphabetically(allowedTerrains)}
      />
      <NamedValueSelector
        layerValue={{
          name: terrainSetting.weight.toString(),
          value: terrainSetting.weight,
        }}
        allowedValues={allowedWeights}
        onUpdateValue={onValueChange}
      />
      <DeleteButton onClick={()=>{
        onUpdateSetting(terrainSetting, null)
      }}></DeleteButton>
    </div>
  );
};


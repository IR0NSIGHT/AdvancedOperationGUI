import TerrainTypeSelect, { NoneTerrain } from "./TerrainTypeSelect";
import {
  getTerrainById,
  sortTerrainAlphabetically,
  WpTerrainType,
  wpTerrainTypes,
} from "./WpTerrainTypes";
import { NamedNumericValue } from "../Layer/NamedValueSelector";
import { DeleteButton } from "../DeleteButton";
import { NumberInput } from "../Operation/NumberInput";

export type WeightedTerrainSetting = { terrain: WpTerrainType; weight: number };

export type WeightedTerrainEditorProps = {
  terrainSetting: WeightedTerrainSetting;
  onUpdateSetting: (
    oldSetting: WeightedTerrainSetting | null,
    newSetting: WeightedTerrainSetting | null
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
  const onValueChange = (oldV: number, value: number) => {
    console.log("on value change: newValue", value);
    onUpdateSetting(terrainSetting, {
      ...terrainSetting,
      weight: value,
    });
  };

  const sanitizeWeight = (weight: number) => {
    return Math.max(1, Math.min(100, weight));
  };
  const allowedWeights: NamedNumericValue[] = [
    0, 1, 2, 3, 4, 5, 10, 20, 50,
  ].map((w) => ({ name: w.toString(), value: w }));

  return (
    <div>
      <TerrainTypeSelect
        onUpdateTerrainName={onTerrainTypeChanged}
        terrain={terrainSetting.terrain}
        terrainList={sortTerrainAlphabetically(allowedTerrains)}
      />
      <NumberInput
        value={terrainSetting.weight}
        onInput={onValueChange}
        sanitizeInput={(n) => Math.max(1, n)}
      />

      <DeleteButton
        onClick={() => {
          onUpdateSetting(terrainSetting, null);
        }}
      ></DeleteButton>
    </div>
  );
};

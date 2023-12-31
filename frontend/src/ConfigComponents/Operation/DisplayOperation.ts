import { WeightedTerrainSetting } from "../Terrain/WeightedTerrainEditor";
import { WpLayerSetting } from "../Layer/WpLayerSetting";
import { ConfigOperation, compassDir, slopeDir } from "./ConfigOperation";
import assert from "assert";

import { ArrayMutationAction } from "../RawConfig";
import { WpTerrainType } from "../Terrain/WpTerrainTypes";
import { NumericFilterSetting } from "./NumericFilterSetting";
import { NumericToStandardFilter } from "./StandardFilter";

export type DisplayOperation = {
  displayId: number;
  name: string;
  terrain: WeightedTerrainSetting[];
  onlyOnTerrain: WpTerrainType[];
  layer: WpLayerSetting[];
  onlyOnLayer: WpLayerSetting[];
  numericFilters: NumericFilterSetting[];

  perlin:
    | {
        seed: number;
        scale: number;
        amplitude: number;
        threshold: number;
      }
    | undefined;

  facing: compassDir[];
  slopeDir: slopeDir[];
};
export const translateDisplayOperation = (
  x: DisplayOperation
): ConfigOperation => {
  const configTerrain: number[] = [];
  x.terrain.forEach((t) => {
    for (let i = 0; i < t.weight; i++) {
      configTerrain.push(t.terrain.id);
    }
  });
  return {
    name: x.name,
    ...NumericToStandardFilter(x.numericFilters),
    perlin: x.perlin,
    onlyOnLayer: x.onlyOnLayer,
    onlyOnTerrain: x.onlyOnTerrain.map((t) => t.id),
    layer: x.layer,
    terrain: configTerrain,
    facing: x.facing,
    slopeDir: x.slopeDir,
  };
};
const emptyDisplayOPeration: DisplayOperation = {
  name: "",
  displayId: -1,
  terrain: [],
  layer: [],
  onlyOnLayer: [],
  onlyOnTerrain: [],
  perlin: undefined,
  numericFilters: [],
  slopeDir: [],
  facing: [],
};

export const newEmptyDisplayOperation = () => {
  return { ...emptyDisplayOPeration };
};
/**
 * updates operations with given op. will replace op with same id, or append to list if not present
 * @param op
 * @param actionType type of action to perform
 * @param displayedOperations
 */
export const updateOperationArray = (
  op: DisplayOperation,
  actionType: ArrayMutationAction,
  displayedOperations: DisplayOperation[]
): DisplayOperation[] => {
  switch (actionType) {
    case ArrayMutationAction.DELETE:
      return displayedOperations.filter((x) => x.displayId !== op.displayId);

    case ArrayMutationAction.INSERT:
      //find max id in existing ops to generate a higher one:
      const maxId = displayedOperations
        .map((op) => op.displayId)
        .reduce(
          (previousValue, currentValue) =>
            Math.max(previousValue, currentValue),
          0
        );
      op.displayId = maxId + 1;

      displayedOperations.push(op);
      return displayedOperations;

    case ArrayMutationAction.OVERWRITE:
      const index = displayedOperations.findIndex(
        (x) => x.displayId === op.displayId
      );
      assert(
        displayedOperations[index].displayId === op.displayId,
        "operation ids went out of synch"
      );
      displayedOperations[index] = op;
      return displayedOperations;
    default:
      throw Error("illegal enum type");
  }
};

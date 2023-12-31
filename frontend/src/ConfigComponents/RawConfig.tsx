import {
  ConfigOperation,
  configOperationToDisplay,
  emptyConfigOperation,
} from "./Operation/ConfigOperation";
import { DisplayConfig } from "./DisplayConfig";

export type RawConfig = {
  operations: ConfigOperation[];
  name: string;
  author: string;
  date: string;
  description: string;
};

export function configEntryToArray<T>(configT: T | T[] | undefined): T[] {
  if (configT === undefined) return [];
  if (typeof configT === "number") return [configT];
  else if (Array.isArray(configT)) return configT;
  else throw Error("can not translate config array!" + configT);
}

export enum ArrayMutationAction {
  INSERT,
  OVERWRITE,
  DELETE,
}

export const IcyPinesConfig: RawConfig = {
  name: "Icy Pines",
  author: "IR0NSIGHT",
  date: "yes please",
  description: "Transforms the complete world into an icy pine landscape",
  operations: [
    {
      ...emptyConfigOperation,
      layer: [
        ["Pines", 0],
        ["Annotations", 0],
        ["Frost", 0],
      ],
      name: "remove crap",
      onlyOnLayer: [],
      terrain: 2,
    },
    {
      ...emptyConfigOperation,
      aboveLevel: 70,
      belowDegrees: 40,
      belowLevel: 90,
      layer: [["Frost", 1]],
      name: "flat ice desert",
      onlyOnLayer: [],
      terrain: [40],
    },
    {
      ...emptyConfigOperation,
      belowDegrees: 40,
      belowLevel: 70,
      layer: [],
      name: "flat shore",
      onlyOnLayer: [],
      terrain: 29,
    },
    {
      ...emptyConfigOperation,
      aboveDegrees: 40,
      belowLevel: 70,
      layer: [],
      name: "steep shore",
      onlyOnLayer: [],
      terrain: 72,
    },
    {
      ...emptyConfigOperation,
      aboveLevel: 70,
      belowDegrees: 40,
      layer: [
        ["Pines", 5],
        ["Deciduous", 3],
      ],
      name: "flat iced forest",
      onlyOnLayer: [],
      perlin: { seed: 420, scale: 100, amplitude: 1, threshold: 0.5 },
      terrain: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 100, 158],
    },
    {
      ...emptyConfigOperation,
      name: "rocky cliffs",
      terrain: 31,
      aboveDegrees: 30,
    },
    {
      ...emptyConfigOperation,
      name: "frost perlin on water",
      belowLevel: 64,
      layer: [["Frost", 1]],
      perlin: { seed: 421, scale: 30, amplitude: 1, threshold: 0.6 },
    },
  ],
};
export const advancedConfigEditorStories = (raw: RawConfig): DisplayConfig => {
  return {
    operations: IcyPinesConfig.operations.map(configOperationToDisplay),
    name: raw.name,
    author: raw.author,
    date: raw.date,
    description: raw.description,
  };
};

import { ConfigOperation } from "./Operation/ConfigOperation";

export type RawConfig = {
  operations: ConfigOperation[];
  name: string;
  author: string;
  date: string;
  description: string
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

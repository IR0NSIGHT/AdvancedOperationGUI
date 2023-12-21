import { ConfigOperation } from "./Operation/ConfigOperation";

export type RawConfig = {
  operations: ConfigOperation[];
  author: string;
  date: string;
};

export function denullifyConfigArray<T>(configT: T | T[] | undefined): T[] {
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

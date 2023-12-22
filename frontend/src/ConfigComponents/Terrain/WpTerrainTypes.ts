import { WeightedTerrainSetting } from "./WeightedTerrainEditor";

export const wpTerrainTypes: any[] = [
  {
    id: 0,
    name: "Grass (grass with flowers, tall grass and ferns here and there, and seagrass and kelp under water)",
    shortName: "Grass",
  },
  { id: 1, name: "Bare Grass (no vegetation)", shortName: "Bare Grass" },
  { id: 2, name: "Dirt", shortName: "Dirt" },
  {
    id: 3,
    name: "Coarse Dirt (dirt on which no grass will grow)",
    shortName: "Coarse Dirt",
  },
  { id: 4, name: "Podzol", shortName: "Podzol" },
  { id: 5, name: "Sand", shortName: "Sand" },
  { id: 6, name: "Red Sand", shortName: "Red Sand" },
  { id: 7, name: "Desert (dead shrubs and cacti)", shortName: "Desert" },
  {
    id: 8,
    name: "Red Desert (dead shrubs and cacti)",
    shortName: "Red Desert",
  },
  {
    id: 9,
    name: "Mesa (layers of hardened and stained clay)",
    shortName: "Mesa",
  },
  { id: 10, name: "Terracotta", shortName: "Terracotta" },
  {
    id: 11,
    name: "White Stained Terracotta",
    shortName: "White Stained Terracotta",
  },
  {
    id: 12,
    name: "Orange Stained Terracotta",
    shortName: "Orange Stained Terracotta",
  },
  {
    id: 13,
    name: "Magenta Stained Terracotta",
    shortName: "Magenta Stained Terracotta",
  },
  {
    id: 14,
    name: "Light Blue Stained Terracotta",
    shortName: "Light Blue Stained Terracotta",
  },
  {
    id: 15,
    name: "Yellow Stained Terracotta",
    shortName: "Yellow Stained Terracotta",
  },
  {
    id: 16,
    name: "Lime Stained Terracotta",
    shortName: "Lime Stained Terracotta",
  },
  {
    id: 17,
    name: "Pink Stained Terracotta",
    shortName: "Pink Stained Terracotta",
  },
  {
    id: 18,
    name: "Grey Stained Terracotta",
    shortName: "Grey Stained Terracotta",
  },
  {
    id: 19,
    name: "Light Grey Stained Terracotta",
    shortName: "Light Grey Stained Terracotta",
  },
  {
    id: 20,
    name: "Cyan Stained Terracotta",
    shortName: "Cyan Stained Terracotta",
  },
  {
    id: 21,
    name: "Purple Stained Terracotta",
    shortName: "Purple Stained Terracotta",
  },
  {
    id: 22,
    name: "Blue Stained Terracotta",
    shortName: "Blue Stained Terracotta",
  },
  {
    id: 23,
    name: "Brown Stained Terracotta",
    shortName: "Brown Stained Terracotta",
  },
  {
    id: 24,
    name: "Green Stained Terracotta",
    shortName: "Green Stained Terracotta",
  },
  {
    id: 25,
    name: "Red Stained Terracotta",
    shortName: "Red Stained Terracotta",
  },
  {
    id: 26,
    name: "Black Stained Terracotta",
    shortName: "Black Stained Terracotta",
  },
  { id: 27, name: "Sandstone", shortName: "Sandstone" },
  { id: 28, name: "Stone", shortName: "Stone" },
  { id: 29, name: "Rock (stone and cobblestone)", shortName: "Rock" },
  { id: 30, name: "Cobblestone", shortName: "Cobblestone" },
  { id: 31, name: "Mossy Cobblestone", shortName: "Mossy Cobblestone" },
  { id: 32, name: "Obsidian", shortName: "Obsidian" },
  { id: 33, name: "Bedrock", shortName: "Bedrock" },
  { id: 34, name: "Gravel", shortName: "Gravel" },
  { id: 35, name: "Clay", shortName: "Clay" },
  {
    id: 36,
    name: "Beaches (grass, sand, gravel and clay with sugar cane here and there, and seagrass and kelp under water)",
    shortName: "Beaches",
  },
  { id: 37, name: "Water", shortName: "Water" },
  { id: 38, name: "Lava", shortName: "Lava" },
  {
    id: 39,
    name: "Stone with Snow (deprecated; do not use)",
    shortName: "Stone with Snow",
  },
  { id: 40, name: "Deep Snow", shortName: "Deep Snow" },
  { id: 41, name: "Netherrack", shortName: "Netherrack" },
  { id: 42, name: "Soul Sand", shortName: "Soul Sand" },
  {
    id: 43,
    name: "Netherlike (netherrack with pockets of soul sand and glowstone and patches of fire)",
    shortName: "Netherlike",
  },
  { id: 44, name: "Mycelium", shortName: "Mycelium" },
  { id: 45, name: "End Stone", shortName: "End Stone" },
  {
    id: 46,
    name: "Resources (stone with pockets of ores, lava and water; deprecated; do not use)",
    shortName: "Resources",
  },
  { id: 47, name: "Custom Terrain Slot 1", shortName: "Custom Terrain Slot 1" },
  { id: 48, name: "Custom Terrain Slot 2", shortName: "Custom Terrain Slot 2" },
  { id: 49, name: "Custom Terrain Slot 3", shortName: "Custom Terrain Slot 3" },
  { id: 50, name: "Custom Terrain Slot 4", shortName: "Custom Terrain Slot 4" },
  { id: 51, name: "Custom Terrain Slot 5", shortName: "Custom Terrain Slot 5" },
  { id: 52, name: "Custom Terrain Slot 6", shortName: "Custom Terrain Slot 6" },
  { id: 53, name: "Custom Terrain Slot 7", shortName: "Custom Terrain Slot 7" },
  { id: 54, name: "Custom Terrain Slot 8", shortName: "Custom Terrain Slot 8" },
  { id: 55, name: "Custom Terrain Slot 9", shortName: "Custom Terrain Slot 9" },
  {
    id: 56,
    name: "Custom Terrain Slot 10",
    shortName: "Custom Terrain Slot 10",
  },
  {
    id: 57,
    name: "Custom Terrain Slot 11",
    shortName: "Custom Terrain Slot 11",
  },
  {
    id: 58,
    name: "Custom Terrain Slot 12",
    shortName: "Custom Terrain Slot 12",
  },
  {
    id: 59,
    name: "Custom Terrain Slot 13",
    shortName: "Custom Terrain Slot 13",
  },
  {
    id: 60,
    name: "Custom Terrain Slot 14",
    shortName: "Custom Terrain Slot 14",
  },
  {
    id: 61,
    name: "Custom Terrain Slot 15",
    shortName: "Custom Terrain Slot 15",
  },
  {
    id: 62,
    name: "Custom Terrain Slot 16",
    shortName: "Custom Terrain Slot 16",
  },
  {
    id: 63,
    name: "Custom Terrain Slot 17",
    shortName: "Custom Terrain Slot 17",
  },
  {
    id: 64,
    name: "Custom Terrain Slot 18",
    shortName: "Custom Terrain Slot 18",
  },
  {
    id: 65,
    name: "Custom Terrain Slot 19",
    shortName: "Custom Terrain Slot 19",
  },
  {
    id: 66,
    name: "Custom Terrain Slot 20",
    shortName: "Custom Terrain Slot 20",
  },
  {
    id: 67,
    name: "Custom Terrain Slot 21",
    shortName: "Custom Terrain Slot 21",
  },
  {
    id: 68,
    name: "Custom Terrain Slot 22",
    shortName: "Custom Terrain Slot 22",
  },
  {
    id: 69,
    name: "Custom Terrain Slot 23",
    shortName: "Custom Terrain Slot 23",
  },
  {
    id: 70,
    name: "Custom Terrain Slot 24",
    shortName: "Custom Terrain Slot 24",
  },
  { id: 71, name: "Red Sandstone", shortName: "Red Sandstone" },
  { id: 72, name: "Granite", shortName: "Granite" },
  { id: 73, name: "Diorite", shortName: "Diorite" },
  { id: 74, name: "Andesite", shortName: "Andesite" },
  {
    id: 75,
    name: "Stone Mix (stone or deepslate with patches of granite, diorite, andesite and tuff)",
    shortName: "Stone Mix",
  },
  {
    id: 76,
    name: "Custom Terrain Slot 25",
    shortName: "Custom Terrain Slot 25",
  },
  {
    id: 77,
    name: "Custom Terrain Slot 26",
    shortName: "Custom Terrain Slot 26",
  },
  {
    id: 78,
    name: "Custom Terrain Slot 27",
    shortName: "Custom Terrain Slot 27",
  },
  {
    id: 79,
    name: "Custom Terrain Slot 28",
    shortName: "Custom Terrain Slot 28",
  },
  {
    id: 80,
    name: "Custom Terrain Slot 29",
    shortName: "Custom Terrain Slot 29",
  },
  {
    id: 81,
    name: "Custom Terrain Slot 30",
    shortName: "Custom Terrain Slot 30",
  },
  {
    id: 82,
    name: "Custom Terrain Slot 31",
    shortName: "Custom Terrain Slot 31",
  },
  {
    id: 83,
    name: "Custom Terrain Slot 32",
    shortName: "Custom Terrain Slot 32",
  },
  {
    id: 84,
    name: "Custom Terrain Slot 33",
    shortName: "Custom Terrain Slot 33",
  },
  {
    id: 85,
    name: "Custom Terrain Slot 34",
    shortName: "Custom Terrain Slot 34",
  },
  {
    id: 86,
    name: "Custom Terrain Slot 35",
    shortName: "Custom Terrain Slot 35",
  },
  {
    id: 87,
    name: "Custom Terrain Slot 36",
    shortName: "Custom Terrain Slot 36",
  },
  {
    id: 88,
    name: "Custom Terrain Slot 37",
    shortName: "Custom Terrain Slot 37",
  },
  {
    id: 89,
    name: "Custom Terrain Slot 38",
    shortName: "Custom Terrain Slot 38",
  },
  {
    id: 90,
    name: "Custom Terrain Slot 39",
    shortName: "Custom Terrain Slot 39",
  },
  {
    id: 91,
    name: "Custom Terrain Slot 40",
    shortName: "Custom Terrain Slot 40",
  },
  {
    id: 92,
    name: "Custom Terrain Slot 41",
    shortName: "Custom Terrain Slot 41",
  },
  {
    id: 93,
    name: "Custom Terrain Slot 42",
    shortName: "Custom Terrain Slot 42",
  },
  {
    id: 94,
    name: "Custom Terrain Slot 43",
    shortName: "Custom Terrain Slot 43",
  },
  {
    id: 95,
    name: "Custom Terrain Slot 44",
    shortName: "Custom Terrain Slot 44",
  },
  {
    id: 96,
    name: "Custom Terrain Slot 45",
    shortName: "Custom Terrain Slot 45",
  },
  {
    id: 97,
    name: "Custom Terrain Slot 46",
    shortName: "Custom Terrain Slot 46",
  },
  {
    id: 98,
    name: "Custom Terrain Slot 47",
    shortName: "Custom Terrain Slot 47",
  },
  {
    id: 99,
    name: "Custom Terrain Slot 48",
    shortName: "Custom Terrain Slot 48",
  },
  { id: 100, name: "Dirt Path", shortName: "Dirt Path" },
  { id: 101, name: "Magma", shortName: "Magma" },
  {
    id: 102,
    name: "Custom Terrain Slot 49",
    shortName: "Custom Terrain Slot 49",
  },
  {
    id: 103,
    name: "Custom Terrain Slot 50",
    shortName: "Custom Terrain Slot 50",
  },
  {
    id: 104,
    name: "Custom Terrain Slot 51",
    shortName: "Custom Terrain Slot 51",
  },
  {
    id: 105,
    name: "Custom Terrain Slot 52",
    shortName: "Custom Terrain Slot 52",
  },
  {
    id: 106,
    name: "Custom Terrain Slot 53",
    shortName: "Custom Terrain Slot 53",
  },
  {
    id: 107,
    name: "Custom Terrain Slot 54",
    shortName: "Custom Terrain Slot 54",
  },
  {
    id: 108,
    name: "Custom Terrain Slot 55",
    shortName: "Custom Terrain Slot 55",
  },
  {
    id: 109,
    name: "Custom Terrain Slot 56",
    shortName: "Custom Terrain Slot 56",
  },
  {
    id: 110,
    name: "Custom Terrain Slot 57",
    shortName: "Custom Terrain Slot 57",
  },
  {
    id: 111,
    name: "Custom Terrain Slot 58",
    shortName: "Custom Terrain Slot 58",
  },
  {
    id: 112,
    name: "Custom Terrain Slot 59",
    shortName: "Custom Terrain Slot 59",
  },
  {
    id: 113,
    name: "Custom Terrain Slot 60",
    shortName: "Custom Terrain Slot 60",
  },
  {
    id: 114,
    name: "Custom Terrain Slot 61",
    shortName: "Custom Terrain Slot 61",
  },
  {
    id: 115,
    name: "Custom Terrain Slot 62",
    shortName: "Custom Terrain Slot 62",
  },
  {
    id: 116,
    name: "Custom Terrain Slot 63",
    shortName: "Custom Terrain Slot 63",
  },
  {
    id: 117,
    name: "Custom Terrain Slot 64",
    shortName: "Custom Terrain Slot 64",
  },
  {
    id: 118,
    name: "Custom Terrain Slot 65",
    shortName: "Custom Terrain Slot 65",
  },
  {
    id: 119,
    name: "Custom Terrain Slot 66",
    shortName: "Custom Terrain Slot 66",
  },
  {
    id: 120,
    name: "Custom Terrain Slot 67",
    shortName: "Custom Terrain Slot 67",
  },
  {
    id: 121,
    name: "Custom Terrain Slot 68",
    shortName: "Custom Terrain Slot 68",
  },
  {
    id: 122,
    name: "Custom Terrain Slot 69",
    shortName: "Custom Terrain Slot 69",
  },
  {
    id: 123,
    name: "Custom Terrain Slot 70",
    shortName: "Custom Terrain Slot 70",
  },
  {
    id: 124,
    name: "Custom Terrain Slot 71",
    shortName: "Custom Terrain Slot 71",
  },
  {
    id: 125,
    name: "Custom Terrain Slot 72",
    shortName: "Custom Terrain Slot 72",
  },
  {
    id: 126,
    name: "Custom Terrain Slot 73",
    shortName: "Custom Terrain Slot 73",
  },
  {
    id: 127,
    name: "Custom Terrain Slot 74",
    shortName: "Custom Terrain Slot 74",
  },
  {
    id: 128,
    name: "Custom Terrain Slot 75",
    shortName: "Custom Terrain Slot 75",
  },
  {
    id: 129,
    name: "Custom Terrain Slot 76",
    shortName: "Custom Terrain Slot 76",
  },
  {
    id: 130,
    name: "Custom Terrain Slot 77",
    shortName: "Custom Terrain Slot 77",
  },
  {
    id: 131,
    name: "Custom Terrain Slot 78",
    shortName: "Custom Terrain Slot 78",
  },
  {
    id: 132,
    name: "Custom Terrain Slot 79",
    shortName: "Custom Terrain Slot 79",
  },
  {
    id: 133,
    name: "Custom Terrain Slot 80",
    shortName: "Custom Terrain Slot 80",
  },
  {
    id: 134,
    name: "Custom Terrain Slot 81",
    shortName: "Custom Terrain Slot 81",
  },
  {
    id: 135,
    name: "Custom Terrain Slot 82",
    shortName: "Custom Terrain Slot 82",
  },
  {
    id: 136,
    name: "Custom Terrain Slot 83",
    shortName: "Custom Terrain Slot 83",
  },
  {
    id: 137,
    name: "Custom Terrain Slot 84",
    shortName: "Custom Terrain Slot 84",
  },
  {
    id: 138,
    name: "Custom Terrain Slot 85",
    shortName: "Custom Terrain Slot 85",
  },
  {
    id: 139,
    name: "Custom Terrain Slot 86",
    shortName: "Custom Terrain Slot 86",
  },
  {
    id: 140,
    name: "Custom Terrain Slot 87",
    shortName: "Custom Terrain Slot 87",
  },
  {
    id: 141,
    name: "Custom Terrain Slot 88",
    shortName: "Custom Terrain Slot 88",
  },
  {
    id: 142,
    name: "Custom Terrain Slot 89",
    shortName: "Custom Terrain Slot 89",
  },
  {
    id: 143,
    name: "Custom Terrain Slot 90",
    shortName: "Custom Terrain Slot 90",
  },
  {
    id: 144,
    name: "Custom Terrain Slot 91",
    shortName: "Custom Terrain Slot 91",
  },
  {
    id: 145,
    name: "Custom Terrain Slot 92",
    shortName: "Custom Terrain Slot 92",
  },
  {
    id: 146,
    name: "Custom Terrain Slot 93",
    shortName: "Custom Terrain Slot 93",
  },
  {
    id: 147,
    name: "Custom Terrain Slot 94",
    shortName: "Custom Terrain Slot 94",
  },
  {
    id: 148,
    name: "Custom Terrain Slot 95",
    shortName: "Custom Terrain Slot 95",
  },
  {
    id: 149,
    name: "Custom Terrain Slot 96",
    shortName: "Custom Terrain Slot 96",
  },
  { id: 150, name: "Deepslate", shortName: "Deepslate" },
  { id: 151, name: "Tuff", shortName: "Tuff" },
  { id: 152, name: "Basalt", shortName: "Basalt" },
  { id: 153, name: "Blackstone", shortName: "Blackstone" },
  { id: 154, name: "Soul Soil", shortName: "Soul Soil" },
  { id: 155, name: "Warped Nylium", shortName: "Warped Nylium" },
  { id: 156, name: "Crimson Nylium", shortName: "Crimson Nylium" },
  { id: 157, name: "Calcite", shortName: "Calcite" },
  { id: 158, name: "Mud", shortName: "Mud" },
  { id: 159, name: "Bare Beaches", shortName: "Bare Beaches" },
  { id: 160, name: "Moss", shortName: "Moss" },
];
export type WpTerrainType = { id: number; name: string; shortName: string };
export const sortTerrainAlphabetically = (list: WpTerrainType[]) => {
  return [...list].sort((a, b) => {
    return a.shortName.localeCompare(b.shortName);
  });
};

export const getTerrainById = (
  id: number,
  list: WpTerrainType[]
): WpTerrainType | undefined => {
  return list.find((terrain) => terrain.id === id);
};
export const terrainIdsToWeightedTerrains = (
  xs: number[]
): WeightedTerrainSetting[] => {
  //collect how often each id is in array
  const occurences: Map<number, number> = new Map<number, number>();
  xs.forEach((x) => {
    if (occurences.has(x)) occurences.set(x, occurences.get(x)! + 1);
    else occurences.set(x, 1);
  });

  const weighted: { id: number; weight: number }[] = [];
  occurences.forEach((weight, id) => {
    weighted.push({ id: id, weight: weight });
  });
  return weighted
    .map((x) => ({
      terrain: getTerrainById(x.id, wpTerrainTypes),
      weight: x.weight,
    }))
    .filter((x) => x.terrain !== undefined) as WeightedTerrainSetting[];
};
export const NoneTerrain: WpTerrainType = {
  id: -1,
  name: "None",
  shortName: "None",
};

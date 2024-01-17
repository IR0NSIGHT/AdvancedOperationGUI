import { WeightedTerrainSetting } from "./WeightedTerrainEditor";

export const wpTerrainTypes: WpTerrainType[] = [
  {
    id: 0,
    name: "Grass (grass with flowers, tall grass and ferns here and there, and seagrass and kelp under water)",
    shortName: "Grass",
    color: "64,101,47",
  },
  {
    id: 1,
    name: "Bare Grass (no vegetation)",
    shortName: "Bare Grass",
    color: "64,101,47",
  },
  {
    id: 2,
    name: "Dirt",
    shortName: "Dirt",
    color: "134,96,67",
  },
  {
    id: 3,
    name: "Coarse Dirt (dirt on which no grass will grow)",
    shortName: "Coarse Dirt",
    color: "134,96,67",
  },
  {
    id: 4,
    name: "Podzol",
    shortName: "Podzol",
    color: "90,63,28",
  },
  {
    id: 5,
    name: "Sand",
    shortName: "Sand",
    color: "219,211,160",
  },
  {
    id: 6,
    name: "Red Sand",
    shortName: "Red Sand",
    color: "169,88,33",
  },
  {
    id: 7,
    name: "Desert (dead shrubs and cacti)",
    shortName: "Desert",
    color: "219,211,160",
  },
  {
    id: 8,
    name: "Red Desert (dead shrubs and cacti)",
    shortName: "Red Desert",
    color: "169,88,33",
  },
  {
    id: 9,
    name: "Mesa (layers of hardened and stained clay)",
    shortName: "Mesa",
    color: "169,88,33",
  },
  {
    id: 10,
    name: "Terracotta",
    shortName: "Terracotta",
    color: "150,92,66",
  },
  {
    id: 11,
    name: "White Stained Terracotta",
    shortName: "White Stained Terracotta",
    color: "209,178,161",
  },
  {
    id: 12,
    name: "Orange Stained Terracotta",
    shortName: "Orange Stained Terracotta",
    color: "161,83,37",
  },
  {
    id: 13,
    name: "Magenta Stained Terracotta",
    shortName: "Magenta Stained Terracotta",
    color: "149,88,108",
  },
  {
    id: 14,
    name: "Light Blue Stained Terracotta",
    shortName: "Light Blue Stained Terracotta",
    color: "",
  },
  {
    id: 15,
    name: "Yellow Stained Terracotta",
    shortName: "Yellow Stained Terracotta",
    color: "",
  },
  {
    id: 16,
    name: "Lime Stained Terracotta",
    shortName: "Lime Stained Terracotta",
    color: "",
  },
  {
    id: 17,
    name: "Pink Stained Terracotta",
    shortName: "Pink Stained Terracotta",
    color: "",
  },
  {
    id: 18,
    name: "Grey Stained Terracotta",
    shortName: "Grey Stained Terracotta",
    color: "",
  },
  {
    id: 19,
    name: "Light Grey Stained Terracotta",
    shortName: "Light Grey Stained Terracotta",
    color: "",
  },
  {
    id: 20,
    name: "Cyan Stained Terracotta",
    shortName: "Cyan Stained Terracotta",
    color: "",
  },
  {
    id: 21,
    name: "Purple Stained Terracotta",
    shortName: "Purple Stained Terracotta",
    color: "",
  },
  {
    id: 22,
    name: "Blue Stained Terracotta",
    shortName: "Blue Stained Terracotta",
    color: "",
  },
  {
    id: 23,
    name: "Brown Stained Terracotta",
    shortName: "Brown Stained Terracotta",
    color: "",
  },
  {
    id: 24,
    name: "Green Stained Terracotta",
    shortName: "Green Stained Terracotta",
    color: "",
  },
  {
    id: 25,
    name: "Red Stained Terracotta",
    shortName: "Red Stained Terracotta",
    color: "",
  },
  {
    id: 26,
    name: "Black Stained Terracotta",
    shortName: "Black Stained Terracotta",
    color: "",
  },
  {
    id: 27,
    name: "Sandstone",
    shortName: "Sandstone",
    color: "",
  },
  {
    id: 28,
    name: "Stone",
    shortName: "Stone",
    color: "125,125,125",
  },
  {
    id: 29,
    name: "Rock (stone and cobblestone)",
    shortName: "Rock",
    color: "125,125,125",
  },
  {
    id: 30,
    name: "Cobblestone",
    shortName: "Cobblestone",
    color: "122,122,122",
  },
  {
    id: 31,
    name: "Mossy Cobblestone",
    shortName: "Mossy Cobblestone",
    color: "125,125,125",
  },
  {
    id: 32,
    name: "Obsidian",
    shortName: "Obsidian",
    color: "20,18,29",
  },
  {
    id: 33,
    name: "Bedrock",
    shortName: "Bedrock",
    color: "83,83,83",
  },
  {
    id: 34,
    name: "Gravel",
    shortName: "Gravel",
    color: "126,124,122",
  },
  {
    id: 35,
    name: "Clay",
    shortName: "Clay",
    color: "158,164,176",
  },
  {
    id: 36,
    name: "Beaches (grass, sand, gravel and clay with sugar cane here and there, and seagrass and kelp under water)",
    shortName: "Beaches",
    color: "",
  },
  {
    id: 37,
    name: "Water",
    shortName: "Water",
    color: "",
  },
  {
    id: 38,
    name: "Lava",
    shortName: "Lava",
    color: "",
  },
  {
    id: 39,
    name: "Stone with Snow (deprecated; do not use)",
    shortName: "Stone with Snow",
    color: "",
  },
  {
    id: 40,
    name: "Deep Snow",
    shortName: "Deep Snow",
    color: "",
  },
  {
    id: 41,
    name: "Netherrack",
    shortName: "Netherrack",
    color: "",
  },
  {
    id: 42,
    name: "Soul Sand",
    shortName: "Soul Sand",
    color: "",
  },
  {
    id: 43,
    name: "Netherlike (netherrack with pockets of soul sand and glowstone and patches of fire)",
    shortName: "Netherlike",
    color: "",
  },
  {
    id: 44,
    name: "Mycelium",
    shortName: "Mycelium",
    color: "",
  },
  {
    id: 45,
    name: "End Stone",
    shortName: "End Stone",
    color: "",
  },
  {
    id: 46,
    name: "Resources (stone with pockets of ores, lava and water; deprecated; do not use)",
    shortName: "Resources",
    color: "",
  },
  {
    id: 47,
    name: "Custom Terrain Slot 1",
    shortName: "Custom Terrain Slot 1",
    color: "",
  },
  {
    id: 48,
    name: "Custom Terrain Slot 2",
    shortName: "Custom Terrain Slot 2",
    color: "",
  },
  {
    id: 49,
    name: "Custom Terrain Slot 3",
    shortName: "Custom Terrain Slot 3",
    color: "",
  },
  {
    id: 50,
    name: "Custom Terrain Slot 4",
    shortName: "Custom Terrain Slot 4",
    color: "",
  },
  {
    id: 51,
    name: "Custom Terrain Slot 5",
    shortName: "Custom Terrain Slot 5",
    color: "",
  },
  {
    id: 52,
    name: "Custom Terrain Slot 6",
    shortName: "Custom Terrain Slot 6",
    color: "",
  },
  {
    id: 53,
    name: "Custom Terrain Slot 7",
    shortName: "Custom Terrain Slot 7",
    color: "",
  },
  {
    id: 54,
    name: "Custom Terrain Slot 8",
    shortName: "Custom Terrain Slot 8",
    color: "",
  },
  {
    id: 55,
    name: "Custom Terrain Slot 9",
    shortName: "Custom Terrain Slot 9",
    color: "",
  },
  {
    id: 56,
    name: "Custom Terrain Slot 10",
    shortName: "Custom Terrain Slot 10",
    color: "",
  },
  {
    id: 57,
    name: "Custom Terrain Slot 11",
    shortName: "Custom Terrain Slot 11",
    color: "",
  },
  {
    id: 58,
    name: "Custom Terrain Slot 12",
    shortName: "Custom Terrain Slot 12",
    color: "",
  },
  {
    id: 59,
    name: "Custom Terrain Slot 13",
    shortName: "Custom Terrain Slot 13",
    color: "",
  },
  {
    id: 60,
    name: "Custom Terrain Slot 14",
    shortName: "Custom Terrain Slot 14",
    color: "",
  },
  {
    id: 61,
    name: "Custom Terrain Slot 15",
    shortName: "Custom Terrain Slot 15",
    color: "",
  },
  {
    id: 62,
    name: "Custom Terrain Slot 16",
    shortName: "Custom Terrain Slot 16",
    color: "",
  },
  {
    id: 63,
    name: "Custom Terrain Slot 17",
    shortName: "Custom Terrain Slot 17",
    color: "",
  },
  {
    id: 64,
    name: "Custom Terrain Slot 18",
    shortName: "Custom Terrain Slot 18",
    color: "",
  },
  {
    id: 65,
    name: "Custom Terrain Slot 19",
    shortName: "Custom Terrain Slot 19",
    color: "",
  },
  {
    id: 66,
    name: "Custom Terrain Slot 20",
    shortName: "Custom Terrain Slot 20",
    color: "",
  },
  {
    id: 67,
    name: "Custom Terrain Slot 21",
    shortName: "Custom Terrain Slot 21",
    color: "",
  },
  {
    id: 68,
    name: "Custom Terrain Slot 22",
    shortName: "Custom Terrain Slot 22",
    color: "",
  },
  {
    id: 69,
    name: "Custom Terrain Slot 23",
    shortName: "Custom Terrain Slot 23",
    color: "",
  },
  {
    id: 70,
    name: "Custom Terrain Slot 24",
    shortName: "Custom Terrain Slot 24",
    color: "",
  },
  {
    id: 71,
    name: "Red Sandstone",
    shortName: "Red Sandstone",
    color: "",
  },
  {
    id: 72,
    name: "Granite",
    shortName: "Granite",
    color: "",
  },
  {
    id: 73,
    name: "Diorite",
    shortName: "Diorite",
    color: "",
  },
  {
    id: 74,
    name: "Andesite",
    shortName: "Andesite",
    color: "",
  },
  {
    id: 75,
    name: "Stone Mix (stone or deepslate with patches of granite, diorite, andesite and tuff)",
    shortName: "Stone Mix",
    color: "",
  },
  {
    id: 76,
    name: "Custom Terrain Slot 25",
    shortName: "Custom Terrain Slot 25",
    color: "",
  },
  {
    id: 77,
    name: "Custom Terrain Slot 26",
    shortName: "Custom Terrain Slot 26",
    color: "",
  },
  {
    id: 78,
    name: "Custom Terrain Slot 27",
    shortName: "Custom Terrain Slot 27",
    color: "",
  },
  {
    id: 79,
    name: "Custom Terrain Slot 28",
    shortName: "Custom Terrain Slot 28",
    color: "",
  },
  {
    id: 80,
    name: "Custom Terrain Slot 29",
    shortName: "Custom Terrain Slot 29",
    color: "",
  },
  {
    id: 81,
    name: "Custom Terrain Slot 30",
    shortName: "Custom Terrain Slot 30",
    color: "",
  },
  {
    id: 82,
    name: "Custom Terrain Slot 31",
    shortName: "Custom Terrain Slot 31",
    color: "",
  },
  {
    id: 83,
    name: "Custom Terrain Slot 32",
    shortName: "Custom Terrain Slot 32",
    color: "",
  },
  {
    id: 84,
    name: "Custom Terrain Slot 33",
    shortName: "Custom Terrain Slot 33",
    color: "",
  },
  {
    id: 85,
    name: "Custom Terrain Slot 34",
    shortName: "Custom Terrain Slot 34",
    color: "",
  },
  {
    id: 86,
    name: "Custom Terrain Slot 35",
    shortName: "Custom Terrain Slot 35",
    color: "",
  },
  {
    id: 87,
    name: "Custom Terrain Slot 36",
    shortName: "Custom Terrain Slot 36",
    color: "",
  },
  {
    id: 88,
    name: "Custom Terrain Slot 37",
    shortName: "Custom Terrain Slot 37",
    color: "",
  },
  {
    id: 89,
    name: "Custom Terrain Slot 38",
    shortName: "Custom Terrain Slot 38",
    color: "",
  },
  {
    id: 90,
    name: "Custom Terrain Slot 39",
    shortName: "Custom Terrain Slot 39",
    color: "",
  },
  {
    id: 91,
    name: "Custom Terrain Slot 40",
    shortName: "Custom Terrain Slot 40",
    color: "",
  },
  {
    id: 92,
    name: "Custom Terrain Slot 41",
    shortName: "Custom Terrain Slot 41",
    color: "",
  },
  {
    id: 93,
    name: "Custom Terrain Slot 42",
    shortName: "Custom Terrain Slot 42",
    color: "",
  },
  {
    id: 94,
    name: "Custom Terrain Slot 43",
    shortName: "Custom Terrain Slot 43",
    color: "",
  },
  {
    id: 95,
    name: "Custom Terrain Slot 44",
    shortName: "Custom Terrain Slot 44",
    color: "",
  },
  {
    id: 96,
    name: "Custom Terrain Slot 45",
    shortName: "Custom Terrain Slot 45",
    color: "",
  },
  {
    id: 97,
    name: "Custom Terrain Slot 46",
    shortName: "Custom Terrain Slot 46",
    color: "",
  },
  {
    id: 98,
    name: "Custom Terrain Slot 47",
    shortName: "Custom Terrain Slot 47",
    color: "",
  },
  {
    id: 99,
    name: "Custom Terrain Slot 48",
    shortName: "Custom Terrain Slot 48",
    color: "",
  },
  {
    id: 100,
    name: "Dirt Path",
    shortName: "Dirt Path",
    color: "",
  },
  {
    id: 101,
    name: "Magma",
    shortName: "Magma",
    color: "",
  },
  {
    id: 102,
    name: "Custom Terrain Slot 49",
    shortName: "Custom Terrain Slot 49",
    color: "",
  },
  {
    id: 103,
    name: "Custom Terrain Slot 50",
    shortName: "Custom Terrain Slot 50",
    color: "",
  },
  {
    id: 104,
    name: "Custom Terrain Slot 51",
    shortName: "Custom Terrain Slot 51",
    color: "",
  },
  {
    id: 105,
    name: "Custom Terrain Slot 52",
    shortName: "Custom Terrain Slot 52",
    color: "",
  },
  {
    id: 106,
    name: "Custom Terrain Slot 53",
    shortName: "Custom Terrain Slot 53",
    color: "",
  },
  {
    id: 107,
    name: "Custom Terrain Slot 54",
    shortName: "Custom Terrain Slot 54",
    color: "",
  },
  {
    id: 108,
    name: "Custom Terrain Slot 55",
    shortName: "Custom Terrain Slot 55",
    color: "",
  },
  {
    id: 109,
    name: "Custom Terrain Slot 56",
    shortName: "Custom Terrain Slot 56",
    color: "",
  },
  {
    id: 110,
    name: "Custom Terrain Slot 57",
    shortName: "Custom Terrain Slot 57",
    color: "",
  },
  {
    id: 111,
    name: "Custom Terrain Slot 58",
    shortName: "Custom Terrain Slot 58",
    color: "",
  },
  {
    id: 112,
    name: "Custom Terrain Slot 59",
    shortName: "Custom Terrain Slot 59",
    color: "",
  },
  {
    id: 113,
    name: "Custom Terrain Slot 60",
    shortName: "Custom Terrain Slot 60",
    color: "",
  },
  {
    id: 114,
    name: "Custom Terrain Slot 61",
    shortName: "Custom Terrain Slot 61",
    color: "",
  },
  {
    id: 115,
    name: "Custom Terrain Slot 62",
    shortName: "Custom Terrain Slot 62",
    color: "",
  },
  {
    id: 116,
    name: "Custom Terrain Slot 63",
    shortName: "Custom Terrain Slot 63",
    color: "",
  },
  {
    id: 117,
    name: "Custom Terrain Slot 64",
    shortName: "Custom Terrain Slot 64",
    color: "",
  },
  {
    id: 118,
    name: "Custom Terrain Slot 65",
    shortName: "Custom Terrain Slot 65",
    color: "",
  },
  {
    id: 119,
    name: "Custom Terrain Slot 66",
    shortName: "Custom Terrain Slot 66",
    color: "",
  },
  {
    id: 120,
    name: "Custom Terrain Slot 67",
    shortName: "Custom Terrain Slot 67",
    color: "",
  },
  {
    id: 121,
    name: "Custom Terrain Slot 68",
    shortName: "Custom Terrain Slot 68",
    color: "",
  },
  {
    id: 122,
    name: "Custom Terrain Slot 69",
    shortName: "Custom Terrain Slot 69",
    color: "",
  },
  {
    id: 123,
    name: "Custom Terrain Slot 70",
    shortName: "Custom Terrain Slot 70",
    color: "",
  },
  {
    id: 124,
    name: "Custom Terrain Slot 71",
    shortName: "Custom Terrain Slot 71",
    color: "",
  },
  {
    id: 125,
    name: "Custom Terrain Slot 72",
    shortName: "Custom Terrain Slot 72",
    color: "",
  },
  {
    id: 126,
    name: "Custom Terrain Slot 73",
    shortName: "Custom Terrain Slot 73",
    color: "",
  },
  {
    id: 127,
    name: "Custom Terrain Slot 74",
    shortName: "Custom Terrain Slot 74",
    color: "",
  },
  {
    id: 128,
    name: "Custom Terrain Slot 75",
    shortName: "Custom Terrain Slot 75",
    color: "",
  },
  {
    id: 129,
    name: "Custom Terrain Slot 76",
    shortName: "Custom Terrain Slot 76",
    color: "",
  },
  {
    id: 130,
    name: "Custom Terrain Slot 77",
    shortName: "Custom Terrain Slot 77",
    color: "",
  },
  {
    id: 131,
    name: "Custom Terrain Slot 78",
    shortName: "Custom Terrain Slot 78",
    color: "",
  },
  {
    id: 132,
    name: "Custom Terrain Slot 79",
    shortName: "Custom Terrain Slot 79",
    color: "",
  },
  {
    id: 133,
    name: "Custom Terrain Slot 80",
    shortName: "Custom Terrain Slot 80",
    color: "",
  },
  {
    id: 134,
    name: "Custom Terrain Slot 81",
    shortName: "Custom Terrain Slot 81",
    color: "",
  },
  {
    id: 135,
    name: "Custom Terrain Slot 82",
    shortName: "Custom Terrain Slot 82",
    color: "",
  },
  {
    id: 136,
    name: "Custom Terrain Slot 83",
    shortName: "Custom Terrain Slot 83",
    color: "",
  },
  {
    id: 137,
    name: "Custom Terrain Slot 84",
    shortName: "Custom Terrain Slot 84",
    color: "",
  },
  {
    id: 138,
    name: "Custom Terrain Slot 85",
    shortName: "Custom Terrain Slot 85",
    color: "",
  },
  {
    id: 139,
    name: "Custom Terrain Slot 86",
    shortName: "Custom Terrain Slot 86",
    color: "",
  },
  {
    id: 140,
    name: "Custom Terrain Slot 87",
    shortName: "Custom Terrain Slot 87",
    color: "",
  },
  {
    id: 141,
    name: "Custom Terrain Slot 88",
    shortName: "Custom Terrain Slot 88",
    color: "",
  },
  {
    id: 142,
    name: "Custom Terrain Slot 89",
    shortName: "Custom Terrain Slot 89",
    color: "",
  },
  {
    id: 143,
    name: "Custom Terrain Slot 90",
    shortName: "Custom Terrain Slot 90",
    color: "",
  },
  {
    id: 144,
    name: "Custom Terrain Slot 91",
    shortName: "Custom Terrain Slot 91",
    color: "",
  },
  {
    id: 145,
    name: "Custom Terrain Slot 92",
    shortName: "Custom Terrain Slot 92",
    color: "",
  },
  {
    id: 146,
    name: "Custom Terrain Slot 93",
    shortName: "Custom Terrain Slot 93",
    color: "",
  },
  {
    id: 147,
    name: "Custom Terrain Slot 94",
    shortName: "Custom Terrain Slot 94",
    color: "",
  },
  {
    id: 148,
    name: "Custom Terrain Slot 95",
    shortName: "Custom Terrain Slot 95",
    color: "",
  },
  {
    id: 149,
    name: "Custom Terrain Slot 96",
    shortName: "Custom Terrain Slot 96",
    color: "",
  },
  {
    id: 150,
    name: "Deepslate",
    shortName: "Deepslate",
    color: "",
  },
  {
    id: 151,
    name: "Tuff",
    shortName: "Tuff",
    color: "",
  },
  {
    id: 152,
    name: "Basalt",
    shortName: "Basalt",
    color: "",
  },
  {
    id: 153,
    name: "Blackstone",
    shortName: "Blackstone",
    color: "",
  },
  {
    id: 154,
    name: "Soul Soil",
    shortName: "Soul Soil",
    color: "",
  },
  {
    id: 155,
    name: "Warped Nylium",
    shortName: "Warped Nylium",
    color: "",
  },
  {
    id: 156,
    name: "Crimson Nylium",
    shortName: "Crimson Nylium",
    color: "",
  },
  {
    id: 157,
    name: "Calcite",
    shortName: "Calcite",
    color: "",
  },
  {
    id: 158,
    name: "Mud",
    shortName: "Mud",
    color: "",
  },
  {
    id: 159,
    name: "Bare Beaches",
    shortName: "Bare Beaches",
    color: "",
  },
  {
    id: 160,
    name: "Moss",
    shortName: "Moss",
    color: "",
  },
];

export const absentTerrain: WpTerrainType = {
  id: -1,
  name: "Absent Terrain: Ignore on application",
  shortName: "Absent",
};

export type WpTerrainType = {
  id: number;
  name: string;
  shortName: string;
  color?: string;
};
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
  id: -127,
  name: "None",
  shortName: "None",
};

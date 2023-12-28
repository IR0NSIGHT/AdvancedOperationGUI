import { terrainIdsToWeightedTerrains } from "./WpTerrainTypes";

describe("parse terrain id number array", () => {
  test("parse multiple occurences of terrain into correct weighted", () => {
    const terrainRaw = [1, 1, 1, 1, 5, 6, 7, 5, 1, 1];
    const weighted = terrainIdsToWeightedTerrains(terrainRaw);
    expect(
      weighted
        .map((wt) => ({ id: wt.terrain.id, weight: wt.weight }))
        .sort((a, b) => a.id - b.id)
    ).toEqual([
      { id: 1, weight: 6 },
      { id: 5, weight: 2 },
      { id: 6, weight: 1 },
      {
        id: 7,
        weight: 1,
      },
    ]);
  });
});

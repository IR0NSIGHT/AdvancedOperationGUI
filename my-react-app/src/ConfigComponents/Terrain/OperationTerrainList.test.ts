import { updateTerrainList } from "./OperationTerrainList";
import { WeightedTerrainSetting } from "./WeightedTerrainEditor";

describe("mutating terrain list", () => {
  const grass = { id: 0, name: "grass", shortName: "grass" };
  const stone = { id: 1, name: "stone", shortName: "stone" };
  const sand = { id: 2, name: "sand", shortName: "sand" };

  test("add new value to empty list", () => {
    const terrains: WeightedTerrainSetting[] = [];
    const updated = updateTerrainList(
      null,
      {
        weight: 1,
        terrain: { id: 0, name: "grass", shortName: "grass" },
      },
      terrains
    );
    expect(updated).toEqual([
      { weight: 1, terrain: { id: 0, name: "grass", shortName: "grass" } },
    ]);
  });

  test("delete value from simple list", () => {
    const terrains: WeightedTerrainSetting[] = [
      { weight: 1, terrain: { id: 0, name: "grass", shortName: "grass" } },
    ];
    const updated = updateTerrainList(
      {
        weight: 1,
        terrain: { id: 0, name: "grass", shortName: "grass" },
      },
      null,
      terrains
    );
    expect(updated).toEqual([]);
  });

  test("does not add doubles", () => {
    const terrains: WeightedTerrainSetting[] = [
      { weight: 1, terrain: { id: 0, name: "grass", shortName: "grass" } },
    ];
    const updated = updateTerrainList(
      null,
      {
        weight: 1,
        terrain: { id: 0, name: "grass", shortName: "grass" },
      },
      terrains
    );
    expect(updated).toEqual(terrains);
  });
  test("deletes existing when match on old or new doubles", () => {
    const terrains: WeightedTerrainSetting[] = [
      { weight: 1, terrain: { id: 0, name: "grass", shortName: "grass" } },
      { weight: 1, terrain: { id: 0, name: "grass", shortName: "grass" } },
      { weight: 1, terrain: { id: 0, name: "grass", shortName: "grass" } },
    ];
    const updated = updateTerrainList(
      null,
      {
        weight: 1,
        terrain: { id: 0, name: "grass", shortName: "grass" },
      },
      terrains
    );
    expect(updated).toEqual([
      { weight: 1, terrain: { id: 0, name: "grass", shortName: "grass" } },
    ]);
  });

  test("mutate setting: terrain type from grass to stone", () => {
    const terrains: WeightedTerrainSetting[] = [
      { weight: 1, terrain: grass },
      { weight: 2, terrain: stone },
      { weight: 3, terrain: sand },
    ];

    const updated = updateTerrainList(
      {
        weight: 1,
        terrain: grass,
      },
      {
        weight: 1,
        terrain: stone,
      },
      terrains
    );
    expect(updated).toEqual([
      { weight: 1, terrain: stone },
      { weight: 3, terrain: sand },
    ]);
  });
});

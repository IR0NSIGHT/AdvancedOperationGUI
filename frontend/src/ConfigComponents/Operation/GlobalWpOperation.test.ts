import { applyLayerChange, WpLayerSetting } from "../Layer/WpLayerSetting";

describe("changeWriteLayer function", () => {
  it("add new layer", () => {
    const layers: WpLayerSetting[] = [
      ["Frost", 1],
      ["Pines", 3],
    ];
    const writeLayer: WpLayerSetting = ["Deciduous", 4]; // New layer to replace 'Deciduous' in the operation
    const updatedOp = applyLayerChange(layers, null, writeLayer);

    expect(updatedOp).toEqual([
      ["Deciduous", 4],
      ["Frost", 1],
      ["Pines", 3],
    ]);
  });

  it("mutate existing layer value", () => {
    const layers: WpLayerSetting[] = [
      ["Frost", 1],
      ["Pines", 3],
    ];
    expect(layers).toEqual([
      ["Frost", 1],
      ["Pines", 3],
    ]);

    const writeLayer: WpLayerSetting = ["Pines", 12]; // A layer that doesn't exist in the initial operation
    const updatedOp = applyLayerChange(layers, ["Pines", 3], writeLayer);

    expect(updatedOp).toEqual([
      ["Frost", 1],
      ["Pines", 12],
    ]);
  });

  it("remove existing layer", () => {
    const layers: WpLayerSetting[] = [
      ["Frost", 1],
      ["Pines", 3],
    ];

    expect(layers).toEqual([
      ["Frost", 1],
      ["Pines", 3],
    ]);

    const writeLayer: WpLayerSetting | null = null; // A layer that doesn't exist in the initial operation
    const updatedOp = applyLayerChange(layers, ["Pines", 3], writeLayer);

    expect(updatedOp).toEqual([["Frost", 1]]);
  });

  it("mutate layer name pines => annotations", () => {
    const layers: WpLayerSetting[] = [["Pines", 7]];

    expect(layers).toEqual([["Pines", 7]]);

    const writeLayer: WpLayerSetting = ["Annotations", 7];
    const updatedOp = applyLayerChange(layers!, ["Pines", 7], writeLayer);

    expect(updatedOp).toEqual([["Annotations", 7]]);
  });

  it("does not allow double entries", () => {
    const layers: WpLayerSetting[] = [
      ["Pines", 7],
      ["Annotations", 12],
    ];
    const updatedOp = applyLayerChange(
      layers!,
      ["Pines", 7],
      ["Annotations", 7]
    );

    expect(updatedOp).toEqual([["Annotations", 7]]);
  });

  it("overwrites old and new layer matches", () => {
    const layers: WpLayerSetting[] = [
      ["Pines", 7],
      ["Pines", 2],
      ["Annotations", 12],
      ["Annotations", 2],
      ["Burgers", 3],
    ];
    const updatedOp = applyLayerChange(
      layers,
      ["Pines", 7],
      ["Annotations", 7]
    );

    expect(updatedOp).toEqual([
      ["Annotations", 7],
      ["Burgers", 3],
    ]);
  });
});

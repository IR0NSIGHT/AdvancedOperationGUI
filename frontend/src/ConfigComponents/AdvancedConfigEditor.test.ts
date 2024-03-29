import { ArrayMutationAction } from "./RawConfig";
import {
  DisplayOperation,
  newEmptyDisplayOperation,
  updateOperationArray,
} from "./Operation/DisplayOperation";

describe("mutate list of operations", () => {
  test("can insert new operation", () => {
    const ops: DisplayOperation[] = [
      { ...newEmptyDisplayOperation(), name: "Operation A", displayId: 7 },
      { ...newEmptyDisplayOperation(), name: "Operation A", displayId: 3 },
      { ...newEmptyDisplayOperation(), name: "Operation A", displayId: 5 },
    ];
    const updatedOps = updateOperationArray(
      {
        ...newEmptyDisplayOperation(),
        name: "Operation A",
        displayId: 12345, //will be overwritten
      },
      ArrayMutationAction.INSERT,
      ops
    );
    expect(updatedOps).toEqual([
      { ...newEmptyDisplayOperation(), name: "Operation A", displayId: 7 },
      { ...newEmptyDisplayOperation(), name: "Operation A", displayId: 3 },
      { ...newEmptyDisplayOperation(), name: "Operation A", displayId: 5 },
      { ...newEmptyDisplayOperation(), name: "Operation A", displayId: 8 },
    ]);
  });

  test("can delete operation", () => {
    const ops: DisplayOperation[] = [
      { ...newEmptyDisplayOperation(), name: "Operation A", displayId: 0 },
      { ...newEmptyDisplayOperation(), name: "Operation A", displayId: 1 },
      { ...newEmptyDisplayOperation(), name: "Operation A", displayId: 2 },
    ];
    const updatedOps = updateOperationArray(
      {
        ...newEmptyDisplayOperation(),
        displayId: 1,
      },
      ArrayMutationAction.DELETE,
      ops
    );
    expect(updatedOps).toEqual([
      { ...newEmptyDisplayOperation(), name: "Operation A", displayId: 0 },
      { ...newEmptyDisplayOperation(), name: "Operation A", displayId: 2 },
    ]);
  });

  test("can mutate existing", () => {
    const ops: DisplayOperation[] = [
      { ...newEmptyDisplayOperation(), name: "Operation A", displayId: 7 },
      { ...newEmptyDisplayOperation(), name: "Operation A", displayId: 1 },
      { ...newEmptyDisplayOperation(), name: "Operation A", displayId: 5 },
    ];
    const updatedOps = updateOperationArray(
      {
        ...newEmptyDisplayOperation(),
        name: "MUTATED",
        layer: [["Annotations", 8]],
        displayId: 1,
      },
      ArrayMutationAction.OVERWRITE,
      ops
    );
    expect(updatedOps).toEqual([
      { ...newEmptyDisplayOperation(), name: "Operation A", displayId: 7 },
      {
        ...newEmptyDisplayOperation(),
        name: "MUTATED",
        layer: [["Annotations", 8]],
        displayId: 1,
      },
      { ...newEmptyDisplayOperation(), name: "Operation A", displayId: 5 },
    ]);
  });
});

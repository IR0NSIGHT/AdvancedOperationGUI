import {DisplayOperation, emptyDisplayOperation, updateOperationArray} from "./Operation/DisplayOperation";
import {ArrayMutationAction} from "./RawConfig";

describe("mutate list of operations", () => {
    test("can insert new operation", () => {
        const ops: DisplayOperation[] = [
            {...emptyDisplayOperation, name: "Operation A", displayId: 7},
            {...emptyDisplayOperation, name: "Operation A", displayId: 3},
            {...emptyDisplayOperation, name: "Operation A", displayId: 5}
        ]
        const updatedOps = updateOperationArray({
            ...emptyDisplayOperation,
            name: "Operation A",
            displayId: 12345 //will be overwritten
        }, ArrayMutationAction.INSERT, ops)
        expect(updatedOps).toEqual(
            [
                {...emptyDisplayOperation, name: "Operation A", displayId: 7},
                {...emptyDisplayOperation, name: "Operation A", displayId: 3},
                {...emptyDisplayOperation, name: "Operation A", displayId: 5},
                {...emptyDisplayOperation, name: "Operation A", displayId: 8}
            ]
        )
    })

    test("can delete operation", () => {
        const ops: DisplayOperation[] = [
            {...emptyDisplayOperation, name: "Operation A", displayId: 0},
            {...emptyDisplayOperation, name: "Operation A", displayId: 1},
            {...emptyDisplayOperation, name: "Operation A", displayId: 2}
        ]
        const updatedOps = updateOperationArray({
            ...emptyDisplayOperation,
            displayId: 1
        }, ArrayMutationAction.DELETE, ops)
        expect(updatedOps).toEqual(
            [
                {...emptyDisplayOperation, name: "Operation A", displayId: 0},
                {...emptyDisplayOperation, name: "Operation A", displayId: 2},
            ]
        )
    })

    test("can mutate existing ", () => {
        const ops: DisplayOperation[] = [
            {...emptyDisplayOperation, name: "Operation A", displayId: 7},
            {...emptyDisplayOperation, name: "Operation A", displayId: 1},
            {...emptyDisplayOperation, name: "Operation A", displayId: 5}
        ]
        const updatedOps = updateOperationArray({
            ...emptyDisplayOperation,
            name: "MUTATED",
            layer: [["Annotation", 8]],
            displayId: 1
        }, ArrayMutationAction.OVERWRITE, ops)
        expect(updatedOps).toEqual(
            [
                {...emptyDisplayOperation, name: "Operation A", displayId: 7},
                {
                    ...emptyDisplayOperation,
                    name: "MUTATED",
                    layer: [["Annotation", 8]],
                    displayId: 1
                },
                {...emptyDisplayOperation, name: "Operation A", displayId: 5},
            ]
        )
    })
})
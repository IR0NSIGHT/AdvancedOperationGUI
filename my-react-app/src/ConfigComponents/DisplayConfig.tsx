import {DisplayOperation} from "./Operation/DisplayOperation";

export type DisplayConfig = {
    operations: DisplayOperation[]
    author: string,
    name: string,
    description: string,
    date: string
}

const EmptyConfig = {
    operations: [],
    author: "",
    name: "",
    description: "",
    date: ""
}

export const newEmptyConfig = () => {
    return {...EmptyConfig}
}
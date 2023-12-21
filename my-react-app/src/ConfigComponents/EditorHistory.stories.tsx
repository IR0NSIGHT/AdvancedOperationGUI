import {HistoryNavigator, HistoryNavigatorProps} from "./EditorHistory";
import {Story} from "@storybook/react";

export default {
    title: "Components/EditorHistory",
    component: HistoryNavigator,
};

const Template: Story<HistoryNavigatorProps> = (args) => (
    <HistoryNavigator {...args} />
);

export const Default = Template.bind({});
Default.args = {
    maxHistories : 10,
    initialConfig: {
        author: "IR0NSIGHT",
        name: "my debug config",
        date: "a date",
        operations: [],
        description: "hello world"
    }
};

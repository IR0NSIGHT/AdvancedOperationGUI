import { HistoryNavigator, HistoryNavigatorProps } from "./EditorHistory";
import { Story } from "@storybook/react";
import { newEmptyDisplayOperation } from "./Operation/DisplayOperation";

export default {
  title: "Components/EditorHistory",
  component: HistoryNavigator,
};

const Template: Story<HistoryNavigatorProps> = (args) => (
  <HistoryNavigator {...args} />
);

export const Default = Template.bind({});
Default.args = {
  maxHistories: 10,
  initialHistory: [
    {
      author: "IR0NSIGHT",
      name: "my debug config",
      date: "a date",
      operations: [],
      description: "hello world",
    },
    {
      author: "IR0NSIGHT",
      name: "my debug config",
      date: "a date",
      operations: [
        { ...newEmptyDisplayOperation(), name: "My first operation" },
      ],
      description: "hello world",
    },
    {
      author: "IR0NSIGHT",
      name: "my debug config",
      date: "a date",
      operations: [
        { ...newEmptyDisplayOperation(), name: "My first operation" },
        { ...newEmptyDisplayOperation(), name: "My seconds operation" },
      ],
      description: "hello world",
    },
  ],
};

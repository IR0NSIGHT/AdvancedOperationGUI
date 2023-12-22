import React from "react";
import { Story } from "@storybook/react";
import { AdvancedConfigEditor } from "./AdvancedConfigEditor";
import { advancedConfigEditorStories, IcyPinesConfig } from "./RawConfig";

export default {
  title: "Components/AdvancedConfigEditor",
  component: AdvancedConfigEditor,
};

const Template: Story = () => (
  <AdvancedConfigEditor
    initialConfig={advancedConfigEditorStories(IcyPinesConfig)}
  />
);

export const Default = Template.bind({});

import React, { useState } from "react";
import { Story } from "@storybook/react";
import LayerSettingMenu, { LayerSettingMenuProps } from "./LayerSettingMenu";
import { WpLayerSetting } from "./WpLayerSetting";

export default {
  title: "Components/LayerSettingMenu",
  component: LayerSettingMenu,
};

const Template: Story<LayerSettingMenuProps> = (args) => {
  const [setting, setSetting] = useState<WpLayerSetting>(args.layerSetting);

  const onUpdateSetting = (
    oldSetting: WpLayerSetting,
    newSetting: WpLayerSetting
  ) => {
    setSetting(newSetting);
    console.log(oldSetting, newSetting);
  };

  return (
    <div>
      <LayerSettingMenu
        {...args}
        layerSetting={setting}
        onUpdateSetting={onUpdateSetting}
      />
      <pre>{JSON.stringify(setting, null, 3)}</pre>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  layerSetting: ["Frost", 1],
};

import React, {useState} from 'react';
import {Story} from '@storybook/react';
import LayerSettingMenu, {LayerSettingMenuProps} from "ConfigComponents/LayerSettingMenu";
import {WpLayerSetting} from "ConfigComponents/Operation/WpLayerSetting";

export default {
    title: 'Components/LayerSettingMenu',
    component: LayerSettingMenu,
};

const Template: Story<LayerSettingMenuProps> = (args) => {
    const [setting, setSetting] = useState<WpLayerSetting>(args.layerSetting);

    const onUpdateSetting = (newSetting: WpLayerSetting) => {
        setSetting(newSetting);
        console.log(newSetting);
    };

    return <div>
        <LayerSettingMenu {...args} layerSetting={setting} onUpdateSetting={onUpdateSetting}/>
        <pre>{JSON.stringify(setting,null,3)}</pre>
    </div>;
};

export const Default = Template.bind({});
Default.args = {
    layerSetting: ["Frost", 1],
};
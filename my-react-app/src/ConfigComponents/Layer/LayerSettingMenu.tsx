import React from "react";
import LayerSelector from "./LayerSelector";
import {DefaultLayers, WpLayerSetting} from "./WpLayerSetting";
import {DefaultLayerValues, NamedNumericValue, NamedValueSelector} from "./NamedValueSelector";
import {DeleteButton} from "../DeleteButton";

export type LayerSettingMenuProps = {
    layerSetting: WpLayerSetting;
    onUpdateSetting: (
        oldSetting: WpLayerSetting | null,
        newSetting: WpLayerSetting | null
    ) => void;
};

const annotationValues: NamedNumericValue[] = [
    {value: -1, name: "Present"},
    {value: 0, name: "Absent"},
    {value: 1, name: "White"},
    {value: 2, name: "Orange"},
    {value: 3, name: "Magenta"},
    {value: 4, name: "Light Blue"},
    {value: 5, name: "Yellow"},
    {value: 6, name: "Lime"},
    {value: 7, name: "Pink"},
    {value: 8, name: "Light Grey"},
    {value: 9, name: "Cyan"},
    {value: 10, name: "Purple"},
    {value: 11, name: "Blue"},
    {value: 12, name: "Brown"},
    {value: 13, name: "Green"},
    {value: 14, name: "Red"},
    {value: 15, name: "Black"},
]

const binaryValue: NamedNumericValue[] = [
    {value: -1, name: "Present"},
    {value: 0, name: "Absent"},
]

const getNamedValuesByLayer = (layerName: string): NamedNumericValue[] => {
    switch (layerName) {
        case "Annotations":
            return annotationValues
        case "Frost":
            return binaryValue
        default:
            return DefaultLayerValues
    }
}

const LayerSettingMenu: React.FC<LayerSettingMenuProps> =
    ({layerSetting, onUpdateSetting,}: LayerSettingMenuProps) => {
        const onNameChange = (name: string) => {
            onUpdateSetting(layerSetting, [name, layerSetting[1]]);
        };
        const onValueChange = (value: string) => {
            console.log("on value change: newValue", value);
            onUpdateSetting(layerSetting, [layerSetting[0], parseInt(value)]);
        };

        const allowedValues = getNamedValuesByLayer(layerSetting[0])
        if (allowedValues.find(l => l.value == layerSetting[1]) == undefined)
            onValueChange(allowedValues[0].value.toString())

        return (
            <div>
                <LayerSelector
                    layerName={layerSetting[0]}
                    layerList={DefaultLayers}
                    onUpdateLayerName={onNameChange}
                />
                <NamedValueSelector
                    layerValue={{name: layerSetting[0], value: layerSetting[1]}}
                    allowedValues={allowedValues}
                    onUpdateValue={onValueChange}
                />
                <DeleteButton onClick={() => {
                    onUpdateSetting(layerSetting, null)
                }}/>
            </div>
        );
    };

export default LayerSettingMenu;

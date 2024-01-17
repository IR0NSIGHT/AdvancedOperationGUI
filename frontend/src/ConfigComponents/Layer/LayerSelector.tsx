import React from "react";
import { FormControl, InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  DropdownSelect,
  NamedValue,
  namedValue,
} from "../Terrain/DropdownSelect";
import { NoneLayer } from "./WpLayerSetting";

export type LayerSelectorProps = {
  layerName: string;
  layerList: string[];
  onUpdateLayerName: (newName: string) => void;
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const LayerSelector: React.FC<LayerSelectorProps> = ({
  layerName,
  layerList,
  onUpdateLayerName,
}: LayerSelectorProps) => {
  const classes = useStyles();
  const selectedItem = namedValue(
    layerName,
    layerList.findIndex((l) => l === layerName)! ?? -1
  );
  const noneItem = namedValue(NoneLayer, -1);
  const selectableItems = layerList.map(namedValue);

  const onLayerChanged = (newItem: NamedValue) => {
    onUpdateLayerName(newItem.name);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-select-small-label">Layer</InputLabel>
      <DropdownSelect
        selected={selectedItem}
        allItems={selectableItems}
        noneItem={noneItem}
        onChange={onLayerChanged}
        label={"Layer"}
      />
    </FormControl>
  );
};

export default LayerSelector;

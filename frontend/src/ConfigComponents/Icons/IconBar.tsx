import ForestIcon from "@mui/icons-material/Forest";
import NatureIcon from "@mui/icons-material/Nature";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SquareIcon from "@mui/icons-material/Square";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";

import { DefaultLayersType } from "../Layer/WpLayerSetting";
import React, { ReactElement } from "react";
import { WpTerrainType } from "../Terrain/WpTerrainTypes";
import AlignVerticalBottomOutlinedIcon from "@mui/icons-material/AlignVerticalBottomOutlined";
import { NumericFilter } from "../Operation/NumericFilter";
import AlignVerticalTopOutlinedIcon from "@mui/icons-material/AlignVerticalTopOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import WaterOutlinedIcon from "@mui/icons-material/WaterOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import ContrastOutlinedIcon from "@mui/icons-material/ContrastOutlined";
import SpeedIcon from "@mui/icons-material/Speed";
import SquareOutlinedIcon from "@mui/icons-material/SquareOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
export type IconBarProps = {
  defaultLayers: DefaultLayersType[];
  terrainList: WpTerrainType[];
  numericFilters: NumericFilter[];
};

export const IconBar: React.FC<IconBarProps> = ({
  defaultLayers,
  terrainList,
  numericFilters,
}) => {
  const icons = defaultLayers
    .map(iconByLayer)
    .filter((i) => i !== undefined)
    .map((a) => a!);

  const terrainSquares = terrainList.map(iconByTerrain);
  const filterIcons = numericFilters
    .map(iconByFilter)
    .filter((a) => a != undefined)
    .map((a) => a!);
  return (
    <div>
      {icons}
      {terrainSquares}
      {filterIcons}
    </div>
  );
};

const iconByLayer = (layer: DefaultLayersType): ReactElement | undefined => {
  switch (layer) {
    case "Frost":
      return <AcUnitIcon />;
    case "Pines":
      return <ForestIcon style={{ color: "green" }} />;

    case "Caves":
    case "Caverns":
    case "Chasms":
      return <ContrastOutlinedIcon />;

    case "Deciduous":
      // Handle "Deciduous" case
      return <NatureIcon style={{ color: "green" }} />;

    case "Swamp":
      // Handle "Swamp" case
      return <WaterOutlinedIcon style={{ color: "#556B2F" }} />;
      break;

    case "Jungle":
      // Handle "Jungle" case
      return <NatureIcon style={{ color: " #90EE90" }} />;
      break;

    case "Void":
      // Handle "Void" case
      break;

    case "Resources":
      // Handle "Resources" case
      return <DiamondOutlinedIcon />;
      break;

    case "Read Only":
      // Handle "Read Only" case
      break;

    case "Annotations":
      // Handle "Annotations" case
      return <ColorLensOutlinedIcon />;

    default:
      // Handle the default case (if none of the above cases match)
      break;
  }
  return UnknownIcon;
};

const convertColorStringToHtml = (colorString: string): string => {
  const [red, green, blue] = colorString.split(",").map(Number);

  if (isNaN(red) || isNaN(green) || isNaN(blue)) {
    // Invalid input, return a default color or handle it as needed
    return "#000000";
  }

  const htmlColor = `#${red.toString(16).padStart(2, "0")}${green
    .toString(16)
    .padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;
  return htmlColor;
};

export const iconByTerrain = (terrain: WpTerrainType): ReactElement => {
  if (terrain.name.toLowerCase().includes("custom")) {
    return <HelpCenterOutlinedIcon />;
  }
  if (!terrain.color) return <SquareOutlinedIcon />;
  const color = convertColorStringToHtml(terrain.color);
  return <SquareIcon style={{ color: color }} />;
};
const UnknownIcon = <QuestionMarkOutlinedIcon />;
const iconByFilter = (
  numericFilter: NumericFilter
): ReactElement | undefined => {
  switch (numericFilter.name) {
    case "below degrees":
    case "above degrees":
      return <SpeedIcon />;
    case "below level":
      return <AlignVerticalTopOutlinedIcon />;
    case "above level":
      return <AlignVerticalBottomOutlinedIcon />;

    case "None":
      return undefined;
  }
};

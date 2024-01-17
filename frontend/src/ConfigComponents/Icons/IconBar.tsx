import ForestIcon from "@mui/icons-material/Forest";
import NatureIcon from "@mui/icons-material/Nature";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SquareIcon from "@mui/icons-material/Square";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";

import { DefaultLayersType } from "../Layer/WpLayerSetting";
import React, { ReactElement } from "react";
import { WpTerrainType } from "../Terrain/WpTerrainTypes";
import AlignVerticalBottomOutlinedIcon from "@mui/icons-material/AlignVerticalBottomOutlined";

export type IconBarProps = {
  defaultLayers: DefaultLayersType[];
  terrainList: WpTerrainType[];
};

export const IconBar: React.FC<IconBarProps> = ({
  defaultLayers,
  terrainList,
}) => {
  const icons = defaultLayers
    .map(iconByLayer)
    .filter((i) => i !== undefined)
    .map((a) => a!);

  const terrainSquares = terrainList.map(iconByTerrain);
  return (
    <div>
      {icons}
      {terrainSquares}
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
      // Handle "Caves" case
      break;

    case "Caverns":
      // Handle "Caverns" case
      break;

    case "Chasms":
      // Handle "Chasms" case
      break;

    case "Deciduous":
      // Handle "Deciduous" case
      return <NatureIcon style={{ color: "green" }} />;

    case "Swamp":
      // Handle "Swamp" case
      break;

    case "Jungle":
      // Handle "Jungle" case
      break;

    case "Void":
      // Handle "Void" case
      break;

    case "Resources":
      // Handle "Resources" case
      break;

    case "Read Only":
      // Handle "Read Only" case
      break;

    case "Annotations":
      // Handle "Annotations" case
      break;

    default:
      // Handle the default case (if none of the above cases match)
      break;
  }
  return <QuestionMarkOutlinedIcon />;
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

const iconByTerrain = (terrain: WpTerrainType): ReactElement => {
  if (!terrain.color) return <QuestionMarkOutlinedIcon />;

  const color = convertColorStringToHtml(terrain.color);
  return <SquareIcon style={{ color: color }} />;
};

const iconByFilter = (): ReactElement => {
  return <AlignVerticalBottomOutlinedIcon />;
};

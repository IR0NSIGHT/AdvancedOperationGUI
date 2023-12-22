import React, { JSX } from "react";
import TerrainTypeSelect from "../Terrain/TerrainTypeSelect";
import { DeleteButton } from "../DeleteButton";
import { Button, Grid } from "@material-ui/core";

type OperationSubsectionProps = {
  title: string;
  content: JSX.Element[];
  xs: number;
};
export const OperationSubsection: React.FC<OperationSubsectionProps> = ({
  title,
  content,
  xs,
}) => {
  return (
    // @ts-ignore
    <Grid item xs={xs}>
      <h3>{title}</h3>
      {content}
    </Grid>
  );
};

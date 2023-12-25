import React from "react";
import { Button } from "@material-ui/core";

export type AddButtonProps = { title: string; addAction: () => void };

export const AddButton: React.FC<AddButtonProps> = ({ title, addAction }) => {
  return (
    <Button variant="contained" color="primary" onClick={addAction}>
      {title}
    </Button>
  );
};

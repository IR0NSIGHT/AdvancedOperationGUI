import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@material-ui/core";

export type DeleteButtonProp = {
  onClick: () => void;
};
export const DeleteButton: React.FC<DeleteButtonProp> = ({ onClick }) => {
  return (
    <IconButton aria-label="delete" size="small" onClick={onClick}>
      <DeleteIcon fontSize="small" />
    </IconButton>
  );
};

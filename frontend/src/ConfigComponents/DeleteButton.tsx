import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@material-ui/core";

export type DeleteButtonProp = {
  onClick: () => void;
};
export const DeleteButton: React.FC<DeleteButtonProp> = ({ onClick }) => {
  return (
    <IconButton
      aria-label="delete"
      size="medium"
      onClick={onClick}
      style={{ alignItems: "center" }}
    >
      <DeleteIcon fontSize="small" />
    </IconButton>
  );
};

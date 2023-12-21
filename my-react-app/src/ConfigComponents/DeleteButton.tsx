import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export type DeleteButtonProp = {
    onClick: () => void
}
export const DeleteButton: React.FC<DeleteButtonProp> = ({onClick}) => {
    return (
        <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon/>}
            onClick={onClick}
        >
            Delete
        </Button>
    );
};


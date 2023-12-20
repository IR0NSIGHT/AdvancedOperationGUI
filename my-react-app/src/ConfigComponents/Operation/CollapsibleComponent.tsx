import {makeStyles} from "@material-ui/core/styles";
import React, {useState} from "react";
import {Collapse, IconButton, Paper, Typography} from "@material-ui/core";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 'auto',
        maxWidth: 1200,
        margin: 'auto',
        marginTop: theme.spacing(2),
        padding: theme.spacing(2),
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
    },
}));
type CollapsibleProps = {
    title: string;
    content: JSX.Element;
};
export const CollapsibleComponent: React.FC<CollapsibleProps> = ({title, content}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Paper className={classes.root}>
            <div
                className={classes.header}
                onClick={handleExpandClick}
                role="button"
                tabIndex={0}
            >
                <Typography variant="h6">{title}</Typography>
                <IconButton>
                    {expanded ? <ExpandLess/> : <ExpandMore/>}
                </IconButton>
            </div>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography variant="body1">{content}</Typography>
            </Collapse>
        </Paper>
    );
};
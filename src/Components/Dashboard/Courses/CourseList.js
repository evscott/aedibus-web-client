import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WebIcon from '@material-ui/icons/Web';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

export default (props) => {
    const classes = useStyles();
    const { courses } = props;

    return (
        <Grid item>
            <div className={classes.demo}>
                <List>
                    {courses.map(({ id, name }) => (
                        <ListItem key={id} button>
                            <ListItemIcon className={classes.itemIcon}>
                                <WebIcon/>
                            </ListItemIcon>
                            <ListItemText>
                                {name}
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </div>
        </Grid>
    );
}
import React, {Fragment} from 'react';
import TopBar from './TopBar'
import SideBar from "./SideBar";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CourseList from "../Courses/CourseList";
import Paper from '@material-ui/core/Paper'


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    Paper: {
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        height: 500
    }
}));

export default () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Fragment className={classes.root}>
            <TopBar handleDrawerOpen={handleDrawerOpen} open={open}/>
            <main>
                <div className={classes.appBarSpacer} />
                <Grid container>
                    <Grid item lg={1} md={2}>
                        <SideBar handleDrawerClose={handleDrawerClose} open={open}/>
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <Paper className={classes.Paper}>
                            <CourseList/>
                        </Paper>
                    </Grid>
                </Grid>
            </main>
        </Fragment>
    );
}
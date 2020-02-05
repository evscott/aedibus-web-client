import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import NotificationsWidget from "./NotificationsWidget";
import UserMenu from "./UserMenu";

export default props => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <AppBar color="primary" position="sticky" elevation={0}>
                <Toolbar>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item xs />
                        <Grid item>
                            <NotificationsWidget/>
                        </Grid>
                        <Grid item >
                            Eliot Scott
                        </Grid>
                        <Grid item>
                            <UserMenu anchorEl={anchorEl} handleClick={handleClick} handleClose={handleClose}/>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import MessageList from "./MessageList";

const styles = theme => ({
    paper: {
        maxWidth: 936,
        margin: 'auto',
        overflow: 'hidden',
    },
    searchBar: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
        fontSize: theme.typography.fontSize,
    },
    block: {
        display: 'block',
    },
    addUser: {
        marginRight: theme.spacing(1),
    },
    contentWrapper: {
        margin: '16px 16px',
    },
});

const messages = [
    {
        id: 0,
        name: "Ben Currie",
        open: false,

    },
    {
        id: 1,
        name: "Shekhar Dewam",
        open: true,

    },
    {
        id: 2,
        name: "Graeme Zinck",
        open: true,

    },
    {
        id: 3,
        name: "Rija Ali",
        open: true,

    }
];

function MessageFinder(props) {
    const { classes } = props;
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.paper}>
            <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <SearchIcon className={classes.block} color="inherit" />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                placeholder="Search for message"
                                InputProps={{
                                    disableUnderline: true,
                                    className: classes.searchInput,
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" className={classes.addUser}>
                                Create Message
                            </Button>
                            <Tooltip title="Reload">
                                <IconButton>
                                    <RefreshIcon className={classes.block} color="inherit" />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div className={classes.contentWrapper}>
                <MessageList messages={messages}/>
            </div>
        </Paper>
    );
}

MessageFinder.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MessageFinder);
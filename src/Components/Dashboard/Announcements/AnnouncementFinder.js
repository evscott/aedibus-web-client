import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import RefreshIcon from '@material-ui/icons/Refresh'
import AnnouncementList from './AnnouncementList'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import Zoom from '@material-ui/core/Zoom';

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
    createButton: {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    }
})

const announcements = [
    {
        id: 0,
        course: 'COMP 4911',
        system: false,
        message: 'Some message from the instructor about something'
    },
    {
        id: 1,
        course: 'COMP 2931',
        system: true,
        message: 'Some automated message from the system about a deadline or something'
    },
    {
        id: 2,
        course: 'COMP 4911',
        system: false,
        message: 'Some message from the instructor about something',
    },
    {
        id: 3,
        course: 'COMP 4721',
        system: false,
        message: 'Some message from the instructor about something'
    },
]

function AnnouncementFinder(props) {
    const { classes, handleOpen } = props

    return (
        <Paper className={classes.paper}>
            <AppBar
                className={classes.searchBar}
                position="static"
                color="default"
                elevation={0}
            >
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <SearchIcon
                                className={classes.block}
                                color="inherit"
                            />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                placeholder="Search for announcement"
                                InputProps={{
                                    disableUnderline: true,
                                    className: classes.searchInput,
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <Tooltip title="Reload">
                                <IconButton>
                                    <RefreshIcon
                                        className={classes.block}
                                        color="inherit"
                                    />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Grid container>
                <Grid item xs={12} md={12} lg={12} className={classes.contentWrapper}>
                    <AnnouncementList announcements={announcements} />
                </Grid>
                <Grid item xs={11} md={11} lg={11}/>
                <Grid item xs={1} md={1} lg={1}>
                    <Button color="primary" size={'medium'} aria-label="add" onClick={handleOpen}>
                        <Tooltip title={'Create announcement'} placement="left" TransitionComponent={Zoom}>
                            <AddIcon />
                        </Tooltip>
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

AnnouncementFinder.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AnnouncementFinder)
import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import RefreshIcon from '@material-ui/icons/Refresh'
import AssignmentList from './AssignmentList'
import Typography from '@material-ui/core/Typography'

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
})

const Assignments = [
    {
        id: 0,
        name: 'Assignment 1',
    },
    {
        id: 1,
        name: 'Assignment 2',
    },
    {
        id: 2,
        name: 'Assignment 3',
    },
    {
        id: 4,
        name: 'Assignment 4',
    },
    {
        id: 6,
        name: 'Assignment 5',
    },
]

function AssignmentFinder(props) {
    const { classes } = props

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
                                placeholder="Search for Assignment"
                                InputProps={{
                                    disableUnderline: true,
                                    className: classes.searchInput,
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.addUser}
                            >
                                Create Assignment
                            </Button>
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
            <div className={classes.contentWrapper}>
                <AssignmentList Assignments={Assignments} />
            </div>
        </Paper>
    )
}

AssignmentFinder.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AssignmentFinder)

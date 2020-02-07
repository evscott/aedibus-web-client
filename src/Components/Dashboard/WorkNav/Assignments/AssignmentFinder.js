import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import RefreshIcon from '@material-ui/icons/Refresh'
import AssignmentList from './AssignmentList'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AddIcon from '@material-ui/icons/Add';
import 'typeface-roboto';
import Zoom from '@material-ui/core/Zoom'

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
    assignmentHeader: {
        marginTop: '4px',
    }
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
    const { classes, handleBack } = props

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
                        <Grid item xs={11} md={11} lg={11}>
                            <Typography variant={'h6'} color={'textSecondary'}>
                                COMP 2631
                            </Typography>
                        </Grid>
                        <Grid item xs={1} md={1} lg={1}>
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
                <Divider light/>
                <Grid container spacing={1}>
                    <Grid item xs={1} md={1} lg={1}>
                        <Button color={'default'} onClick={handleBack}>
                            <ArrowBackIosIcon/>
                        </Button>
                    </Grid>
                    <Grid item xs={4} md={4} lg={4} className={classes.assignmentHeader}>
                        <Typography variant={'h6'} color={'textSecondary'}>
                            Assignments
                        </Typography>
                    </Grid>
                </Grid>
            </AppBar>
            <Grid container>
                <Grid item xs={12} md={12} lg={12} className={classes.contentWrapper}>
                    <AssignmentList Assignments={Assignments} />
                </Grid>
                <Grid item xs={11} md={11} lg={11}/>
                <Grid item xs={1} md={1} lg={1}>
                    <Button color="primary" size={'small'} aria-label="add">
                        <Tooltip title={'Create assignment'} placement="left" TransitionComponent={Zoom}>
                            <AddIcon />
                        </Tooltip>
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

AssignmentFinder.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AssignmentFinder)

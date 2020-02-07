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
import CourseList from './CourseList'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
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
    typoHeading: {
        paddingLeft: '10px',
    },
})

const courses = [
    {
        id: 0,
        name: 'COMP 2631',
    },
    {
        id: 1,
        name: 'COMP 4911',
    },
    {
        id: 2,
        name: 'COMP 4721',
    },
]

function CourseFinder(props) {
    const { classes, onCourseSelect } = props

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
                                Courses
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
            </AppBar>
            <Grid container>
                <Grid item xs={12} md={12} lg={12} className={classes.contentWrapper}>
                    <CourseList courses={courses} onCourseSelect={onCourseSelect} />
                </Grid>
                <Grid item xs={11} md={11} lg={11}/>
                <Grid item xs={1} md={1} lg={1}>
                    <Button color="primary" size={'small'} aria-label="add">
                        <Tooltip title={'Create course'} placement="left" TransitionComponent={Zoom}>
                            <AddIcon />
                        </Tooltip>
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

CourseFinder.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CourseFinder)

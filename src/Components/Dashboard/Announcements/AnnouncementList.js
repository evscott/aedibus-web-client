import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import NewReleasesIcon from '@material-ui/icons/NewReleases'
import AnnouncementIcon from '@material-ui/icons/Announcement'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

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
}))

export default props => {
    const classes = useStyles()
    const { announcements } = props

    return (
        <Grid item>
            <div className={classes.demo}>
                <Grid container>
                    <List>
                        {announcements.map(
                            ({ id, course, system, message }) => (
                                <Fragment key={id}>
                                    <ListItem key={id} button>
                                        <ListItemIcon>
                                            {system ? (
                                                <NewReleasesIcon/>
                                            ) : (
                                                <AnnouncementIcon/>
                                            )}
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography color={'textSecondary'}>
                                                {course}
                                            </Typography>
                                            {message}
                                        </ListItemText>
                                    </ListItem>
                                    <Divider light/>
                                </Fragment>
                            ),
                        )}
                    </List>
                </Grid>
            </div>
        </Grid>
    )
}

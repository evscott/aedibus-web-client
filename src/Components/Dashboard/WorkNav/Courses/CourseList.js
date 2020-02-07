import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import WebIcon from '@material-ui/icons/Web'
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
    const { courses, onCourseSelect } = props

    return (
        <Grid item>
            <div className={classes.demo}>
                <List>
                    {courses.map(({ id, name }) => (
                        <Fragment key={id}>
                            <ListItem key={id} button onClick={() => onCourseSelect(name)}>
                                <ListItemIcon className={classes.itemIcon}>
                                    <WebIcon />
                                </ListItemIcon>
                                <ListItemText>{name}</ListItemText>
                            </ListItem>
                            <Divider light/>
                        </Fragment>
                    ))}
                </List>
            </div>
        </Grid>
    )
}

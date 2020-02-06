import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PeopleIcon from '@material-ui/icons/People'
import DnsRoundedIcon from '@material-ui/icons/DnsRounded'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import { Dashboard } from '@material-ui/icons'
import { useHistory } from "react-router-dom";

export const Categories = [
    {
        id: 'Work',
        children: [
            { id: 'Dashboard', icon: <Dashboard/>, to: '/home' },
            { id: 'Courses', icon: <DnsRoundedIcon />, to: '/home' },
            { id: 'Submissions', icon: <AssignmentTurnedInIcon />, to: '/home' },
        ],
    },
    {
        id: 'Social',
        children: [
            { id: 'Messenger', icon: <QuestionAnswerIcon />, to: '/home' },
            { id: 'Students', icon: <PeopleIcon />, to: '/home' },
        ],
    },
]

const styles = theme => ({
    categoryHeader: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
        color: theme.palette.common.white,
    },
    item: {
        paddingTop: 1,
        paddingBottom: 1,
        color: 'rgba(255, 255, 255, 0.7)',
        '&:hover,&:focus': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
    },
    itemCategory: {
        backgroundColor: '#232f3e',
        boxShadow: '0 -1px 0 #404854 inset',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    firebase: {
        fontSize: 24,
        color: theme.palette.common.white,
    },
    itemActiveItem: {
        color: '#4fc3f7',
    },
    itemPrimary: {
        fontSize: 'inherit',
    },
    itemIcon: {
        minWidth: 'auto',
        marginRight: theme.spacing(2),
    },
    divider: {
        marginTop: theme.spacing(2),
    },
})

function Sidebar(props) {
    const { classes, ...other } = props
    const history = useHistory();

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem
                    className={clsx(
                        classes.firebase,
                        classes.item,
                        classes.itemCategory
                    )}
                >
                    Aedibus
                </ListItem>
                {Categories.map(({ id, children }) => (
                    <React.Fragment key={id}>
                        <ListItem className={classes.categoryHeader}>
                            <ListItemText
                                classes={{
                                    primary: classes.categoryHeaderPrimary,
                                }}
                            >
                                {id}
                            </ListItemText>
                        </ListItem>
                        {children.map(({ id: childId, icon, to, active }) => (
                            <ListItem
                                key={childId}
                                to={to}
                                button
                                className={clsx(
                                    classes.item,
                                    active && classes.itemActiveItem
                                )}
                                onClick={() => history.push(to)}
                            >
                                <ListItemIcon className={classes.itemIcon}>
                                    {icon}
                                </ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.itemPrimary,
                                    }}
                                >
                                    {childId}
                                </ListItemText>
                            </ListItem>
                        ))}
                    </React.Fragment>
                ))}
            </List>
        </Drawer>
    )
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Sidebar)

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';


const categories = [
    {
        id: 'Left window',
        children: [
            { id: 'Courses', icon: <DnsRoundedIcon /> },
            { id: 'Submissions', icon: <AssignmentTurnedInIcon /> },
        ],
    },
    {
        id: 'Right window',
        children: [
            { id: 'Messenger', icon: <QuestionAnswerIcon /> },
            { id: 'Students', icon: <PeopleIcon /> },
        ],
    },
];

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
});

function Sidebar(props) {
    const { classes, ...other } = props;

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
                    Aedibus
                </ListItem>
                {categories.map(({ id, children }) => (
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
                        {children.map(({ id: childId, icon, active }) => (
                            <ListItem
                                key={childId}
                                button
                                className={clsx(classes.item, active && classes.itemActiveItem)}
                            >
                                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
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
    );
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Web from '@material-ui/icons/Web';
import PeopleIcon from '@material-ui/icons/People';
import WebAsset from '@material-ui/icons/WebAsset';
import Chat from '@material-ui/icons/Chat';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Web />
            </ListItemIcon>
            <ListItemText primary="Courses"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <WebAsset />
            </ListItemIcon>
            <ListItemText primary="Assignments"/>
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Students" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Chat />
            </ListItemIcon>
            <ListItemText primary="Messages" />
        </ListItem>
    </div>
)
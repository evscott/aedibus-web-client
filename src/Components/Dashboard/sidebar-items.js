import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBox from '@material-ui/icons/AccountBox';
import Settings from '@material-ui/icons/Settings';
import PeopleIcon from '@material-ui/icons/People';
import EmojiPeople from '@material-ui/icons/EmojiPeople';
import Chat from '@material-ui/icons/Chat';
import Dashboard from '@material-ui/icons/Dashboard';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';


export const navigationItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentTurnedInIcon />
            </ListItemIcon>
            <ListItemText primary="Submissions" />
        </ListItem>
    </div>
);

export const accountItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Account" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItem>
    </div>
);

export const socialItems = (
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
);

export const logoutItem = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <EmojiPeople />
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItem>
    </div>
)
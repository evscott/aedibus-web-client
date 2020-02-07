import IconButton from '@material-ui/core/IconButton'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SettingsIcon from '@material-ui/icons/Settings'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'
import React from 'react'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    iconButtonAvatar: {
        padding: 4,
    },
})

export default props => {
    const { anchorEl, handleClick, handleClose } = props
    return (
        <div>
            <IconButton
                color="inherit"
                className={styles.iconButtonAvatar}
                onClick={handleClick}
            >
                <ArrowDropDownIcon />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <AccountCircleIcon />
                    Account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <SettingsIcon />
                    Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <EmojiPeopleIcon />
                    Logout
                </MenuItem>
            </Menu>
        </div>
    )
}

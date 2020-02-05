import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Tooltip from "@material-ui/core/Tooltip";
import React from "react";

export default props => {
    return (
        <Tooltip title="Alerts • No alerts">
            <IconButton color="inherit">
                <NotificationsIcon />
            </IconButton>
        </Tooltip>
    );
}
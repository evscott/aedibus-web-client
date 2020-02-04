import React from 'react';
import TopBar from './TopBar'
import SideBar from "./SideBar";

export default () => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <TopBar handleDrawerOpen={handleDrawerOpen} open={open}/>
            <main>
            </main>
            <SideBar handleDrawerClose={handleDrawerClose} open={open}/>
        </div>
    );
}
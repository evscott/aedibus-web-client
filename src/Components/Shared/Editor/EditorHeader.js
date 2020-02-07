import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import { Tabs } from '@material-ui/core'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom'
import ClearAllIcon from '@material-ui/icons/ClearAll'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import AddIcon from '@material-ui/icons/Add'
import AppBar from '@material-ui/core/AppBar'
import React from 'react'

export default props => {
    const { value, setValue } = props
    return (
        <AppBar position="relative" color="default">
            <Toolbar>
                <Grid container>
                    <Grid xs={9} md={9} lg={9} item>
                        <Tabs
                            onChange={(e, v) => setValue(v)}
                            value={value}
                            variant="scrollable"
                            scrollButtons="auto"
                        >
                            <Tab label={'File1.js'}/>
                            <Tab label={'File2.js'}/>
                            <Tab label={'File3.js'}/>
                            <Tab label={'File4.js'}/>
                            <Tab label={'File5.js'}/>
                        </Tabs>
                    </Grid>
                </Grid>
                <Grid item xs={1} md={1} lg={1}>
                    <Button color={'default'}>
                        <Tooltip
                            title={'Delete all files'}
                            placement="top-end"
                            TransitionComponent={Zoom}
                        >
                            <ClearAllIcon/>
                        </Tooltip>
                    </Button>
                </Grid>
                <Grid item xs={1} md={1} lg={1}>
                    <Button color={'default'}>
                        <Tooltip
                            title={'Delete file'}
                            placement="top"
                            TransitionComponent={Zoom}
                        >
                            <DeleteForeverIcon/>
                        </Tooltip>
                    </Button>
                </Grid>
                <Grid item xs={1} md={1} lg={1}>
                    <Button color="primary">
                        <Tooltip
                            title={'New file'}
                            placement="top-start"
                            TransitionComponent={Zoom}
                        >
                            <AddIcon/>
                        </Tooltip>
                    </Button>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

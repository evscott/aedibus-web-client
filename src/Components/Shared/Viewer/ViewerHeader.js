import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React from 'react'

export default props => {
    return (
        <AppBar position="relative" color="default">
            <Toolbar>
                <Grid container>
                    <Grid xs={12} md={7} lg={7} item>
                        <Typography variant={'h6'} color={'textSecondary'}>
                            README.md
                        </Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

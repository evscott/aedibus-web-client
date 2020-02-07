import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import UserMenu from './UserMenu'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'

export default props => {
    const history = useHistory()
    const { crumbs } = props

    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <React.Fragment>
            <AppBar color="primary" position="sticky" elevation={0}>
                <Toolbar>
                    <Grid container spacing={1} alignItems="center">
                        <Breadcrumbs aria-label="breadcrumb">
                            { crumbs.map(({path, target}) => (
                                <Button key={path} color="inherit" onClick={() => history.push(target)}>
                                    {path}
                                </Button>
                            ))}
                        </Breadcrumbs>
                        <Grid item xs/>
                        <Grid item>Eliot Scott</Grid>
                        <Grid item>
                            <UserMenu
                                anchorEl={anchorEl}
                                handleClick={handleClick}
                                handleClose={handleClose}
                            />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

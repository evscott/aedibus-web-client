import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit">Aedibus</Link> {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

export default props => <Copyright />

import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import React from 'react'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit">Aedibus</Link> {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const styles = {
    footer: {
        padding: theme.spacing(2),
        background: '#eaeff1',
    },
}

export default () => (
    <footer className={styles.footer}>
        <Copyright />
    </footer>
)

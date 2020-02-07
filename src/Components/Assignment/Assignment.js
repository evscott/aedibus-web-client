import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import { Footer } from '../Shared/Layouts'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { theme } from '../Dashboard/root-theme'
import { Header, Sidebar } from '../Shared/Layouts/'
import { Editor, EditorHeader } from '../Shared/Editor'
import { Viewer, ViewerHeader } from '../Shared/Viewer/'

const drawerWidth = 195

const styles = {
    root: {
        display: 'flex',
        minHeight: '100vh',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    app: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        flex: 1,
        padding: theme.spacing(6, 4),
        background: '#eaeff1',
    },
    CodeMirror: {
        height: 800,
        padding: '10px',
    },
    InstructionsPaper: {
        padding: '10px',
        minHeight: '600px',
    },
    button: {
        margin: theme.spacing(1),
        right: '0px',
        bottom: '0px',
    },
    assignmentTitle: {
        marginTop: '8px',
    },
    createTab: {
        marginTop: '8px',
    },
    buttons: {
        marginTop: '8px',
    },
}

function Assignment(props) {
    const { classes } = props
    const { courseName, assignmentName } = props.location.state

    const crumbs = [
        {
            path: 'Dashboard',
            target: '/home',
        },
        {
            path: courseName,
            target: '/home',
        },
        {
            path: assignmentName,
            target: '/assignment',
        },
    ]

    const [value, setValue] = React.useState(0)

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline/>
                {/* Sidebar Navigation */}
                <nav className={classes.drawer}>
                    <Hidden xsDown implementation="css">
                        <Sidebar
                            PaperProps={{ style: { width: drawerWidth } }}
                        />
                    </Hidden>
                </nav>
                <div className={classes.app}>
                    <Header crumbs={crumbs} />
                    {/* Assignment Contents */}
                    <main className={classes.main}>
                        <Grid container spacing={3}>
                            {/* Code Editor */}
                            <Grid item lg={7} md={12} xs={12}>
                                <Paper className={classes.CodeMirror}>
                                    <EditorHeader
                                        value={value}
                                        setValue={setValue}
                                    />
                                    <Editor/>
                                </Paper>
                            </Grid>
                            {/* README Viewer */}
                            <Grid item lg={5} md={12} xs={12}>
                                <Paper className={classes.InstructionsPaper}>
                                    <ViewerHeader/>
                                    <Viewer/>
                                </Paper>
                                {/* Buttons */}
                                <Grid
                                    container
                                    className={classes.buttons}
                                    spacing={3}
                                >
                                    <Grid item xs={10} md={10} lg={10}/>
                                    <Grid item xs={1} md={1} lg={1}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                        >
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </main>
                    <Footer />
                </div>
            </div>
        </ThemeProvider>
    )
}

Assignment.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Assignment)

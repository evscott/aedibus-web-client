import React from 'react'
import PropTypes from 'prop-types'
import {
    createMuiTheme,
    ThemeProvider,
    withStyles,
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Hidden from '@material-ui/core/Hidden'
import Sidebar from '../Shared/Layouts/Sidebar'
import Header from '../Shared/Layouts/Header/Header'
import Grid from '@material-ui/core/Grid'
import { Footer } from '../Shared/Layouts'
import Paper from '@material-ui/core/Paper'
import Editor from '../Shared/Editor/Editor'
import ReactMarkdown from "react-markdown";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import { Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Tooltip from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom'
import Instructions from './Instructions'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ClearAllIcon from '@material-ui/icons/ClearAll';

let theme = createMuiTheme({
    palette: {
        primary: {
            light: '#63ccff',
            main: '#009be5',
            dark: '#006db3',
        },
    },
    typography: {
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    shape: {
        borderRadius: 8,
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
})

theme = {
    ...theme,
    overrides: {
        MuiDrawer: {
            paper: {
                backgroundColor: '#18202c',
            },
        },
        MuiButton: {
            label: {
                textTransform: 'none',
            },
            contained: {
                boxShadow: 'none',
                '&:active': {
                    boxShadow: 'none',
                },
            },
        },
        MuiTabs: {
            root: {
                marginLeft: theme.spacing(1),
            },
            indicator: {
                height: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                backgroundColor: theme.palette.common.white,
            },
        },
        MuiTab: {
            root: {
                textTransform: 'none',
                margin: '0 16px',
                minWidth: 0,
                padding: 0,
                [theme.breakpoints.up('md')]: {
                    padding: 0,
                    minWidth: 0,
                },
            },
        },
        MuiIconButton: {
            root: {
                padding: theme.spacing(1),
            },
        },
        MuiTooltip: {
            tooltip: {
                borderRadius: 4,
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: '#404854',
            },
        },
        MuiListItemText: {
            primary: {
                fontWeight: theme.typography.fontWeightMedium,
            },
        },
        MuiListItemIcon: {
            root: {
                color: 'inherit',
                marginRight: 0,
                '& svg': {
                    fontSize: 20,
                },
            },
        },
        MuiAvatar: {
            root: {
                width: 32,
                height: 32,
            },
        },
    },
}

const drawerWidth = 256

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
        bottom: '0px'
    },
    assignmentTitle: {
        marginTop: '8px'
    },
    createTab: {
        marginTop: '8px'
    },
    buttons: {
        marginTop: '8px'
    }
}

function Assignment(props) {
    const { classes } = props

    const [crumbs, setCrumbs] = React.useState([
        {
            path: 'Dashboard',
            target: '/home'
        },
        {
            path: 'COMP 2631',
            target: '/home'
        },
        {
            path: 'Assignment 1',
            target: '/assignment'
        }
    ])
    
    const [value, setValue] = React.useState(0);


    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline />
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
                                    <AppBar
                                        position="relative"
                                        color="default"
                                    >
                                        <Toolbar>
                                            <Grid container>
                                                <Grid xs={9} md={9} lg={9} item>
                                                    <Tabs
                                                        onChange={(e, v) => setValue(v)}
                                                        value={value}
                                                        variant="scrollable"
                                                        scrollButtons="auto"
                                                    >
                                                        <Tab label={"File1.js"} />
                                                        <Tab label={"File2.js"} />
                                                        <Tab label={"File3.js"} />
                                                        <Tab label={"File4.js"} />
                                                        <Tab label={"File5.js"} />
                                                    </Tabs>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={1} md={1} lg={1}>
                                                <Button color={'default'}>
                                                    <Tooltip title={'Delete all files'} placement="top-end" TransitionComponent={Zoom}>
                                                        <ClearAllIcon/>
                                                    </Tooltip>
                                                </Button>
                                            </Grid>
                                            <Grid item xs={1} md={1} lg={1}>
                                                <Button color={'default'}>
                                                    <Tooltip title={'Delete file'} placement="top" TransitionComponent={Zoom}>
                                                        <DeleteForeverIcon/>
                                                    </Tooltip>
                                                </Button>
                                            </Grid>
                                            <Grid item xs={1} md={1} lg={1}>
                                                <Button color="primary">
                                                    <Tooltip title={'New file'} placement="top-start" TransitionComponent={Zoom}>
                                                        <AddIcon/>
                                                    </Tooltip>
                                                </Button>
                                            </Grid>
                                        </Toolbar>
                                    </AppBar>
                                    <Editor />
                                </Paper>
                            </Grid>
                            <Grid item lg={5} md={12} xs={12}>
                                <Paper className={classes.InstructionsPaper}>
                                    <AppBar
                                        position="relative"
                                        color="default"
                                    >
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
                                    <Instructions/>
                                </Paper>
                                <Grid container className={classes.buttons} spacing={3}>
                                    <Grid item xs={10} md={10} lg={10}/>
                                    <Grid item xs={1} md={1} lg={1}>
                                        <Button variant="contained" color="primary">
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

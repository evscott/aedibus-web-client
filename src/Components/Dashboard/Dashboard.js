import React from 'react'
import PropTypes from 'prop-types'
import {
    createMuiTheme,
    ThemeProvider,
    withStyles,
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import WorkNav from './WorkNav/WorkNav'
import { Header, Footer, Sidebar } from '../Shared/Layouts'
import AnnouncementFinder from './Announcements/AnnouncementFinder'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}

function Dashboard(props) {
    const { classes } = props

    const [crumbs, setCrumbs] = React.useState([
        {
            path: 'Dashboard',
            target: '/home'
        }
    ])

    // const [creatingCourse, createCourse] = React.useState(false);
    // const startCreatingCourse = () => {
    //     createCourse(true);
    // };
    // const stopCreatingCourse = () => {
    //     createAssignment(true);
    // };
    //
    // const [creatingAssignment, createAssignment] = React.useState(false);
    // const startCreatingAssignment = () => {
    //     createAssignment(true);
    // };
    // const stopCreatingAssignment = () => {
    //     createAssignment(true);
    // };

    const [creatingAnnouncement, createAnnouncement] = React.useState(false);
    const startCreatingAnnouncement = () => {
        createAnnouncement(true);
    };
    const stopCreatingAnnouncement = () => {
        createAnnouncement(false);
    }

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
                    <Header crumbs={crumbs}/>
                    {/* Dashboard Contents */}
                    <main className={classes.main}>
                        <Grid container spacing={2}>
                            <Grid item lg={6} md={12} xs={12}>
                                <WorkNav crumbs={crumbs} setCrumbs={setCrumbs}/>
                            </Grid>
                            <Grid item lg={6} md={12} xs={12}>
                                <AnnouncementFinder handleOpen={startCreatingAnnouncement}/>
                            </Grid>
                        </Grid>
                    </main>
                    <Footer />
                </div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={creatingAnnouncement}
                    onClose={stopCreatingAnnouncement}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={creatingAnnouncement}>
                        <div className={classes.paper}>
                            <h2 id="transition-modal-title">Create announcement form goes here</h2>
                        </div>
                    </Fade>
                </Modal>
            </div>
        </ThemeProvider>
    )
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Dashboard)

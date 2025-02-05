import DrawerContent from './DrawerContent';
import UserMenu from './UserMenu';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {
    grey,
    indigo,
} from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import {
    createTheme,
    darken,
    ThemeProvider,
} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';

const drawerWidth = 300;
const toolbarHeight = 64;

interface Props {
    children: any;
}

const darkTheme = createTheme({
    palette: {
        mode: `dark`,
        background: {
            paper: darken(indigo[900], 0.7),
        },
    },
});

export default function LayoutWrapper (props: Props) {
    const { children } = props;
    const [ mobileOpen, setMobileOpen ] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = <DrawerContent />;

    return (

        <Box sx={{
            display: `flex`,
            width: `100%`,
            height: `100%`,
        }}
        >
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: {
                        sm: `calc(100% - ${drawerWidth}px)`,
                    },
                    ml: {
                        sm: `${drawerWidth}px`,
                    },
                }}
            >
                <Toolbar sx={{
                    justifyContent: {
                        xs: `space-between`,
                        sm: `flex-end`,
                    },
                    height: {
                        xs: `${toolbarHeight}px`,
                    },
                }}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{
                            mr: 2,
                            display: {
                                sm: `none`,
                            },
                        }}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>

                    <UserMenu />
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{
                    width: {
                        sm: drawerWidth,
                    },
                    flexShrink: {
                        sm: 0,
                    },
                }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <ThemeProvider theme={darkTheme}>
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: {
                                xs: `block`,
                                sm: `none`,
                            },
                            // eslint-disable-next-line @typescript-eslint/naming-convention
                            '& .MuiDrawer-paper': {
                                boxSizing: `border-box`,
                                width: drawerWidth,
                            },
                        }}
                        onClose={handleDrawerToggle}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        open
                        variant="permanent"
                        sx={{
                            display: {
                                xs: `none`,
                                sm: `block`,
                            },
                            // eslint-disable-next-line @typescript-eslint/naming-convention
                            '& .MuiDrawer-paper': {
                                boxSizing: `border-box`,
                                width: drawerWidth,
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </ThemeProvider>
            </Box>
            <Box
                component="main"
                sx={{
                    display: `flex`,
                    overflow: `auto`,
                    height: `calc(100% - ${toolbarHeight}px)`,
                    marginTop: {
                        xs: `${toolbarHeight}px`,
                    },
                    width: {
                        sm: `calc(100% - ${drawerWidth}px)`,
                    },
                    backgroundColor: grey[300],
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

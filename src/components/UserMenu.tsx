import Logout from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { ListItemIcon } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React,
{ useState } from 'react';

export default function UserMenu () {

    const userOptions = [
        {
            name: `Profile`,
            icon: <PersonIcon />,
        },
        {
            name: `Sign out`,
            icon: <Logout />,
        },
    ];

    const [ anchorElUser, setAnchorElUser ] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{
            flexGrow: 0,
        }}
        >
            <Tooltip title="Open User Menu">
                <IconButton
                    sx={{
                        p: 0,
                    }}
                    onClick={handleOpenUserMenu}
                >
                    <Avatar
                        alt="Remy Sharp"
                    />
                </IconButton>
            </Tooltip>
            <Menu
                keepMounted
                sx={{
                    mt: 5,
                }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: `top`,
                    horizontal: `right`,
                }}
                transformOrigin={{
                    vertical: `top`,
                    horizontal: `right`,
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {userOptions.map((option, index) => (
                    <>
                        { index !== 0 &&
                            <Divider />
                        }
                        <MenuItem
                            key={option.name}
                            onClick={handleCloseUserMenu}
                        >
                            <ListItemIcon>
                                {option.icon}
                            </ListItemIcon>
                            <Typography textAlign="center">{option.name}</Typography>
                        </MenuItem>
                    </>
                ))}
            </Menu>
        </Box>
    );
}

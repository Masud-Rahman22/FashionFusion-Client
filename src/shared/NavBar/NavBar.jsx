import * as React from 'react';
// import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import '../NavBar/navbar.css'
// import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { alpha } from '@mui/material/styles';
// import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
// import { grey } from '@mui/material/colors';
import Login from '../../pages/login/Login';
import { Drawer } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const TextTypography = styled(Typography)({
    fontFamily: 'Georgia, serif',
    fontSize: '3rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#4a4a4a',
});
// const color = grey[900];
// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: color,
//     '&:hover': {
//         backgroundColor: color,
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         width: 'auto',
//     },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '20ch',
//         },
//     },
// }));



export default function NavBar() {
    const [openSidebar, setOpenSidebar] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    function ScrollableAppBar() {
        const [isScrolled, setIsScrolled] = React.useState(false);

        React.useEffect(() => {
            const handleScroll = () => {
                const scrollTop = window.pageYOffset;
                if (scrollTop > 0 && !isScrolled) {
                    setIsScrolled(true);
                } else if (scrollTop === 0 && isScrolled) {
                    setIsScrolled(false);
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, [isScrolled]);
    }



        //here all the routes

        const navLinks = <>
            <ul>
                <Link to='/'>
                    <li className="group flex  cursor-pointer flex-col">
                        HOME<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-white transition-all duration-300 group-hover:w-1/5"></span>
                    </li>
                </Link>
                <Link to='/men'>
                    <li className="group flex  cursor-pointer flex-col">
                        MEN<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-white transition-all duration-300 group-hover:w-1/6"></span>
                    </li>
                </Link>
                <Link to='/women'>
                    <li className="group flex  cursor-pointer flex-col">
                        WOMEN<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-white transition-all duration-300 group-hover:w-1/4"></span>
                    </li>
                </Link>
                <Link to='/children'>
                    <li className="group flex  cursor-pointer flex-col">
                        CHILDREN<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-white transition-all duration-300 group-hover:w-1/3"></span>
                    </li>
                </Link>
                <Link>
                    <li className="group flex  cursor-pointer flex-col">
                        WORLD OF FashionFusion<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-white transition-all duration-300 group-hover:w-3/4"></span>
                    </li>
                </Link>
            </ul>
        </>

        const handleProfileMenuOpen = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleMobileMenuClose = () => {
            setMobileMoreAnchorEl(null);
        };

        const handleMenuClose = () => {
            setAnchorEl(null);
            handleMobileMenuClose();
        };

        const handleMobileMenuOpen = (event) => {
            setMobileMoreAnchorEl(event.currentTarget);
        };

        const toggleSidebar = () => {
            setOpenSidebar(!openSidebar);
        };

        const menuId = 'primary-search-account-menu';
        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                id={menuId}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            </Menu>
        );

        const mobileMenuId = 'primary-search-account-menu-mobile';
        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                id={mobileMenuId}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isMobileMenuOpen}
                onClose={handleMobileMenuClose}
            >
                <MenuItem onClick={handleProfileMenuOpen}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Menu>
        );
        return (
            <Box sx={{ flexGrow: 1 }} style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,

            }}>
                <AppBar position="static" sx={{
                    backgroundColor: 'transparent',
                    transition: 'background-color 0.3s ease',
                    backdropFilter: isScrolled ? 'blur(2px)' : 'none', // Apply blur effect conditionally
                    '&:hover': {
                        backgroundColor: (theme) => alpha(theme.palette.common.black, 0.5),
                    },
                }}>
                    <Toolbar style={{ justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={toggleSidebar}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                anchor="left"
                                open={openSidebar}
                                onClose={() => setOpenSidebar(false)}
                                sx={{
                                    width: 400,
                                    flexShrink: 0,
                                    '& .MuiDrawer-paper': {
                                        width: 400,
                                        boxSizing: 'border-box',
                                        backgroundColor: 'black',
                                        paddingTop: '90px',
                                    },
                                    '& ul': {
                                        listStyleType: 'none',
                                        padding: 0,
                                    },
                                    '& li': {
                                        marginBottom: '20px', // Add vertical space between list items
                                    },
                                }}
                            >
                                <Typography variant="h6" align="left" marginLeft={7} style={{ color: '#fff' }}> {/* Set white color */}
                                    {navLinks}
                                </Typography>
                            </Drawer>


                            {renderMenu}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <TextTypography>
                                Fashion Fusion
                            </TextTypography>
                        </Box>
                        {/* <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search> */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <Login />
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Box >
        );
    }

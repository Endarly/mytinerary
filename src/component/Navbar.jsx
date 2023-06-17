import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import LocationOnIcon from '@mui/icons-material/LocationOn'
// import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
// import LoginIcon from '@mui/icons-material/Login';
// import LocalAirportIcon from '@mui/icons-material/LocalAirport';
// import PersonIcon from '@mui/icons-material/Person';
import flaticonImage from '../assests/airplane.png';
import citiesImage from '../assests/international.png';
import personImage from '../assests/gender-identity.png';

import { Link as LinkRouter } from "react-router-dom";

import '../style/navbar.css';

const pages = [
  {
    id: 1,
    name: 'Cities',
    path: '/Cities',
    icon: <img src={citiesImage} alt="Flaticon" width="40px" height="40px" />
  },

  // {
  //   id: 2,
  //   name: 'Sign Up',
  //   path: '/SignUp',
  //   icon: <PersonAddAltIcon/>
  // },

  // {
  //   id: 3,
  //   name: 'Log In',
  //   path: ' /LogIn',
  //   icon: <LoginIcon/>
  // }
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LinkRouter to={'/Home'}>
            {/* <LocalAirportIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} color="white" /> */}
            <img src={flaticonImage} alt="Flaticon" width="50px" height="50px" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              MYTINERARY
            </Typography>
          </LinkRouter>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <LinkRouter to={page.path}>
                  <MenuItem
                    key={index}
                    onClick={handleCloseNavMenu}
                    style={{
                      background: 'linear-gradient(to right, #df4617, #4b6491)',
                    }}
                  >
                    <Typography textAlign="center">{page.icon} {page.name}</Typography>
                  </MenuItem>
                </LinkRouter>
              ))}
            </Menu>
          </Box>
          {/* <LocalAirportIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} color="white" /> */}
          {/* <img src={flaticonImage} alt="Flaticon" width="50px" height="50px" /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            MYTINERARY
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <LinkRouter to={page.path}>
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.icon}{page.name}
                </Button>
              </LinkRouter>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <PersonIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} style={{ color: 'white', fontSize: '35px' }} /> */}
                <img src={personImage} alt="Flaticon" width="40px" height="40px" />

              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
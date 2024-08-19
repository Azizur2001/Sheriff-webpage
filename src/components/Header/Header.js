import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Menu, MenuItem, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ isAdmin }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();
  const user = auth.currentUser;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleNavigation = (e, target) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/#${target}`);
      setTimeout(() => {
        document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
    }
    handleCloseMenu();
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem('isAdmin');
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error signing out: ', error);
      });
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CLASSICAL CUTZ
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
          <Button color="inherit" onClick={(e) => handleNavigation(e, 'hero')}>Home</Button>
          <Button color="inherit" onClick={(e) => handleNavigation(e, 'about')}>About</Button>
          <Button color="inherit" onClick={(e) => handleNavigation(e, 'services')}>Services</Button>
          <Button color="inherit" onClick={(e) => handleNavigation(e, 'gallery')}>Gallery</Button>
          <Button color="inherit" onClick={(e) => handleNavigation(e, 'testimonials')}>Testimonials</Button>
          <Button color="inherit" onClick={(e) => handleNavigation(e, 'contact')}>Contact</Button>
          {isAdmin && <Button color="inherit" onClick={() => navigate('/view-appointments')}>View Appointments</Button>}
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleOpenMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={(e) => handleNavigation(e, 'hero')}>Home</MenuItem>
            <MenuItem onClick={(e) => handleNavigation(e, 'about')}>About</MenuItem>
            <MenuItem onClick={(e) => handleNavigation(e, 'services')}>Services</MenuItem>
            <MenuItem onClick={(e) => handleNavigation(e, 'gallery')}>Gallery</MenuItem>
            <MenuItem onClick={(e) => handleNavigation(e, 'testimonials')}>Testimonials</MenuItem>
            <MenuItem onClick={(e) => handleNavigation(e, 'contact')}>Contact</MenuItem>
            {isAdmin && <MenuItem onClick={() => navigate('/view-appointments')}>View Appointments</MenuItem>}
          </Menu>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          {!user ? (
            <>
              <Button color="inherit" onClick={() => navigate('/signup')}>Sign Up</Button>
              <Button color="inherit" onClick={() => navigate('/admin-login')}>Login</Button>
            </>
          ) : (
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

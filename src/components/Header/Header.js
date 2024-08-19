// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { getAuth, signOut } from 'firebase/auth';
// import './Header.css';

// const Header = ({ isAdmin }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const auth = getAuth();
//   const user = auth.currentUser; // This will detect if any user is logged in

//   const handleNavigation = (e, target) => {
//     e.preventDefault();
//     if (location.pathname !== '/') {
//       navigate(`/#${target}`);
//       setTimeout(() => {
//         document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
//       }, 100);
//     } else {
//       document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
//     }
//   };
  

//   const handleLogout = () => {
//     signOut(auth)
//       .then(() => {
//         localStorage.removeItem('isAdmin');
//         window.location.reload();
//       })
//       .catch((error) => {
//         console.error('Error signing out: ', error);
//       });
//   };

//   return (
//     <header className="header">
//       <div className="logo">
//         <h1>CLASSICAL CUTZ</h1>
//       </div>
//       <nav>
//         <ul>
//           <li><a href="#hero" onClick={(e) => handleNavigation(e, 'hero')}>Home</a></li>
//           <li><a href="#about" onClick={(e) => handleNavigation(e, 'about')}>About</a></li>
//           <li><a href="#services" onClick={(e) => handleNavigation(e, 'services')}>Services</a></li>
//           <li><a href="#gallery" onClick={(e) => handleNavigation(e, 'gallery')}>Gallery</a></li>
//           <li><a href="#testimonials" onClick={(e) => handleNavigation(e, 'testimonials')}>Testimonials</a></li>
//           <li><a href="#contact" onClick={(e) => handleNavigation(e, 'contact')}>Contact</a></li>
//           {isAdmin && <li><a href="/view-appointments">View Appointments</a></li>}
//         </ul>
//       </nav>
//       <div className="auth-buttons">
//         {!user ? (
//           <>
//             <button onClick={() => navigate('/signup')}>Sign Up</button>
//             <button onClick={() => navigate('/admin-login')}>Login</button>
//           </>
//         ) : (
//           <button onClick={handleLogout}>Logout</button>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;


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

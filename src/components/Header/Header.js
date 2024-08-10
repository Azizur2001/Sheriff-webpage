// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { getAuth, signOut } from 'firebase/auth';
// import './Header.css';

// const Header = ({ isAdmin }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const auth = getAuth();

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
//     signOut(auth).then(() => {
//       localStorage.removeItem('isAdmin');
//       window.location.reload();
//     }).catch((error) => {
//       console.error('Error signing out: ', error);
//     });
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
//         {!isAdmin && <button onClick={() => navigate('/signup')}>Sign Up</button>}
//         {!isAdmin ? (
//           <button onClick={() => navigate('/admin-login')}>Login</button>
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
import './Header.css';

const Header = ({ isAdmin }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();
  const user = auth.currentUser; // This will detect if any user is logged in

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
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem('isAdmin');
      window.location.reload();
    }).catch((error) => {
      console.error('Error signing out: ', error);
    });
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>CLASSICAL CUTZ</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#hero" onClick={(e) => handleNavigation(e, 'hero')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleNavigation(e, 'about')}>About</a></li>
          <li><a href="#services" onClick={(e) => handleNavigation(e, 'services')}>Services</a></li>
          <li><a href="#gallery" onClick={(e) => handleNavigation(e, 'gallery')}>Gallery</a></li>
          <li><a href="#testimonials" onClick={(e) => handleNavigation(e, 'testimonials')}>Testimonials</a></li>
          <li><a href="#contact" onClick={(e) => handleNavigation(e, 'contact')}>Contact</a></li>
          {isAdmin && <li><a href="/view-appointments">View Appointments</a></li>}
        </ul>
      </nav>
      <div className="auth-buttons">
        {!user ? (
          <>
            <button onClick={() => navigate('/signup')}>Sign Up</button>
            <button onClick={() => navigate('/admin-login')}>Login</button>
          </>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const isAuthorized = localStorage.getItem('isAuthorized') === 'true';

  const handleLogin = () => {
    // For simplicity, let's set the value in localStorage
    localStorage.setItem('isAuthorized', 'true');
    window.location.reload();
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthorized');
    window.location.reload();
  };

  return (
    <div className="home">
      <h1>Welcome to the Barber Shop</h1>
      {/* Other content */}
      {isAuthorized ? (
        <>
          <button onClick={() => navigate('/view-appointments')}>View Appointments</button>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login as Admin</button>
      )}
    </div>
  );
};

export default Home;

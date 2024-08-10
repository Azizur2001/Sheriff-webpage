import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutUs from './components/AboutUs/AboutUs';
import ServicesComponent from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import ContactUs from './components/ContactUs/ContactUs';
import Appointment from './components/Appointment/Appointment';
import Footer from './components/Footer/Footer';
import SubmitReview from './components/SubmitReview/SubmitReview';
import AdminLogin from './components/AdminLogin/AdminLogin';
import SignUp from './components/Signup/Signup';
import ViewAppointments from './components/ViewAppointments/ViewAppointments';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        if (userDoc.exists() && userDoc.data().role === 'admin') {
          setIsAdmin(true);
          localStorage.setItem('isAdmin', 'true');
        } else {
          setIsAdmin(false);
          localStorage.removeItem('isAdmin');
        }
      } else {
        setUser(null);
        setIsAdmin(false);
        localStorage.removeItem('isAdmin');
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Header isAdmin={isAdmin} />
      <Routes>
        <Route path="/" element={
          <div className="scroll-container">
            <section id="hero" className="section">
              <HeroSection />
            </section>
            <section id="about" className="section">
              <AboutUs />
            </section>
            <section id="services" className="section">
              <ServicesComponent />
            </section>
            <section id="gallery" className="section">
              <Gallery />
            </section>
            <section id="testimonials" className="section">
              <Testimonials />
            </section>
            <section id="contact" className="section">
              <ContactUs />
            </section>
          </div>
        } />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/submit-review" element={<SubmitReview />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/gallery" element={<Gallery />} />
        {isAdmin && <Route path="/view-appointments" element={<ViewAppointments />} />}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;







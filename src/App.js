import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import AppRoutes from './components/routing';
import { Footer, Header, Specials, Testimonials } from './containers';
import { About, Navbar } from './components';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  </BrowserRouter>
);

const MainContent = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' || location.pathname === '/little-lemon-capstone/' ? (
        <>
          <div className="colored__bg">
            <Header />
          </div>
          <Specials />
          <Testimonials />
          <About />
        </>
      ) : (
        <AppRoutes />
      )}
    </>
  );
};

export default App;

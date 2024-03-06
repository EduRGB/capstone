import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Menu = () => (
  <>
    <p><Link to="/little-lemon-capstone/">Home</Link></p>
    <p><Link to="/little-lemon-capstone/about">About</Link></p>
    <p><Link to="/little-lemon-capstone/menu">Menu</Link></p>
    <p><Link to="/little-lemon-capstone/booking">Reservations</Link></p>
    <p><Link to="/little-lemon-capstone/login">Login</Link></p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="litlem__navbar">
      <div className="litlem__navbar-links">
        <div className="litlem__navbar-links_logo">
          <Link to="/little-lemon-capstone/">
            <img src={logo} alt="Little Lemon Logo" />
          </Link>
        </div>
        <div className="litlem__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="litlem__navbar-sign">
        <p>Sign Up</p>
        <button type="button">Login</button>
      </div>
      <div className="litlem__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#495e57" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#495e57" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="litlem__navbar-menu_container scale-up-center">
            <div className="litlem__navbar-menu_container-links">
              <Menu />
              <div className="litlem__navbar-menu_container-links-sign">
                <p>Sign Up</p>
                <button type="button">Login</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

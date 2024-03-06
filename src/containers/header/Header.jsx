import React from 'react'
import './header.css'
import {Link} from 'react-router-dom';
import marioAdrien from '../../assets/MarioandAdrian_b.jpg'

const Header = () => {
  return (
    <header className='litlem_header section__padding' id='home'>
      <div className='litlem_header-content'>
        <h1>Little Lemon</h1>
        <h2 className='header_text-city'>Citrus Grove</h2>
        <p>Our restaurant in the heart of Citrus Grove, offers a cozy haven where citrus-inspired dishes meet a friendly ambiance, creating a delightful culinary experience with genuine hospitality.</p>

        <Link to="/little-lemon-capstone/booking" className='litlem_header-content__button'>
          <button type='button'>Reserve a Table</button>
        </Link>
      </div>

      <div className='litlem_header-hero-image'>
        <img src={marioAdrien} alt='Mario and Adrien' />
      </div>
    </header>
  );
}

export default Header;
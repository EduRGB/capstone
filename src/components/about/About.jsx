import React from 'react'
import './about.css'
import Chef from '../../assets/chef.jpg'
import Bruscheta from '../../assets/bruchetta.png'

export default function About() {
  return (
    <article className="about" id='about'>
      <section className="about-title">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="about-description">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
      </section>

      <section className="stacked-image">
          <img className="stacked-image2" src={Bruscheta} alt="Chef2"></img>
          <img className="stacked-image1" src={Chef} alt="Chef"></img>
      </section>
    </article>
  );
}
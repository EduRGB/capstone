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
          <p className="about-description">Discover Little Lemon, an oasis in Citrus Grove where citrus-infused wonders await. Picture this: Lemon Lullaby Pasta, a dance of noodles in a sunshine-kissed lemon cream sauce, or the Zesty Zephyr Burger, a tantalizing blend of grilled chicken, lemon aioli, and secret citrus spices. Immerse yourself in a lemon-themed haven with whimsical decor, guided by our friendly Lemonites.</p>
      </section>

      <section className="stacked-image">
          <img className="stacked-image2" src={Bruscheta} alt="Chef2"></img>
          <img className="stacked-image1" src={Chef} alt="Chef"></img>
      </section>
    </article>
  );
}
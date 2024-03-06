import React from 'react';
import './testimonials.css';
import TestimonialsCard from '../../components/testimonialsCard/testimonialsCard';
import AlexTaylor from '../../assets/people/person_1.jpg';
import CaseyJordan from '../../assets/people/person_2.jpg';
import JordanSmith from '../../assets/people/person_3.jpg';
import TaylorMiller from '../../assets/people/person_4.jpg';

export default function Testimonials() {
  return (
    <section className="testimonials">
      <article className="testimonials-topbar">
        <h1>Testimonials</h1>
      </article>
      <section className="testimonials-cards">
        <TestimonialsCard
          image={TaylorMiller}
          name="Taylor Miller"
          description="Little Lemon's flavors are a taste sensation. Perfect for a cozy meal with friends."
          rating={4}
        />
        <TestimonialsCard
          image={AlexTaylor}
          name="Alex Taylor"
          description="Little Lemon is a hidden gem! Authentic Mediterranean dishes for a delightful dining experience."
          rating={4}
        />
        <TestimonialsCard
          image={CaseyJordan}
          name="Casey Jordan"
          description="Little Lemon sets the bar high for Mediterranean cuisine. Extraordinary flavors. Highly recommended!"
          rating={5}
        />
        <TestimonialsCard
          image={JordanSmith}
          name="Jordan Smith"
          description="Little Lemon's family-friendly atmosphere and delicious Mediterranean flavors make it a favorite for both adults and kids."
          rating={3}
        />
      </section>
    </section>
  );
}
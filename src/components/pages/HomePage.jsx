import React from 'react';
import { Header, Specials, Testimonials } from '../../containers';
import { About } from '..';

export default function HomePage() {
  return (
    <>
      <div className="colored__bg">
        <Header />
      </div>
      <Specials />
      <Testimonials />
      <About />
    </>
  );
}

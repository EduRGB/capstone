import React from 'react';
import Card from './Card';

const Main = () => {
  return (
    <main>
      <div className="card-container">
        <Card
          title="Chef's Special"
          content="Indulge in our chef's special dish, carefully crafted to tantalize your taste buds."
        />
        <Card
          title="Daily Fresh Catch"
          content="Savor the flavors of the ocean with our daily catch, prepared with love and expertise."
        />
        <Card
          title="Vegetarian Delight"
          content="Explore our diverse vegetarian menu, where freshness and flavor take center stage."
        />
      </div>
    </main>
  );
}

export default Main;

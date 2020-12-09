import React from 'react';
import Pokemon from './pokemon';

const PokeArea = () => {
  return (
    <div className="container">
      <div className="row justify-content-space-between align-items-center">
        <Pokemon />
        <Pokemon id={2} />
        <Pokemon id={3} />
      </div>
      <div className="row justify-content-space-between align-items-center mt-5">
        <Pokemon id={4} />
        <Pokemon id={5} />
        <Pokemon id={6} />
      </div>
      <div className="row justify-content-space-between align-items-center mt-5">
        <Pokemon id={7} />
        <Pokemon id={8} />
        <Pokemon id={9} />
      </div>
    </div>
  );
};

export default PokeArea;

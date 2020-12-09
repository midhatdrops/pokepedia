import React, { Fragment } from 'react';
import Header from '../Components/Header/header';
// import Pokemon from '../Models/pokemon';
import Pokearea from '../Models/pokegrid';

const Pokepedia = () => {
  return (
    <Fragment>
      <Header />
      <br />
      <Pokearea></Pokearea>
    </Fragment>
  );
};

export default Pokepedia;

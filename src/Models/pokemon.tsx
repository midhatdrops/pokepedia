import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../Assets/Styles/pokemon.css';

interface Types {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

const Pokemon = ({ id = 1 }) => {
  const [number, SetNumber] = useState<number>();
  const [name, SetName] = useState<string>();
  // const [Types, SetTypes] = useState<Types[]>([]);
  useEffect(() => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      SetNumber(response.data.id);
      SetName(response.data.name);
      // SetTypes(response.data.types);
      return console.log(response.data.types[0].type);
    });
  });
  return (
    <div className="container pokearea">
      <div className="row justify-content-center align-itens-center">
        <div className="col-4 photo"></div>
        <div className="col-8 align-itens-center">
          <div className="container">
            <div className="row justify-content-center align-items-center  mt-2">
              <div className="col-12 text-center">
                <p className="title">{name}</p>
                <div className="divider"></div>
              </div>
            </div>
            <div className="row justify-content-center align-items-center mt-2">
              <div className="col-12 text-center">
                <p className="info mt-3">
                  <i>{`# ${number}`}</i>
                </p>
              </div>
            </div>
            <div className="row justify-content-center align-items-center mt-2">
              <div className="col-3 text-center">
                <div className="type" style={{ backgroundColor: 'green' }}>
                  Grass
                </div>
              </div>
              <div className="col-3 text-center">
                <div className="type" style={{ backgroundColor: 'blue' }}>
                  Water
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;

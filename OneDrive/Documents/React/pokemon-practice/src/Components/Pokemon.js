import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Pokemon() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(undefined);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();

      console.log(data);
      setPokemon(data);
    }

    if (name) {
      fetchData();
    }
  }, [name])

  const display = pokemon && (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt='pokemon' />
    </div>
  )

  return (
    <>
      {display}
    </>
  )
}

export default Pokemon
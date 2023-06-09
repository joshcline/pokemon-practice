import { useState, useEffect} from 'react';
import { Link } from "react-router-dom";

function Gallery() {
  const [data, setData] = useState([]);
  const [apiUrl, setApiUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextUrl, setNextUrl] = useState('');
  const [previousUrl, setPreviousUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();

      setData(data.results);
      setNextUrl(data.next);
      setPreviousUrl(data.previous);
    }

    fetchData()
  }, [apiUrl])

  const fetchPreviousPage = () => {
    if(!previousUrl) return
    setApiUrl(previousUrl);
  }

  const fetchNextPage = () => {
    if(!nextUrl) return
    setApiUrl(nextUrl);
  }
  const display = data.map(pokemon => {
    return (
      <p key={pokemon.name}>
        <Link  to={`/pokemon/${pokemon.name}`}>
          {pokemon.name}
        </Link>
      </p>
    )
  })

  return (
    <div>
        <h1>Pokemon!</h1>
        <div style={{'display': 'inline-block'}}>
          <button onClick={fetchPreviousPage}>Previous</button>
          <button onClick={fetchNextPage}>Next</button>
        </div>
      {display}
    </div>
  )
}

export default Gallery;
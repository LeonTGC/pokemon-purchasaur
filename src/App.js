import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./App.css";
import { getData } from "./utils/getData";

const App = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=10");

  const handleFetch = async () => {
    setLoading(true);
    try {
      let response = await fetch(url);
      if (response.status !== 200) {
        throw new Error("error: ", Error);
      }
      let data = await response.json();
      let update = await getData(data);
      setData(update);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  const handleBasketAdd = (pokemonIndex) => {
    setBasket([...basket, data.results[pokemonIndex]]);
  };

  const handleRemove = (pokemonIndex) => {
    let newBasket = [...basket];
    newBasket.splice(pokemonIndex, 1);
    setBasket(newBasket);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
    handleFetch();
  }, [url]);

  if (error) {
    return <p>an error has occured</p>;
  } else if (loading) {
    return <p>loading...</p>;
  } else {
    return (
      <div className="appWrapper">
        <header>
          <h1>purchase pokemon</h1>
          <div></div>
        </header>
        <div>
          {data.results.map((pokemon, index) => {
            return (
              <Card
                key={index}
                pokemon={pokemon}
                addPokemon={() => handleBasketAdd(index)}
              />
            );
          })}
          <button
            onClick={() => setUrl(data.previous !== null ? data.previous : url)}
          >
            prev
          </button>
          <button onClick={() => setUrl(data.next !== null ? data.next : url)}>
            next
          </button>
        </div>
      </div>
    );
  }
};

export default App;

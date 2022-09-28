import { useEffect, useState } from "react";
import Modal from "react-modal";
import Card from "./components/Card";
import Basket from "./components/Basket";
import "./App.css";
import { getData } from "./utils/getData";
import Content from "./components/Content";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const App = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=10");
  const [total, setTotal] = useState(0);

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

  let basketTotal = () => {
    let newBasket = 0;
    basket.map((pokemon) => {
      newBasket += parseInt(pokemon.price);
    });
    setTotal(newBasket);
  };
  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
    basketTotal();
  }, [basket]);

  useEffect(() => {
    handleFetch();
  }, [url]);

  if (error) {
    return <p>an error has occured</p>;
  } else if (loading) {
    return <p>loading...</p>;
  } else {
    return (
      <div id="app">
        <header>
          <div id="headerTextWrapper">
            <h1>Pokemon Purchasaur</h1>
          </div>
          <div id="basketWrapper">
            <button onClick={() => setOpen(true)}>basket</button>
          </div>
        </header>
        <Content
          url={url}
          data={data}
          setUrl={setUrl}
          handleBasketAdd={handleBasketAdd}
        />
        <Modal
          ariaHideApp={false}
          style={customStyles}
          isOpen={open}
          onRequestClose={() => setOpen(false)}
          center
        >
          <Basket
            key="basket"
            total={total}
            basket={basket}
            removePokemon={handleRemove}
          />
        </Modal>
      </div>
    );
  }
};

export default App;

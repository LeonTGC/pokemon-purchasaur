import "../App.css";
import Card from "./Card";
const Content = ({ data, handleBasketAdd, setUrl, url }) => {
  let newUrlHandler = (newUrl) => {
    setUrl(newUrl !== null ? newUrl : url);
  };
  return (
    <div id="contentWrapper">
      <div id="resultsWrapper">
        {data.results.map((pokemon, index) => {
          return (
            <Card
              key={index}
              pokemon={pokemon}
              addPokemon={() => handleBasketAdd(index)}
            />
          );
        })}
      </div>
      <div id="buttonWrapper">
        <button
          class="pageButtons"
          id="previousButton"
          onClick={() => newUrlHandler(data.previous)}
        >
          prev
        </button>
        <button
          class="pageButtons"
          id="nextButton"
          onClick={() => newUrlHandler(data.next)}
        >
          next
        </button>
      </div>
    </div>
  );
};
export default Content;

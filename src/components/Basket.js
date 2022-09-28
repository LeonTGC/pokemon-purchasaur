import CheckoutCard from "./CheckoutCard";

const Basket = ({ basket, removePokemon, total }) => {
  return (
    <div>
      <h2>basket</h2>
      {basket.map((pokemon, index) => {
        return (
          <div>
            <CheckoutCard
              key={index}
              removePokemon={() => removePokemon(index)}
              pokemon={pokemon}
            />
          </div>
        );
      })}
      <h2>total: {total}</h2>
    </div>
  );
};

export default Basket;

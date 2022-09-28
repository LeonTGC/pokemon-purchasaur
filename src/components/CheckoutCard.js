const CheckoutCard = ({ pokemon, removePokemon }) => {
  return (
    <div>
      <div>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.img} />
        <h2>£{pokemon.price}</h2>
      </div>
      <button onClick={removePokemon}>Remove</button>
    </div>
  );
};

export default CheckoutCard;

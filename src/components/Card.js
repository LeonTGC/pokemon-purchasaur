const Card = ({ pokemon, addPokemon }) => {

    return (
        <div id="cardWrapper">
           <h2>{pokemon.name}</h2>
           <img src={pokemon.img} />
           <h3>£{pokemon.price}</h3>
           <button id="addButton" onClick={addPokemon}>add</button>
        </div>
    )
}
export default Card
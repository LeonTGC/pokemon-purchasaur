const Card = ({ pokemon, addPokemon }) => {

    return (
        <div>
           <h2>{pokemon.name}</h2>
           <img src={pokemon.img} />
           <h3>{pokemon.price}</h3>
           <button onClick={addPokemon}>add</button>
        </div>
    )
}
export default Card
import { useState } from "react";
import "./App.css"
import PokemonCard from "./components/PokemonCard"
import { func } from "prop-types";



function App() {
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickLeft = () => {
    setPokemonIndex(pokemonIndex - 1)
  }

  const handleClickRight = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  return (
    <div className="divCard">

      {pokemonIndex > 0 ? <button onClick={handleClickLeft}>Précédent</button> : <button hidden></button>}

      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

      {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickRight}>Suivant</button> : <button hidden></button>}
      
    </div>
  );

}

export default App;

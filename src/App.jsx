import { useState, useEffect } from "react";
import Card from "./components/Card";
import axios from "axios";

function App() {
  const [offset, setOffset] = useState(0);
  let url = "https://pokeapi.co/api/v2/pokemon";

  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url, {
        params: { offset: offset, limit: 20 },
      });
      const data = response.data;

      const promises = data.results.map(async (pokemon) => {
        const pokemonResponse = await axios.get(pokemon.url);
        return { ...pokemonResponse.data };
      });

      const pokemonDetails = await Promise.all(promises);
      setPokemonList(pokemonDetails);
    };

    fetchData();
    // console.log(pokemonList);
  }, [offset]);


  const prevPage = () => {
    setOffset((offset) => offset - 20);
    console.log(offset);
  };

  const nextPage = () => {
    setOffset((offset) => offset + 20);
    console.log(offset);
  };

  return (
    <>
      <div className="container ">
        <h1 style={{ textAlign: "center" }}>Pokemon Dex</h1>
        <div className="row">
          {pokemonList.map((pokemon, index) => (
            <div key={index} className="col-sm12 col-md-4 col-lg-3">
              <Card pokemon={pokemon} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col text-left">
            {offset !== 0 && (
              <button className="btn btn-primary" onClick={prevPage}>
                Previous
              </button>
            )}
          </div>
          <div className="col d-flex justify-content-center" style={{ fontSize: "1.5rem" }}>{offset / 20 + 1}</div>
          <div className="col d-flex justify-content-end">
            <button className="btn btn-primary" onClick={nextPage}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

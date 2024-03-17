import { useState, useEffect } from "react";
import Card from "./components/Card";
import axios from "axios";

//let res = "https://pokeapi.co/api/v2/pokemon?offset=0&amp;limit=151"

//console.log(poke);
function App() {
  const [pokemonAll, setPokemonAll] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  //const [prevUrl, setPrevUrl] = useState("");
  const [offset, setOffset] = useState(0);
  let url = "https://pokeapi.co/api/v2/pokemon";
  //const [prev, setPrev] = useState();
  //const [next, setNext] = useState();

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    console.log("Hello");
    let pokel = [];
    axios
      .get(url, { params: { offset: offset, limit: 20 } })
      .then((response) => {
        setPokemonAll(response.data.results);
        
        //console.log(response.data.results);
        response.data.results.forEach((element) => {
          //console.log(element);
          // 
          axios.get(element.url).then((res) => {
            //pokel.push(res.data)
            setPokemons((oldPokemon) => [...oldPokemon, res.data])
            //console.log(pokel);
            
          })
          
        });
        console.log("Pokemons : ",pokemons);
        
        //console.log(pokemons);
        //setPrevUrl(response.data.previous);
        //setNextUrl(response.data.next);
        //console.log(previous)
      });
  }, [offset]);

  const prevPage = () => {
    setOffset((offset) => offset - 20);
    console.log(offset);
  };

  const nextPage = () => {
    setOffset((offset) => offset + 20);
    console.log(offset);
  };

  // console.log(offset);
  return (
    <>
      <div className="container ">
        <h1 style={{ textAlign: "center" }}>Pokemon Dex</h1>
        <div className="row">
          {pokemonAll.map((pokemon, index) => (
            <div key={index} className="col-sm12 col-md-4 col-lg-3">
              <Card url={pokemon.url} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col text-left">
            <button className="btn btn-primary" onClick={prevPage}>
              Previous
            </button>
          </div>
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

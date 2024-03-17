import axios from "axios";
import React, { useEffect, useState } from "react";
import Hp from "../assets/hp.png";
import Attack from "../assets/swords.png";
import Defense from "../assets/shield.png";
import SpecialAttack from "../assets/sword.png";
import SpecialDefense from "../assets/shield1.png";
import Speed from "../assets/run.png";

function Card({ url }) {
  const [urlPokemon, setUrlPokemon] = useState();
  const [poke, setPoke] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  const pic = [Hp, Attack, Defense, SpecialAttack, SpecialDefense, Speed];

  const toggleDetail = () => {
    setShowDetail(!showDetail);
    // console.log(url);
    // console.log(showDetail);
  };

//   useEffect(() => {
//     axios.get(url).then((response) => {
//       setPoke(response.data);
//       //console.log(response.data);
//       setUrlPokemon(url);
//     });
//   }, []);

  return (
    <div>
      <div className="card m-3">
        <div className=" d-flex justify-content-center m-3">
          <h2>{poke.name}</h2>
        </div>
        <img
          src={poke?.sprites?.other?.home.front_default}
          alt={poke.name}
        />
        <div className="row">
          {poke?.types?.map((type, index) => (
            <div className="col d-flex justify-content-center m-3" key={index}>
              <div>{type.type.name}</div>
            </div>
          ))}
        </div>

        <button className="btn btn-primary" onClick={toggleDetail}>
          Detail
        </button>

        {showDetail && (
          <div> 
            <div className="status">
              {poke.stats.map((stat, index) => (
                <div key={index}>
                  <div>
                    <div className="row"></div>
                    <img
                      src={pic[index]}
                      style={{ width: "9%", margin: "4%" }}
                      alt={stat.stat.name}
                    />
                    {stat.stat.name} : {stat.base_stat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;

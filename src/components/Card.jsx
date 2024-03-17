import React, { useState } from "react";
import Hp from "../assets/hp.png";
import Attack from "../assets/swords.png";
import Defense from "../assets/shield.png";
import SpecialAttack from "../assets/sword.png";
import SpecialDefense from "../assets/shield1.png";
import Speed from "../assets/run.png";
import { capFirstChar } from "../utils/StringUtil";

function Card({ pokemon }) {
  const [showDetail, setShowDetail] = useState(false);

  const pic = [Hp, Attack, Defense, SpecialAttack, SpecialDefense, Speed];

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };
  console.log(pokemon);

  return (
    <div>
      <div className="card m-3">
        <div className=" d-flex justify-content-center m-3">
          <h2>{capFirstChar(pokemon.name)}</h2>
        </div>
        <img
          src={pokemon?.sprites?.other?.home.front_default}
          alt={pokemon.name}
        />
        <div className="row">
          {pokemon?.types?.map((type, index) => (
            <div className="col d-flex justify-content-center m-3" key={index}>
              <div>{capFirstChar(type.type.name)}</div>
            </div>
          ))}
        </div>

        <button className="btn btn-primary" onClick={toggleDetail}>
          Detail
        </button>

        {showDetail && (
          <div>
            <div className="status">
              {pokemon.stats.map((stat, index) => (
                <div key={index}>
                  <div>
                    <div className="row"></div>
                    <img
                      src={pic[index]}
                      style={{ width: "9%", margin: "4%" }}
                      alt={stat.stat.name}
                    />
                    {capFirstChar(stat.stat.name)} : {stat.base_stat}
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

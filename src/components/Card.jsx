import React, { useState } from "react";
import Hp from "../assets/hp.png";
import Attack from "../assets/swords.png";
import Defense from "../assets/shield.png";
import SpecialAttack from "../assets/sword.png";
import SpecialDefense from "../assets/shield1.png";
import Speed from "../assets/run.png";
import { capFirstChar } from "../utils/StringUtil";
import Detail from "./Detail";
import "../utils/colorType.css";
import { getTypeClass } from "../utils/ColorType";

function Card({ pokemon }) {
  const [showDetail, setShowDetail] = useState(false);

  const pic = [Hp, Attack, Defense, SpecialAttack, SpecialDefense, Speed];

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div>
      <div className="card m-3">
        <div className="d-flex justify-content-center m-3">
          <h2>{capFirstChar(pokemon.name)}</h2>
        </div>
        <img
          src={pokemon?.sprites?.other?.home.front_default}
          alt={pokemon.name}
          className="img-fluid"
        />
        <div className="row">
          {pokemon?.types?.map((type, index) => (
            <div
              className={`col d-flex justify-content-center m-3 ${getTypeClass(
                type.type.name
              )}`}
              key={index}
            >
              <div>{capFirstChar(type.type.name)}</div>
            </div>
          ))}
        </div>

        <button className="btn btn-primary" onClick={toggleDetail}>
          Detail
        </button>

        {showDetail && (
          <div>
            <div className="modal-backdrop fade show"></div>
            <div
              className="modal fade show"
              style={{ display: "block" }}
              tabIndex="-1"
            >
              <Detail
                pokemon={pokemon}
                pic={pic}
                capFirstChar={capFirstChar}
                toggleDetail={toggleDetail}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;

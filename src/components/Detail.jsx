import React from "react";
import "../utils/colorType.css";
import { getTypeClass } from "../utils/ColorType";

function Detail({ pokemon, pic, capFirstChar, toggleDetail }) {
  return (
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            {capFirstChar(pokemon.name)} Details
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={toggleDetail}
          ></button>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={pokemon?.sprites?.other?.home.front_default}
                alt={pokemon.name}
                className="img-fluid"
              />
              <div className="row">
                {pokemon?.types?.map((type, index) => (
                  <div
                    className="col d-flex justify-content-center m-3"
                    key={index}
                  >
                    <div className={`col d-flex justify-content-center m-3 ${getTypeClass(type.type.name)}`}>{capFirstChar(type.type.name)}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="status m-5">
                {pokemon.stats.map((stat, index) => (
                  <div key={index} className="row mb-3">
                    <div className="col">
                      <img
                        src={pic[index]}
                        style={{ width: "auto", maxHeight: "2.5em" }}
                        alt={stat.stat.name}
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-9 d-flex align-items-center ">
                      <span>
                        {capFirstChar(stat.stat.name)} : {stat.base_stat}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;

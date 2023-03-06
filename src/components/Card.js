import React from "react";

const Card = ({ pays }) => {
  return (
    <li className="card">
      <div>
        <img
          src={pays.flags.svg}
          alt={"drapeau " + pays.translations.fra.common}
        />
        <div className="infos">
          <h4>{pays.translations.fra.common}</h4>
          <h5>{pays.capital}</h5>
          <h5>{pays.population.toLocaleString() + " hab."}</h5>
        </div>
      </div>
    </li>
  );
};

export default Card;

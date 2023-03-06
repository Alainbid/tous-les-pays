import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card.js";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(250);
  const btnRadios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [selectedRadio, setSelectedRadio] = useState("");

  useEffect(() => {
    axios

      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <h2>Tous les pays du monde</h2>
      <ul className="radio-container">
        <input
          type="range"
          id="idRange"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {/* <li> { document.getElementsByClassName("card").length} pays</li> */}
        <li> {rangeValue} pays</li>
        {btnRadios.map((continent) => (
          <li>
            <input
              type="radio"
              id={continent}
              name="btnRadio"
              checked={continent === selectedRadio}
              onChange={(e) => {
                setRangeValue(document.getElementsByClassName("card").length)
                setSelectedRadio(e.target.id);
              }}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      <ul>
        {selectedRadio && (
          <button
            onClick={(e) => {
              setSelectedRadio("");
            }}
          >
            Annuler la sélection
          </button>
        )}
      </ul>

      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))
          .sort((a, b) => b.poputation - a.population)
          .slice(0, rangeValue)
          .map((country, index)  => (
            <Card key={index} pays={country} />
          ))}
            
      </ul>
     
    </div>
  );
};

export default Countries;

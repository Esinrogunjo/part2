import axios from "axios";
import React, { useEffect, useState } from "react";

const Languages = ({ languages }) => {
  return (
    <ul>
      {Object.entries(languages).map(([key, value], i) => {
        return <li key={key}>{value}</li>;
      })}
    </ul>
  );
};

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState([]);
  const REACT_APP_OPENWEATHER_API_KEY =
    process.env.REACT_APP_OPENWEATHER_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${REACT_APP_OPENWEATHER_API_KEY}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  return (
    <>
      {weather.main ? (
        <div>
          <h2>Weather in {capital}</h2>
          <div>Temperature {weather.main.temp}°C</div>
          <img
            alt="weather icon"
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <div>Wind {weather.wind.speed} m/s</div>
        </div>
      ) : null}
    </>
  );
};

const Displayone = ({ countriesToDisplay }) => {
  const country = countriesToDisplay[0];
  const languages = country.languages;

  return (
    <div>
      <h2>{country.name.common}</h2>
      <span>capital {country.capital[0]}</span>
      <br />

      <span>area {country.area}</span>
      <br />
      <h5>Languages</h5>
      <Languages languages={languages} />
      <br />
      <img src={country.flags.svg} width="75px" />
      <br />
      <Weather capital={country.capital} />
    </div>
  );
};

export default Displayone;

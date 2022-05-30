import React from "react";

const Displayothers = ({ countriesToDisplay, handleChangedText }) => {
  return (
    <div>
      {countriesToDisplay.map((country) => {
        return (
          <div key={"Country-key-display-orders " + country.name.common}>
            <span>{country.name.common}</span>
            <span>
              {" "}
              <button value={country.name.common} onClick={handleChangedText}>
                show
              </button>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Displayothers;

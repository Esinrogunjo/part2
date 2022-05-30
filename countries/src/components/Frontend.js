import React from "react";
import Displayone from "./Displayone";
import Displayothers from "./Displayothers";

const Frontend = ({ countries, handleChangedText, typedText }) => {
  const countriesToDisplay = typedText
    ? countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(typedText.toLowerCase());
      })
    : [];

  if (countriesToDisplay.length > 10)
    return "Too many countries , please be more specific";
  if (countriesToDisplay.length === 1)
    return (
      <Displayone
        countriesToDisplay={countriesToDisplay}
        handleChangedText={handleChangedText}
      />
    );
  if (countriesToDisplay.length > 0 && countriesToDisplay.length <= 10)
    return (
      <Displayothers
        countriesToDisplay={countriesToDisplay}
        handleChangedText={handleChangedText}
      />
    );
  return "type your country";
};

export default Frontend;

import React from "react";

const Filter = ({ search, handleChangeSearch }) => {
  return (
    <div>
      <p>
        Filter search with{" "}
        <input value={search} type="text" onChange={handleChangeSearch} />
      </p>
    </div>
  );
};

export default Filter;

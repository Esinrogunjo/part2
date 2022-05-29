import React from "react";

const Personform = ({ newName, handleChange, addName }) => {
  return (
    <form onSubmit={addName}>
      <div>
        name:{" "}
        <input
          value={newName.name}
          onChange={(e) => handleChange(e.target.value, "name")}
        />
      </div>
      <div>
        number:{" "}
        <input
          value={newName.phone}
          onChange={(e) => handleChange(e.target.value, "phone")}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Personform;

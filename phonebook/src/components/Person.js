import React from "react";

const Person = ({ key, person }) => {
  return (
    <div key={key}>
      {person.name} {person.number}
    </div>
  );
};

export default Person;

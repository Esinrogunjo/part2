import React from "react";
const Part = ({ name, exercises, id }) => {
  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{exercises}</td>
    </tr>
  );
};

const Total = ({ parts }) => {
  console.log(parts);
  return parts.reduce((prev, curr) => {
    return prev + curr.exercises;
  }, 0);
};

const Content = ({ parts }) => {
  return (
    <div>
      <table>
        {parts.map((part) => {
          return (
            <Part name={part.name} exercises={part.exercises} key={part.id} />
          );
        })}
      </table>

      <div>
        Total:
        <Total parts={parts} />
      </div>
    </div>
  );
};

export default Content;

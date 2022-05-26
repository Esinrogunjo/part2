import React from "react";
import Content from "./Content";
import Header from "./Header";
const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => {
        return (
          <>
            <Header course={course} />
            <Content parts={course?.parts} />
          </>
        );
      })}
    </div>
  );
};

export default Course;

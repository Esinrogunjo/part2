import React from "react";

const Footer = () => {
  const footerStyle = {
    color: "green",
    fontStyle: "italic",
    fontSize: 16,
  };
  return (
    <div style={footerStyle}>
      <br />
      <em>
        People app, Department of Computer Science, University of Helsinki 2022
        by Dauda Abdulganiyu
      </em>
    </div>
  );
};

export default Footer;

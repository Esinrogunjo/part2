import React from "react";

const Notification = ({ message, color }) => {
  if (message === "") {
    return null;
  }

  return <div className={color}>{message}</div>;
};

export default Notification;

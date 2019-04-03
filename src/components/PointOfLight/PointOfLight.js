import React from "react";
//import "./PointOfLight.css";

const randomSize = Math.floor(Math.random() * 20) + 1;
const randomLocationT = Math.floor(Math.random() * 700) + 1;
const randomLocationS = Math.floor(Math.random() * 700) + 1;

const starStyle = {
  backgroundColor: "whitesmoke",
  height: randomSize,
  width: randomSize,
  borderRadius: "50%",
  position: "relative",
  top: randomLocationT,
  left: randomLocationS
};

const PointOfLight = () => {
  return <div style={starStyle} className="point-of-light" />;
};

export default PointOfLight;

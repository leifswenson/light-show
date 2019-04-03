import React from "react";
//import "./PointOfLight.css";

const randomSize = Math.floor(Math.random() * 10) + 1;
const randomLocationV = Math.floor(Math.random() * 700) + 1;
const randomLocationH = Math.floor(Math.random() * 1200) + 1;

const starStyle = {
  backgroundColor: "white",
  height: randomSize,
  width: randomSize,
  borderRadius: "50%",
  position: "relative",
  top: randomLocationV,
  left: randomLocationH
};

const PointOfLight = () => {
  return <div style={starStyle} className="point-of-light" />;
};

export default PointOfLight;

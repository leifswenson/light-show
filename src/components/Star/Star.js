import React from "react";
import "./Star.css";

// const randomSize = Math.floor(Math.random() * 10) + 1;
// const randomLocationV = Math.floor(Math.random() * 700) + 1;
// const randomLocationH = Math.floor(Math.random() * 1200) + 1;

// let multiStar = [];
// for (let i = 0; i < randomNumStars; i++) {
//   multiStar.push(<Star key={i} />);
// }

// const starStyle = {
//   backgroundColor: "white",
//   height: randomSize,
//   width: randomSize,
//   borderRadius: "50%",
//   position: "relative",
//   top: randomLocationV,
//   left: randomLocationH
// };

// const starStyle = {
//   backgroundColor: "white",
//   height: 10,
//   width: 10,
//   borderRadius: "50%",
//   position: "relative",
//   top: 75,
//   left: 75
// };

const Star = () => {
  return <div className="star animate-star" />;
};

export default Star;

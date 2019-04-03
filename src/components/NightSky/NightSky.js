import React from "react";
import "./NightSky.css";
import PointOfLight from "../PointOfLight/PointOfLight";

const randomNumStars = Math.floor(Math.random() * 600) + 100;

let multiStar = [];
for (let i = 0; i < randomNumStars; i++) {
  multiStar.push(<PointOfLight key={i} />);
}

const NightSky = () => {
  return (
    <div>
      <div className="night-sky">{multiStar}</div>
    </div>
  );
};

export default NightSky;

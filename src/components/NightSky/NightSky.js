import React, { Component } from "react";
import "./NightSky.css";
// import Star from "../Star/Star";

export default class NightSky extends Component {
  // a function to randomly size and position a circle
  oneStar = () => {
    const randomSize = Math.floor(Math.random() * 10) + 1;
    const randomVertical = Math.floor(Math.random() * 700) + 1;
    const randomHorizontal = Math.floor(Math.random() * 1200) + 1;
    const starStyle = {
      backgroundColor: "white",
      height: randomSize,
      width: randomSize,
      borderRadius: "50%",
      position: "relative",
      top: randomVertical,
      left: randomHorizontal
    };
    return <div style={starStyle} className="star animate-star" />;
  };

  multiStar = () => {
    // randomly generate a number or stars between 300-900
    const randomNumStars = Math.floor(Math.random() * 600) + 300;

    for (let i = 0; i < randomNumStars; i++) {
      return this.oneStar();
    }
  };

  render() {
    return <div className="night-sky">{this.multiStar()}</div>;
  }
}

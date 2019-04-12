import React, { Component } from "react";
import "./NightSky.css";
// import Star from "../Star/Star";

export default class NightSky extends Component {
  // a function to randomly size and position a circle
  oneStar = i => {
    const randomSize = Math.floor(Math.random() * 6) + 1;
    const randomVertical = Math.floor(Math.random() * 700) + 110;
    const randomHorizontal = Math.floor(Math.random() * 1200) + 1;
    const starStyle = {
      backgroundColor: "white",
      height: randomSize,
      width: randomSize,
      borderRadius: "50%",
      position: "fixed",
      top: randomVertical,
      left: randomHorizontal
    };
    return <div style={starStyle} key={i} className="star animate-star" />;
  };

  multiStar = () => {
    // randomly generate a number or stars
    const randomNumStars = Math.floor(Math.random() * 1800) + 800;
    const starArr = [];

    for (let i = 0; i < randomNumStars; i++) {
      starArr.push(this.oneStar(i));
    }

    return starArr;
  };

  render() {
    return <div className="night-sky">{this.multiStar()}</div>;
  }
}

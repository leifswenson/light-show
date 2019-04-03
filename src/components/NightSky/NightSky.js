import React, { Component } from "react";
import "./NightSky.css";
import PointOfLight from "../PointOfLight/PointOfLight";

export default class NightSky extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h1>Night Sky</h1>
            <div className="night-sky">
              <PointOfLight />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

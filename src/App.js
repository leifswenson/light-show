import React, { Component } from "react";
import "./App.css";
import NightSky from "./components/NightSky/NightSky";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NightSky />
      </div>
    );
  }
}

export default App;

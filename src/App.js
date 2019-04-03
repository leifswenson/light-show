import React, { Component } from "react";
import "./App.css";
import NightSky from "./components/NightSky/NightSky";
import Header from "./components/Header/Header";

class App extends Component {
  handleClick = () => {
    alert("clicked");
  };

  render() {
    return (
      <div className="App">
        <Header onClick={this.handleClick} />
        <NightSky />
      </div>
    );
  }
}

export default App;

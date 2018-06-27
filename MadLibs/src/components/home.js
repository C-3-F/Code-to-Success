import React, { Component } from "react";
import Header from "./header";
import Card from "./card";
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <Card />
      </div>
    );
  }
}

export default Home;

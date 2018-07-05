import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="grid">
        <div className="grid__skew-light-one" />
        <div className="grid__skew-light-two" />
        <div className="grid__skew-light-three" />
        <div className="grid__skew-dark-one" />
        <div className="grid__skew-dark-two" />
        <div className="grid__skew-dark-three" />
      </div>
    );
  }
}

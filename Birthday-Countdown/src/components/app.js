import React, { Component } from "react";
import Picker from "./picker";
import Button from "./button";
import Clock from "./clock";
import ChangeDate from "./changeDate";
import { largeText } from "./largeText";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  renderItems = function() {
    if (this.state.active) {
      return [
        <Clock />,
        ChangeDate("Change Date", () => this.setState({ active: false })),
        largeText("04/03"),
        <label className="grid__remaining">Remaining until your b-day</label>
      ];
    } else {
      return [
        Button("Generate Countdown", () => this.setState({ active: true })),
        <Picker />
      ];
    }
  };

  render() {
    return (
      <div className="grid">
        <div className="grid__title">Birthday Countdown</div>
        <div className="grid__skew-light-one" />
        <div className="grid__skew-light-two" />
        <div className="grid__skew-light-three" />
        <div className="grid__skew-dark-one" />
        <div className="grid__skew-dark-two" />
        <div className="grid__skew-dark-three" />

        {this.renderItems()}
      </div>
    );
  }
}

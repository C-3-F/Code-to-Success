import React, { Component } from "react";
import Input from "./input";

class Card extends Component {
  constructor() {
    super();

    this.state = {
      color: "",
      pluralNoun: ""
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  render() {
    return (
      <div className="card">
        {Input("Color", this.state.color, this.handleInput, "color")}
        {Input(
          "Plural Noun",
          this.state.pluralNoun,
          this.handleInput,
          "pluralNoun"
        )}
      </div>
    );
  }
}

export default Card;

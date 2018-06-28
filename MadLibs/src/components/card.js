import React, { Component } from "react";
import Input from "./input";
import Content from "./content";

class Card extends Component {
  constructor() {
    super();

    this.state = {
      color: "",
      pluralNoun: "",
      celebOne: "",
      adjectiveOne: "",
      adjectiveTwo: "",
      nounOne: "",
      numberOne: "",
      numberTwo: "",
      nounTwo: "",
      adjectiveThree: "",
      celebTwo: "",
      celebThree: "",
      adjectiveFour: "",
      nounThree: "",
      celebFour: "",
      adjectiveFive: ""
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  render() {
    const inputData = [
      { title: "Color", state: this.state.color, name: "color" },
      {
        title: "Plural Noun",
        state: this.state.pluralNoun,
        name: "pluralNoun"
      },
      {
        title: "Adjective",
        state: this.state.adjectiveOne,
        name: "adjectiveOne"
      },
      { title: "Celebrity", state: this.state.celebOne, name: "celebOne" },

      {
        title: "Adjective",
        state: this.state.adjectiveTwo,
        name: "adjectiveTwo"
      },
      { title: "Noun", state: this.state.nounOne, name: "nounOne" },
      { title: "Number", state: this.state.numberOne, name: "numberOne" },
      { title: "Number", state: this.state.numberTwo, name: "numberTwo" },

      { title: "Noun", state: this.state.nounTwo, name: "nounTwo" },
      {
        title: "Adjective",
        state: this.state.adjectiveThree,
        name: "adjectiveThree"
      },
      { title: "Celebrity", state: this.state.celebTwo, name: "celebTwo" },
      { title: "Celebrity", state: this.state.celebThree, name: "celebThree" },

      {
        title: "Adjective",
        state: this.state.adjectiveFour,
        name: "adjectiveFour"
      },
      { title: "Noun", state: this.state.nounThree, name: "nounThree" },
      { title: "Celebrity", state: this.state.celebFour, name: "celebFour" },
      {
        title: "Adjective",
        state: this.state.adjectiveFive,
        name: "adjectiveFive"
      }
    ];
    return (
      <div className="card">
        {inputData.map(data =>
          Input(data.title, data.state, this.handleInput, data.name)
        )}
        <Content data={this.state} />
      </div>
    );
  }
}

export default Card;

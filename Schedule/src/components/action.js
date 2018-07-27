import React, { Component } from "react";
import Icon from "./icon";

class Action extends Component {
  render() {
    return <button onClick={this.props.onCLick} className={`${this.props.className} action`}>{Icon('fas fa-plus-circle')}</button>;
    //fas fa-times-circle
  }
}

export default Action;

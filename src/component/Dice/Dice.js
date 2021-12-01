import React, { Component } from "react";
import "./Dice.scss";

class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <i
        className={`fas fa-dice-${this.props.number} dice dice--big ${
          this.props.isRolling && "animate"
        }`}
      ></i>
    );
  }
}

export default Dice;

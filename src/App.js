import React, { Component } from "react";
import Dice from "./component/Dice/Dice";
import Button from "./component/Button/Button";
import generateRandomRumber from "./component/Helper/generateRandomRumber";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRolling: false,
      number: [generateRandomRumber(), generateRandomRumber()],
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({
      isRolling: true,
    });

    const interval = setInterval(() => {
      this.setState({
        number: [generateRandomRumber(), generateRandomRumber()],
      });
    }, 100);

    setTimeout(() => {
      this.setState({
        isRolling: false,
      });
      clearInterval(interval);
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <Dice
          isRolling={this.state.isRolling}
          number={`${this.state.number[0]}`}
        />
        <Dice
          isRolling={this.state.isRolling}
          number={`${this.state.number[1]}`}
        />
        <Button
          isRolling={this.state.isRolling}
          handle={this.handleButtonClick}
        />
      </div>
    );
  }
}

export default App;

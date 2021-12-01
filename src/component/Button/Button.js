import React, { Component } from "react";
import "./Button.scss";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button
        className={"button"}
        onClick={this.props.handle}
        disabled={this.props.isRolling && true}
      >
        {this.props.isRolling ? "Sedang mengacak" : "Acak dadu sekarang!!!"}
      </button>
    );
  }
}

export default Button;

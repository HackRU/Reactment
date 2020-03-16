import React, { Component } from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {'Help!'}
      </button>
    );
  }
}

export default Button
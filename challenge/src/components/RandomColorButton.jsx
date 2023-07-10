import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonColor: this.getRandomColor(),
    };
  }

  getRandomColor() {
    const colors = ["red", "green", "blue", "grey", "orange", "purple", "black"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  handleButtonClick = () => {
    const newColor = this.getRandomColor();
    this.setState({ buttonColor: newColor });
  };

  render() {
    return (
      <div>
        <h1>Welcome to the Home Page</h1>
        <button
          style={{ backgroundColor: this.state.buttonColor }}
          onClick={this.handleButtonClick}
        >
          Click Me!
        </button>
      </div>
    );
  }
}

export default Home;

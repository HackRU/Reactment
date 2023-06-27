import React, { useState, Component } from "react";
import dislikeImg from "./images/dislike.png";
import likeImg from "./images/like.png";
import jokeList from "./jokesData.json";

class Jokes extends Component {
  constructor(props) {
    super(props);
    const jokes = jokeList.list;
    const randomJoke = jokes[parseInt(Math.random() * jokes.length)];
    this.state = {
      textArea: randomJoke,
      count: 0,
    };
    this.dislikeClick = this.dislikeClick.bind(this);
    this.increaseClick = this.increaseClick.bind(this);
    this.decreaseClick = this.decreaseClick.bind(this);
  }

  increaseClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decreaseClick() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  dislikeClick(e) {
    const jokes = jokeList.list;
    const randomJoke = jokes[parseInt(Math.random() * jokes.length)];
    this.decreaseClick();
   
    this.setState({
      textArea: randomJoke,
    });
  }

  render() {
    return (
      <>
        <div
          id="generator"
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 10,
          }}
        >
          <h1
            value="textArea"
            style={{ textAlign: "center", color: "white", fontSize: 16 }}
          >
            <center>{this.state.textArea}</center>
          </h1>
        </div>

        <h2 style={{ fontSize: 18, color: "#A9A9A9" }}>
          <center>Haha, did you get it, ha, ha...</center>
        </h2>

        <div id="thumbs">
          <center>
            <img
              width="100px"
              src={likeImg}
              alt="Like button"
              onClick={this.increaseClick}
            />
            <img
              width="100px"
              src={dislikeImg}
              alt="Dislike button"
              onClick={this.dislikeClick}
            />
          </center>
          {/* I did inline css cuz too much work to make a css page ;) */}
          <div>
            <h2 role="jokeCount" style={{textAlign:'center'}}>The count is: {this.state.count}</h2>
          </div>
        </div>
      </>
    );
  }
}
export default Jokes;

import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 491901
        }
  }

  randomize(max) {
    max = Math.trunc(Math.random()*max);
    return max;
  }

      render() {
          return (
            <div className = "counter" >
                <p className = "text-right">This page has</p>
                <h1 id = "count" class = "text-right">{this.randomize(this.state.count)}</h1>
                <p className = "text-right">views</p>
            </div>
          )
      }
}



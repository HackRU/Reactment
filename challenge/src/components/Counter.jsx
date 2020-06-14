import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 491901
        }
      }

      render() {
          return (
            <div className = "counter">
                <p class = "text-right">This page has</p>
                <h1 id = "count" class = "text-right">{this.state.count}</h1>
                <p class = "text-right">views</p>
            </div>
          )
      }
}



import React, { Component } from 'react'
import KrabbyPattyURI from "./images/KrabbyPatty.png";


class KrabbyPatty extends Component {
  imageClick() {
    console.log('Are you feeling it now Mr. Krabs?!?')
  }       

  render () {
    return (
      <div>
        <img width='300' height='300' src={KrabbyPattyURI} onClick={this.imageClick} />
      </div>
    );
  }
}

export default KrabbyPatty;
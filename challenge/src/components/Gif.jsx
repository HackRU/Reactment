import React, { Component } from 'react'

class GIF extends Component {
    state = {}
    constructor(props) {
        super(props);
    }
render () {
    return (
        <img style={{margin: "0 1% 0 1%"}} src={this.props.gifsrc}></img>
    );
}
}
export default GIF;
import React, { Component } from 'react'

class GIF extends Component {
    state = {}
    constructor(props) {
        super(props);
    }
render () {
    return (
        <img style={{margin: "0 1% 0 1%"}} src={"https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"}></img>
    );
}
}
export default GIF;
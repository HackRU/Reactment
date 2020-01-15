import React, { Component } from "react";

class NumberLogger extends Component {
    state = {input: 0}

    handleChange = event => {
        this.setState({input: +event.target.value});
    }

    handleClick = () => {
        console.log(this.state.input);
    }

    render() {
        return (
            <>
              <input type="number" defaultValue={0} onChange={this.handleChange}/>
              <input type="button" onClick={this.handleClick} value="Log me!"/>
            </>
        );
    }
}

export default NumberLogger;

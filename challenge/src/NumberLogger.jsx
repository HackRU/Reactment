import React, { Component, createRef } from "react";

class NumberLogger extends Component {
    // state handles both the current input in the number box as well as
    // all previous inputs
    state = {inputs: [], currentInput: createRef()}

    handleClick = () => {
        // updates input state to include both old + new inputs
        this.setState({
            inputs: [
                ...this.state.inputs,
                parseInt(this.state.currentInput.current.value)
            ]
        })
    }

    render() {
        return (
            <>
              <input type="number" defaultValue={0} ref={this.state.currentInput}/>
              <input type="button" onClick={this.handleClick} value="Log me!"/>
                {this.state.inputs.map(i => (
                    <li>{i}</li>
                ))}
            </>
        );
    }
}

export default NumberLogger;

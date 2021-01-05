import React, { Component, createRef } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
            <TextField label="Number" variant="filled" type="number" defaultValue={0} inputRef={this.state.currentInput}/>
            <Button color="primary" variant="contained" onClick={this.handleClick}>Log me!</Button>
                {this.state.inputs.map(i => (
                    <li>{i}</li>
                ))}
            </>
        );
    }
}

export default NumberLogger;

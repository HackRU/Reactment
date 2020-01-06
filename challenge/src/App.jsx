import React, { Component } from "react";
import strings from "./strings.json";

class App extends Component {
    state = {}
    constructor(props) {
        super(props);
        console.log("Hello from the constructor!");
    }
    render() {
        return (
            <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
                {strings.greeting}
            </div>
            console.log("I am rendering successfully!"),
        );
    }
}

export default App;

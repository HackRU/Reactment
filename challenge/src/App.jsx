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
            console.log("Redered successfully! I think?"),
            <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
                {strings.greeting}
            </div>
        );
    }
}

export default App;

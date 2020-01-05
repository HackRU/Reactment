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
            <form action="https://github.com/HackRU">
                <input type="submit" value="Go to GitHub!" />
            </form>
            </div>
        );
    }
}

export default App;

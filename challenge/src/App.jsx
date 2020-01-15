import React, { Component } from "react";
import strings from "./strings.json";

class App extends Component {
    state = {}
    constructor(props) {
        super(props);
    }
    render() {
        console.log("Render Method is Working")
        return (
            <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
                {strings.greeting}
            </div>
        );
    }
}

export default App;

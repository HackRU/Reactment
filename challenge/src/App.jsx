import React, { Component } from "react";
import BabyYoda from "./mandalorian/BabyYoda";
import strings from "./strings.json";

class App extends Component {
    state = {}
    constructor(props) {
        super(props);
        console.log("Hello from the constructor!");
    }
    render() {
        return (
            <>
                <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
                    {strings.greeting}
                </div>
                <BabyYoda />
            </>
        );
    }
}

export default App;

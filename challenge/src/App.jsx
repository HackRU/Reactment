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
        );
    }
}

const sum = (list) => {
    let result = 0;
    for (let i = 1; i < list.length; i++) {
        result += list[i];
    }
    return result;
};

export default App;
export {sum};

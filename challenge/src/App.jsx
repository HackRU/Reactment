import React, { Component } from "react";
import strings from "./strings.json";
import Navbar from './components/Navbar'
class App extends Component {
    state = {}
    constructor(props) {
        super(props);
        console.log("Hello from the constructor!");
    }
    render() {
        return (
            <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
                <Navbar fixed={true} items={['Home', 'Sponsors', 'About', 'Contact us']} />
            </div>
        );
    }
}

export default App;

import React, { Component } from "react";
import BabyYoda from "./mandalorian/BabyYoda";
import NumberLogger from './NumberLogger';
import strings from "./strings.json";
import Navbar from './components/Navbar'
import Fade from 'react-reveal/Fade'
import Table from './components/Table'

class App extends Component {
    state = {}
    constructor(props) {
        super(props);
    }
    render() {
        console.log("Render Method is Working. Redered successfully! I think?")
        return (
            <>
              <Navbar fixed={true} items={['Home', 'Sponsors', 'About', 'Contact us']} />
              <div style={{ width: "100%", marginTop: "4rem", textAlign: "center" }}>
                <Fade left cascade>

                  <form action="https://github.com/HackRU">
                    <input type="submit" value="Go to GitHub!" />
                  </form>

                  <NumberLogger/>
                  <BabyYoda />
                  <Table/>
                </Fade>

              </div>
            </>
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

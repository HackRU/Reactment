import React, { Component } from "react";
import BabyYoda from "./mandalorian/BabyYoda";
import strings from "./strings.json";
import Fade from 'react-reveal/Fade'

class App extends Component {
    state = {}
    constructor(props) {
        super(props);
        console.log("Hello from the constructor!");
    }
    render() {
        console.log("I am rendering successfully!");
        return (
            <>
              <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
                <Fade left cascade>
                  {strings.greeting}

                  <form action="https://github.com/HackRU">
                    <input type="submit" value="Go to GitHub!" />
                  </form>

                </Fade>

              </div>
              <BabyYoda />
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

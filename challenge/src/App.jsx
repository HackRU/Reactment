import React, { Component } from "react";
import BabyYoda from "./mandalorian/BabyYoda";
import NumberLogger from "./NumberLogger";
import strings from "./strings.json";
import Navbar from "./components/Navbar";
import Fade from "react-reveal/Fade";

class App extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { currentPage: 0 };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(index) {
    this.setState({ currentPage: index });
  }

  render() {
    console.log("User has selected page # ", this.state.currentPage);
    //console.log("Render Method is Working. Redered successfully! I think?")
    return (
      <>
        <Navbar
          fixed={true}
          items={["Home", "Sponsors", "About", "Contact us"]}
          onPageChange={this.handlePageChange}
          currentPage={this.state.currentPage}
        />
        <div style={{ width: "100%", marginTop: "4rem", textAlign: "center" }}>
          <Fade left cascade>
            {strings.greeting}

            <form action="https://github.com/HackRU">
              <input type="submit" value="Go to GitHub!" />
            </form>

            <NumberLogger />
          </Fade>
        </div>
        <BabyYoda />
      </>
    );
  }
}

const sum = list => {
  let result = 0;
  for (let i = 1; i < list.length; i++) {
    result += list[i];
  }
  return result;
};

export default App;
export { sum };

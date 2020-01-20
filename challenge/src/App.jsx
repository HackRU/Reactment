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

  Router(param) {
    console.log(param.PageRoute);
    switch (param.PageRoute) {
      case 0:
        return (
          <div>
            <div
              style={{ width: "100%", marginTop: "4rem", textAlign: "center" }}
            >
              <Fade left cascade>
                {strings.greeting}

                <form action="https://github.com/HackRU">
                  <input type="submit" value="Go to GitHub!" />
                </form>

                <NumberLogger />
              </Fade>
            </div>
            <BabyYoda />
          </div>
        );
      case 1:
        return (
          <div>
            <h1 style={{ fontSize: 100, color: "#FFC436" }}>
              <center>Sponsors Page</center>
            </h1>
            <div style={{ backgroundColor: "whitesmoke" }}>
              <br />
            </div>
            <div
              style={{
                backgroundColor: "#115E7C",
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row"
              }}
            >
              <img
                src={"https://picsum.photos/id/" + param.PageRoute * 5 + "/500"}
                alt="RandomizedPicsum"
                height="20%"
                width="20%"
                style={{
                  marginTop: "5%",
                  marginBottom: "5%",
                  marginRight: "5%",
                  marginLeft: "5%"
                }}
              ></img>
              <img
                src={
                  "https://picsum.photos/id/" + param.PageRoute * 10 + "/500"
                }
                alt="RandomizedPicsum"
                height="20%"
                width="20%"
                style={{
                  marginTop: "5%",
                  marginBottom: "5%",
                  marginRight: "5%",
                  marginLeft: "5%"
                }}
              ></img>
              <img
                src={
                  "https://picsum.photos/id/" + param.PageRoute * 20 + "/500"
                }
                alt="RandomizedPicsum"
                height="20%"
                width="20%"
                style={{
                  marginTop: "5%",
                  marginBottom: "5%",
                  marginRight: "5%",
                  marginLeft: "5%"
                }}
              ></img>
            </div>
            <div style={{ backgroundColor: "whitesmoke" }}>
              <br />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h1 style={{ fontSize: 100, color: "#FFF5B8" }}>
              <center>About Page</center>
            </h1>
            <div style={{ backgroundColor: "whitesmoke" }}>
              <br />
            </div>
            <div
              style={{
                backgroundColor: "#6693AC",
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row"
              }}
            >
              <img
                src={"https://picsum.photos/id/" + param.PageRoute * 5 + "/500"}
                alt="RandomizedPicsum"
                height="20%"
                width="20%"
                style={{
                  marginTop: "5%",
                  marginBottom: "5%",
                  marginRight: "5%",
                  marginLeft: "5%"
                }}
              ></img>
              <img
                src={
                  "https://picsum.photos/id/" + param.PageRoute * 10 + "/500"
                }
                alt="RandomizedPicsum"
                height="20%"
                width="20%"
                style={{
                  marginTop: "5%",
                  marginBottom: "5%",
                  marginRight: "5%",
                  marginLeft: "5%"
                }}
              ></img>
              <img
                src={
                  "https://picsum.photos/id/" + param.PageRoute * 20 + "/500"
                }
                alt="RandomizedPicsum"
                height="20%"
                width="20%"
                style={{
                  marginTop: "5%",
                  marginBottom: "5%",
                  marginRight: "5%",
                  marginLeft: "5%"
                }}
              ></img>
            </div>
            <div style={{ backgroundColor: "whitesmoke" }}>
              <br />
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            {" "}
            <h1 style={{ fontSize: 100, color: "#F09F70" }}>
              <center>Contact Page</center>
            </h1>
            <div style={{ backgroundColor: "whitesmoke" }}>
              <br />
            </div>
            <div
              style={{
                backgroundColor: "#546882",
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row"
              }}
            >
              <img
                src={"https://picsum.photos/id/" + param.PageRoute * 5 + "/500"}
                alt="RandomizedPicsum"
                height="20%"
                width="20%"
                style={{
                  marginTop: "5%",
                  marginBottom: "5%",
                  marginRight: "5%",
                  marginLeft: "5%"
                }}
              ></img>
              <img
                src={
                  "https://picsum.photos/id/" + param.PageRoute * 10 + "/500"
                }
                alt="RandomizedPicsum"
                height="20%"
                width="20%"
                style={{
                  marginTop: "5%",
                  marginBottom: "5%",
                  marginRight: "5%",
                  marginLeft: "5%"
                }}
              ></img>
              <img
                src={
                  "https://picsum.photos/id/" + param.PageRoute * 20 + "/500"
                }
                alt="RandomizedPicsum"
                height="20%"
                width="20%"
                style={{
                  marginTop: "5%",
                  marginBottom: "5%",
                  marginRight: "5%",
                  marginLeft: "5%"
                }}
              ></img>
            </div>
            <div style={{ backgroundColor: "whitesmoke" }}>
              <br />
            </div>
          </div>
        );
      default:
        return <div>An error occured.</div>;
    }
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
        <this.Router PageRoute={this.state.currentPage} />
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

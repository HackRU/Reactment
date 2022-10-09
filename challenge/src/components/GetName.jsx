import React from "react";

class GetName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      hasName: !(
        localStorage.getItem("username") === null ||
        localStorage.getItem("username") === ""
      ),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeNameSetup = this.changeNameSetup.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem("username", this.state.value);
    this.setState({ value: "" });

    console.log(this.state.hasName);
    this.setState({
      hasName: !(
        localStorage.getItem("username") === null ||
        localStorage.getItem("username") === ""
      ),
    });
  }

  changeNameSetup() {
    localStorage.removeItem("username");
    this.setState({
      hasName: !(
        localStorage.getItem("username") === null ||
        localStorage.getItem("username") === ""
      ),
    });
  }

  render() {
    if (this.state.hasName) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          Your name is {localStorage.getItem("username")}
          <button
            style={{
              "background-color": "#4CAF50" /* Green */,
              border: "none",
              color: "white",
              padding: "15px 32px",
              "font-size": "16px",
            }}
            onClick={this.changeNameSetup}
          >
            Change Name
          </button>
        </div>
      );
    } else {
      return (
        <div
          className="NameForm"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input
              type="submit"
              value="Submit"
              style={{
                "background-color": "#4CAF50" /* Green */,
                border: "none",
                color: "white",
                padding: "15px 32px",
                "font-size": "16px",
              }}
            />
          </form>
        </div>
      );
    }
  }
}

export default GetName;

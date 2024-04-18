import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Sponsors from "./components/Pages/Sponsors";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import FunFacts from "./components/Pages/FunFacts";
import Memes from "./components/Pages/Memes";
import Profile from "./components/Pages/profile"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import yellow from "@material-ui/core/colors/yellow";
const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: yellow,
  },
});

const page_index_mapper = (page_name) => {
  const mapping = {
    home: 0,
    sponsors: 1,
    about: 2,
    "contact us": 3,
    "fun facts": 4,
    memes: 5,
  };
  return mapping[page_name] === undefined ? undefined : mapping[page_name];
};

class App extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { currentPage: 0, currentPageName: "Home" };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    const url_regex = RegExp("/([^/]+)?");
    const location = window.location.pathname;
    const location_match = location.match(url_regex);
    const curPageName = location_match[1]
      ? location_match[1].replace(/_/, " ")
      : "home";
    const curPageNo = page_index_mapper(curPageName);
    this.setState({
      currentPage: curPageNo ? curPageNo : 5,
      currentPageName: curPageName,
    });
  }

  handlePageChange(index, indexName) {
    this.setState({ currentPage: index, currentPageName: indexName });
    window.history.pushState(
      null,
      null,
      `/${indexName.replace(/\s+/, "_").toLowerCase()}`
    );
  }

  Router(param) {
    const page_name = param.PageName?.toLowerCase().replace(/_/, " ");
    switch (page_name) {
      case "home":
        return <Home currentpage={param.PageRoute} />;
      case "sponsors":
        return <Sponsors currentpage={param.PageRoute} />;
      case "about":
        return <About currentpage={param.PageRoute} />;
      case "contact us":
        return <Contact currentpage={param.PageRoute} />;
      case "fun facts":
        return <FunFacts currentpage={param.PageRoute} />;
      case "memes":
        return <Memes currentpage={param.PageRoute} />;
      case "person":
          return <Profile name={window.location.href.split("/")[4]} />
      default:
        return <div>An error occured.</div>;
    }
  }

  render() {
    console.log("User has selected page ", this.state.currentPageName);
    //console.log("Render Method is Working. Redered successfully! I think?")

    return (
      <MuiThemeProvider theme={theme}>
        <Navbar
          fixed={true}
          items={[
            "Home",
            "Sponsors",
            "About",
            "Contact us",
            "Fun Facts",
            "Memes",
          ]}
          onPageChange={this.handlePageChange}
          currentPage={this.state.currentPage}
        />
        <this.Router
          PageRoute={this.state.currentPage}
          PageName={this.state.currentPageName}
        />
      </MuiThemeProvider>
    );
  }
}

const sum = (list) => {
  let result = 0;
  for (let i = 0; i < list.length; i++) {
    result += list[i];
  }
  return result;
};

export default App;
export { sum };

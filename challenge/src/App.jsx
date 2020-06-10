import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Sponsors from "./components/Pages/Sponsors";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";

class App extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { currentPage: 0, currentPageName: "Home" };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(index, indexName) {
    this.setState({ currentPage: index, currentPageName: indexName });
  }

  Router(param) {
    switch (param.PageName) {
      case 'Home':
        return (
          <Home currentpage={param.PageRoute}/>
        );
      case 'Sponsors':
        return (
          <Sponsors currentpage={param.PageRoute}/>
        );
      case 'About':
        return (
          <About currentpage={param.PageRoute}/>

        );
      case 'Contact us':
        return (
          <Contact currentpage={param.PageRoute} />
        );
        case 'Fun Facts':
          return (
            <FunFacts currentpage={param.PageRoute} />
          );
      default:
        return <div>An error occured.</div>;
    }
  }

  render() {
    console.log("User has selected page ", this.state.currentPageName);
    //console.log("Render Method is Working. Redered successfully! I think?")

    return (
      <>
        <Navbar
          fixed={true}
          items={["Home", "Sponsors", "About", "Contact us" ,"Fun Facts"]}
          onPageChange={this.handlePageChange}
          currentPage={this.state.currentPage}
        />
        <this.Router PageRoute={this.state.currentPage} PageName={this.state.currentPageName}/>
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

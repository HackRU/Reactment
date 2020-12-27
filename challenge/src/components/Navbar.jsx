import React, { Component } from "react";
import PropTypes from "prop-types";
import HackRUlogoURI from "./images/HackRUlogo.jpg";
import Fade from "react-reveal/Fade";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.props.onPageChange(index, this.props.items[index]);
  }

  render() {
    var self = this;
    const focused = this.props.currentPage;

    return (
      <div className={this.props.fixed && "fixed"}>
      <Fade left cascade>
        <a href="https://hackru.org/">
          <img width='130' height='59' src={HackRUlogoURI} style={{float:"left"}}/>
        </a>
      </Fade>
        <ul>
          {this.props.items.map(function(element, index) {
            var style = "";
            if (focused === index) {
              style = "active";
            }
            return (
              <li
                key={index}
                className={style}
                onClick={() => self.handleClick(index)}
              >
                {element}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Navbar.propTypes = {
  fixed: PropTypes.bool,
  items: PropTypes.array
};

Navbar.defaultPropTypes = {
  fixed: true,
  items: []
};

export default Navbar;

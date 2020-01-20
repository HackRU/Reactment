import React, { Component } from "react";
import PropTypes from "prop-types";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.props.onPageChange(index);
  }

  render() {
    var self = this;
    const focused = this.props.currentPage;

    return (
      <div className={this.props.fixed && "fixed"}>
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

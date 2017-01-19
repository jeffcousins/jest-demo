import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Hello, world.'
    };
  }

  render() {
    return (
      <h2>{this.state.text}</h2>
    );
  }
}

export default Header;

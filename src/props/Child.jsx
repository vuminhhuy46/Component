/** @format */

import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        <h2>Child</h2>
        <p>name: {this.props.cauThu.name} </p>
        <p>number: {this.props.cauThu.soAoCauThu}</p>
      </div>
    );
  }
}

export default Child;

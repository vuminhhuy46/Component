/** @format */

import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  state = {
    name: "ronaldo",
    number: 7,
  };
  render() {
    return (
      <div>
        <h1>Parents</h1>
        <Child
          cauThu={this.state}
          tenCauThu={this.state.name}
          soAoCauThu={this.state.number}
        />
      </div>
    );
  }
}

export default Parent;

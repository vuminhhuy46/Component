/** @format */

import React, { Component } from "react";

class Car extends Component {
  render() {
    const { imgSrc } = this.props;
    return (
      <div className="car mt-2">
        <img className="img-thumbnail" src={imgSrc} alt="hinh" />
      </div>
    );
  }
}

export default Car;

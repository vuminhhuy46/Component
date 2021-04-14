/** @format */

import React, { Component } from "react";

class BtnColor extends Component {
  render() {
    //   const btn = this.props.btn; // <ES5></ES5>
    const { btn, handleClick } = this.props; // ES6
    return (
      <button className="btn" onClick={() => handleClick(btn.name)}>
        <img src={btn.imgSrc} alt="hinh" style={{ width: 50 }} />
      </button>
    );
  }
}

export default BtnColor;

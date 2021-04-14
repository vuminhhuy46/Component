/** @format */

import React, { Component } from "react";

class RenderWithMap extends Component {
  state = {
    listMusic: [
      {
        author: "Binz",
        music: "Big city boi",
      },
      {
        author: "mother fucker",
        music: "dasdad",
      },
    ],
  };

  renderListMusic = () => {
    return this.state.listMusic.map((baiHat, index) => {
      return (
        <li key={index}>
          {baiHat.music}-{baiHat.author}
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Danh sách bài hát</h1>
        <ul>{this.renderListMusic()}</ul>
      </div>
    );
  }
}

export default RenderWithMap;

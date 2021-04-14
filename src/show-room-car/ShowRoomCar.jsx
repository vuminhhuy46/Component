/** @format */

import React, { Component } from "react";
import BtnColor from "./BtnColor";
import Car from "./Car";

class ShowRoomCar extends Component {
  // dùng không được vì không render lại UI
  // carImg = "./img/car/products/black-car.jpg";
  state = {
    carImg: "./img/car/products/black-car.jpg",
    btnChoiceColorList: [
      {
        name: "black",
        imgSrc: "./img/car/icons/icon-black.jpg",
      },
      {
        name: "red",
        imgSrc: "./img/car/icons/icon-red.jpg",
      },
      {
        name: "silver",
        imgSrc: "./img/car/icons/icon-silver.jpg",
      },
      {
        name: "steel",
        imgSrc: "./img/car/icons/icon-steel.jpg",
      },
    ],
  };

  renderBtnChoiceColorList = () => {
    return this.state.btnChoiceColorList.map((btn, index) => {
      return <BtnColor key={index} btn={btn} handleClick={this.handleClick} />;
    });
  };

  handleClick = (color) => {
    let urlImg = "";
    switch (color) {
      case "black":
        // this.carImg = "./img/car/products/black-car.jpg";
        urlImg = "./img/car/products/black-car.jpg";
        break;
      case "red":
        // this.carImg = "./img/car/products/red-car.jpg";
        urlImg = "./img/car/products/red-car.jpg";
        break;
      case "silver":
        urlImg = "./img/car/products/silver-car.jpg";
        break;
      default:
        urlImg = "./img/car/products/steel-car.jpg";
        break;
    }
    this.setState({
      carImg: urlImg,
    });
  };

  render() {
    return (
      <section className="show-room">
        <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
        <div className="container">
          <div className="chose__color d-flex justify-content-around">
            {this.renderBtnChoiceColorList()}
          </div>
          <Car imgSrc={this.state.carImg} />
        </div>
      </section>
    );
  }
}

export default ShowRoomCar;

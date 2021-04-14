/** @format */

import { Children } from "react";
import "./App.css";
import Carousel from "./component/Carousel";
import Footer from "./component/Footer";

import Header from "./component/Header";
import ProductList from "./component/ProductList";
import Parent from "./props/Parent";
import RenderWithMap from "./reder-with-map/RenderWithMap";
import ShowRoomCar from "./show-room-car/ShowRoomCar";
import Begin from "./what-we-do/Begin";
import Content from "./what-we-do/Content";
import Slide from "./what-we-do/Slide";
import End from "./what-we-do/End";
function App() {
  return (
    <div>
      <div>
        {/* <Header />
        <Carousel />
        <ProductList />
        <Footer /> */}
        {/* DemoDataBinding */}
        {/* <ShowRoomCar /> */}
        {/* <RenderWithMap /> */}
        {/* <Parent /> */}
        {/* <Child /> */}

        <Begin />
        <Slide />
        <Content />
        <End />
      </div>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import reactDom from "react-dom";
import ProductList from "./showProductList";
export default function ControlledCarousel({ productData, title }) {
  const first=productData.slice(0,4);
  const second=productData.slice(4,8);
  // const third=productData.slice(8,12);

  // console.log({first,second});

  return (
    <div className='container'>
      <h1 className="gift_sub_heading text-center p-3 mt-3">
        {title && title}
      </h1>
      <Carousel infiniteLoop swipeable swipeScrollTolerance centerMode={true} showIndicators={false} showThumbs={false} showStatus={false} showArrows={true} >
        <div class="row h-100 align-items-center g-2 mt-2">
          <ProductList pageDataList={first} />
        </div>
        <div class="row h-100 align-items-center g-2  mt-2 ">
        <ProductList pageDataList={second} />
        </div>
        <div class="row h-100 align-items-center g-2  mt-2">
        <ProductList pageDataList={first} />
        </div>
      </Carousel>
    </div>
  );
}

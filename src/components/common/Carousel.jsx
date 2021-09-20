import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import reactDom from "react-dom";
import ProductList from "./ProductList";
export default function ControlledCarousel({ productData, title }) {
  let first;
  let second;
  if (productData) {
   first = productData.slice(0, 4);
   second = productData.slice(4, 8);
  }
  // const third=productData.slice(8,12);

  return (
    <section>
     { productData&&<div class="container pt-5 ">
        <div class="row h-100">
          <div class="col-lg-7 mx-auto text-center mb-6">
            {/* <h5 class="fw-bold fs-3 fs-lg-5 lh-sm mb-3 ">Shop Best Sellers</h5> */}
            <h4 className="text-danger text-center pb-4">Shop Best Sellers</h4>

          </div>
          <div class="col-12">
            <div
              class="carousel slide"
              id="carouselBestSellers"
              data-bs-touch="false"
              data-bs-interval="false"
            >
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <div class="row h-100 align-items-center g-2">
                    <ProductList pageDataList={first} />
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                  <div class="row h-100 align-items-center g-2">
                    <ProductList pageDataList={second} />
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                  <div class="row h-100 align-items-center g-2">
                    <ProductList pageDataList={first} />
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row h-100 align-items-center g-2">
                    <ProductList pageDataList={second} />
                  </div>
                </div>
                <div class="row">
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselBestSellers"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselBestSellers"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   } </section>
  );
}

// <div className='container'>
//   <h1 className="gift_sub_heading text-center p-3 mt-3">
//     {title && title}
//   </h1>
//   <Carousel infiniteLoop swipeable swipeScrollTolerance centerMode
//    showIndicators={false} showThumbs={false} showStatus={false} showArrows >
//     <div className="row h-100 align-items-center g-2 mt-2" >
//       <ProductList pageDataList={first} />
//     </div>
//     <div className="row h-100 align-items-center g-2  mt-2 ">
//     <ProductList pageDataList={second} />
//     </div>
//     <div className="row h-100 align-items-center g-2  mt-2">
//     <ProductList pageDataList={first} />
//     </div>
//   </Carousel>
// </div>

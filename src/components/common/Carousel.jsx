import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import ProductList from "./ProductList";
export default function ControlledCarousel({ productData, title }) {
  let first;
  if (productData) {
    first = productData.slice(0, 4);
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <section>
      <div class="pt-5">
        <div class="row h-100">
          <div class="text-center mb-3">
            <h4 className="text-danger text-center pb-4">Shop Best Sellers</h4>
          </div>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            // autoPlay={true}
            autoPlaySpeed={100}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {/* {selectedReviews?.map(review => (
          <div>
            </div>
        ))} */}
            {productData?.map((product, index) => {
              const { images, title, price } = product;
              const colorImg = [];
              // variants adjusted to colorImg array by  map method
              product?.variants?.map((variant) => {
                if (variant.selectedOption === "Color") {
                  variant?.tags?.map((tag) => {
                    let colorData = {};
                    colorData.color = tag.text;
                    colorData.img = tag.img;
                    colorImg.push(colorData);
                  });
                }
              });

              return (
                <ProductCard
                  product={product}
                  key={index}
                  images={images}
                  title={title}
                  price={price}
                  colorImg={colorImg}
                />
              );
            })}

          </Carousel>
        </div>
      </div>
    </section>
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

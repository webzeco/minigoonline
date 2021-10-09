
import React from "react";
import Carousel from "react-multi-carousel";
import ReactStars from "react-rating-stars-component";
import "./style/review.css";
import "react-multi-carousel/lib/styles.css";
export default function Review({ reviews, type }) {
  let selectedReviews = reviews;
  if (type === 'favorite')
    selectedReviews = reviews.filter(r => r.favorite);

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
    <div class="container mb-5">
      <div class="row h-100">
        <div class="text-center mb-3">
          <h4 className="shop_best_seller_h4 text-center pb-4">Our Customer's Reviews</h4>
        </div>
        <div className="px-4">
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
            {selectedReviews?.map(review => (
              <div>
                <div class="card card_back_col p-3 mx-2 Card_h_w">
                  <div class="d-flex align-items-center mt-1 ">
                    <ReactStars value={review?.rating} />
                  </div>
                  <div class="fw-bold r_title_look mb-2">
                    {review?.reviewTitle}
                  </div>
                  <div class="fw-bold r_name_look mb-3  ">
                    {review?.name}
                  </div>
                  <p class=" re_dis_look overflow-auto">
                    {review?.feedback}
                  </p>
                </div>
              </div>
            ))}
            {selectedReviews?.map(review => (
              <div>
                <div class="card card_back_col p-3 mx-2 Card_h_w">
                  <div class="d-flex align-items-center mt-1">
                    <ReactStars value={review?.rating} />
                  </div>
                  <div class="fw-bold r_title_look mb-2">
                    {review?.reviewTitle}
                  </div>
                  <div class="fw-bold r_name_look mb-3  ">
                    {review?.name}
                  </div>
                  <p class=" re_dis_look overflow-auto">
                    {review?.feedback}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div >

  );
}

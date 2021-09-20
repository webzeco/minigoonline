import React, { useEffect } from "react";
import HomeCategory from "./common/HomeCategory";
import HomeContent from "./common/HomeContent";
import HomeGift from "./common/HomeGift";
import ControlledCarousel from "./common/Carousel";
import Review from "./common/Reviews";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsSelector, loadProducts } from "../storemini/reducers/products";
import { getAllReviewsSelector, loadReviews } from "../storemini/reducers/reviews";
import { loadUser } from "../storemini/reducers/user";

const Home = () => {

  const dispatch = useDispatch();
  const products = useSelector(getAllProductsSelector);
  const reviews = useSelector(getAllReviewsSelector);

  useEffect(() => {
      dispatch(loadProducts());
      dispatch(loadReviews());
      dispatch(loadUser());
  }, []);
  return (
    <div>
      <HomeContent />
      <HomeCategory />
      <HomeGift />
      <ControlledCarousel productData={products} title={"Shop Best Sellers"} />
      <Review reviews={reviews} />
    </div>
  );
};
export default Home;

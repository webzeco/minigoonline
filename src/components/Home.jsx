import React, { useEffect, useState } from 'react';
import HomeCategory from './common/HomeCategory';
import HomeContent from './common/HomeContent';
import HomeGift from './common/HomeGift';
import ControlledCarousel from './common/Carousel';
import Reviews from './common/Reviews';
import { getAllReviews } from '../services/reviewServices';

const Home = ({bestSells}) =>{ 
   const [reviews, setReviews] = useState([]);
    
   const getAllReviewsHandler = async () => {
       const { data } = await getAllReviews();
       setReviews(data.data);
       console.log(data.data);
   }
   useEffect(() => {
      getAllReviewsHandler();
      return () => {
         
      }
   }, [])
   return(

   <div>
 <HomeContent/>
      <HomeCategory/>
      <HomeGift/> 
      <ControlledCarousel productData={bestSells} title={'Shop Best Sellers'} />
      <Reviews reviews={reviews}/>
   </div>

) };
export default Home;

    

    

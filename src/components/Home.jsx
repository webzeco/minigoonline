import React from 'react';
import HomeCategory from './common/HomeCategory';
import HomeContent from './common/HomeContent';
import HomeGift from './common/HomeGift';
import ControlledCarousel from './common/Carousel';
const Home = ({bestSells}) => (
   <div>
 <HomeContent/>
      <HomeCategory/>
      <HomeGift/> 
      <ControlledCarousel productData={bestSells} title={'Shop Best Sellers'} />
   </div>

);
export default Home;


    

import React from 'react';
import { Dropdown } from 'react-bootstrap';
import HomeCategory from './common/HomeCategory';
import HomeContent from './common/HomeContent';
import HomeGift from './common/HomeGift';
import NavMenu from './common/NavMenu';
import ShowProductComponent from './showProductComponent';

const Home = () => (
   <div>
      <HomeContent/>
      <HomeCategory/>
      <HomeGift/>
   </div>

);
export default Home;

    

    

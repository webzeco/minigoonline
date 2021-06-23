import React from 'react';
import { Dropdown } from 'react-bootstrap';
import HomeCategory from './common/HomeCategory';
import HomeContent from './common/HomeContent';
import HomeGift from './common/HomeGift';
import NavMenu from './common/NavMenu';
import ShowProductComponent from './showProductComponent';
import Slider from './common/Slider';

import ShowProduct from './showProductComponent';
import { productData } from './data';
import ProductList from './showProductList';
import AddProduct from './addProductComponent';
const Home = () => (
   <div>
 <HomeContent/>
      <HomeCategory/>
      <HomeGift/> 
      <Slider/>
      {/* <AddProduct/> */}

{/*       
<ProductList productData={productData} />
<ShowProduct productData={productData} /> */}
   </div>

);
export default Home;

    

    

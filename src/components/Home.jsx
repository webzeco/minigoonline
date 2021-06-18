import React from 'react';
import { Dropdown } from 'react-bootstrap';
import HomeCategory from './common/HomeCategory';
import HomeContent from './common/HomeContent';
import NavMenu from './common/NavMenu';
import AddProduct from './addProductComponent';
import ShowProductComponent from './showProductComponent';

const Home = () => (
   <div>
      <HomeContent/>
      <HomeCategory/>
      <ShowProductComponent/>
      <AddProduct/>
   </div>

);
export default Home;

    

    

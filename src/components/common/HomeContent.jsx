import React from "react";
import './style/home.css';
import { Link } from 'react-router-dom';

export default function HomeContent() {
  return (
    <div className="container-fluid banner pt-5 mt-5">
    <div className="row align-items-center">
    <div className="col-md-6 text-center">
    <div className="banner_text mt-4">
    <p href="#" className="no-decoration link-style">
      <h1 className="banner_content_h1 pb-2 pt-5">Gifts for Grads</h1>
    <p className="banner_content_p mb-5 ">Signify one of life's milestone with unique <br />gidt- and support Time journalism.</p></p>
    <Link href="#" className="btn_1 p-4 link-style" >SHOP NOW</Link>
    </div>
    </div>
    <div className="col-md-6 hid_banner_pic">
      <div className="banner_img text-center mt-4 pt-5">
      
        {/* <img src={`${process.env.REACT_APP_URL}/images/bn_img.png`} alt="#" className="img-fluid"/> */}
        <img src={'https://sb.kaleidousercontent.com/800x533/9e7eebd2c6/animals-0b6addc448f4ace0792ba4023cf06ede8efa67b15e748796ef7765ddeb45a6fb-removebg.png'} alt="#" className="img-fluid"/>
        </div>
      </div>
    </div>
    </div>
  );
}

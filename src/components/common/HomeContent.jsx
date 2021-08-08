import React from "react";
import './style/home.css';
import { Link } from 'react-router-dom';

export default function HomeContent() {
  return (
    <div className="container-fluid banner  mt-2">
    <div className="row align-items-center">
    <div className="col-md-6 text-center">
    <div className="banner_text mt-4">
    <p href="#" className="no-decoration link-style">
      <h1 className="banner_content_h1 pb-2 pt-5 fw-bold">Gifts for Grads</h1>
    <p className="banner_content_p mb-5 ">Signify one of life's milestone with unique <br />gidt- and support Time journalism.</p></p>
    <Link href="#" className="btn_1 p-4 link-style fw-bold" >SHOP NOW</Link>
    </div>
    </div>
    <div className="col-md-6 hid_banner_pic">
      <div className="banner_img text-center mt-5 p-5 ">
      
        <img src={'https://pngimg.com/uploads/gift/gift_PNG100442.png'} height="350px" width="350px" alt="#" className="img-fluid"/>
        </div>
      </div>
    </div>
    </div>
  );
}

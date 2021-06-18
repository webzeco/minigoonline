import React from "react";
import './style/home.css'
export default function HomeContent() {
  return (
    <div class="container-fluid banner pt-5 mt-5">
    <div class="row align-items-center">
    <div class="col-md-6 text-center">
    <div class="banner_text mt-4">
    <a href="#" class="no-decoration">
      <h1 class="banner_content_h1 pb-2 pt-5">Gifts for Grads</h1>
    <p class="banner_content_p mb-5 ">Signify one of life's milestone with unique <br />gidt- and support Time journalism.</p></a>
    <a href="#" class="btn_1 p-4">SHOP NOW</a>
    </div>
    </div>
    <div class="col-md-6 hid_banner_pic">
      <div class="banner_img text-center mt-4 pt-5">
      
        {/* <img src={`${process.env.REACT_APP_URL}/images/bn_img.png`} alt="#" class="img-fluid"/> */}
        <img src={'https://sb.kaleidousercontent.com/800x533/9e7eebd2c6/animals-0b6addc448f4ace0792ba4023cf06ede8efa67b15e748796ef7765ddeb45a6fb-removebg.png'} alt="#" class="img-fluid"/>
        </div>
      </div>
    </div>
    </div>
  );
}

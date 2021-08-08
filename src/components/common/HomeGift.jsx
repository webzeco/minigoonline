import React from 'react';
import { Link } from 'react-router-dom';
import './style/home.css';

export default function HomeGift() {
    return (
        <div>
            <div className="container pt-4 pb-3">
  <p className="gift_sub_heading text-center ">Complement Your Purchase With a Gift Subscription</p>
</div>
<div className="container pt-3 gift-bg">
  <div className="text-center pt-3 mt-5">
    <img src="https://pngimg.com/uploads/gift/small/gift_PNG100426.png" height="70" alt='img'/>
    <p className="h1 gift_h1 pb-2 pt-5">A gift for every taste.</p>
    <p className="h6 gift_h6 pb-5">give NYT Cooking for $40</p>
    <Link href="#" className="btn_give px-5 p-3 fw-bold">GIVE NOW</Link>
  </div>
  </div>
  </div>
    )
}

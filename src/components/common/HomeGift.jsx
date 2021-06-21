import React from 'react';
import { Link } from 'react-router-dom';
import './style/home.css';

export default function HomeGift() {
    return (
        <div>
            <div class="container pt-4 pb-3">
  <p class="gift_sub_heading text-center">Complement Your Purchase With a Gift Subscription</p>
</div>
<div class="container pt-3 gift-bg">
  <div class="text-center pt-5 mt-5">
    <img src="https://www.nicepng.com/png/detail/328-3288922_the-cooks-cooking-school-cooking-school-logo.png" height="35" alt='img'/>
    <p class="h1 gift_h1 pb-2 pt-5">A gift for every taste.</p>
    <p class="h6 gift_h6 pb-5">give NYT Cooking for $40</p>
    <Link href="#" class="btn_give px-5 p-3">GIVE NOW</Link>
  </div>
  </div>
  </div>
    )
}

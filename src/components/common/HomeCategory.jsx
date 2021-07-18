import React from 'react'
import { Link } from 'react-router-dom';


export default function HomeCategory({title,col}) {
    return (

      <div className="container pt-5">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 pb-4">
         <p    className="category_box_h4 link-style">
          <div className="container d-flex branded-colth_box">
            <div className="col-lg-6 col-md-5 col-sm-8 text-center">
        <img src="https://pngimg.com/uploads/gift/small/gift_PNG100426.png" height="300px" alt='img' className="img-fluid pt-5" />
       </div>
        <div className="col-lg-6 col-md-6  pt-5 mt-5 justify-content-center no-under px-1">
        <p className="category_box_h4">GIFTS</p>
        <Link><p className="category_box_h7">SHOP NOW</p></Link>
        </div>
          </div>
         </p>
        </div>
   
        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 pb-4">
         <Link to="#">
          <div className="container books_box">
            <div className="col-12 text-center p-5">
        <img src="http://pngimg.com/uploads/pen/small/pen_PNG7413.png" height="300px" alt='img' className="img-fluid text-center" />
       </div>
        <div className="col-12">
        <p className="category_box_h7">STATIONARY</p>
        </div>
          </div>
         </Link>
        </div>
       
        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 pb-4">
         <p >
          <div className="container  drinkware_box">
            <div className="col-12 text-center p-5">
        <img src="https://www.pngmart.com/files/6/Photocopier-Machine-Background-PNG-359x279.png" height="300px" alt='img' className="img-fluid text-center" />
       </div>
        <div className="col-12 ">
        <Link> <p className="category_box_h7 ">PHOTOCOPIERS</p></Link>
        </div>
          </div>
         </p>
        </div>
       <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 pb-4 ">
         <p to="#" className="category_box_h4">
          <div className="container d-flex crossword_box">
            <div className="col-8 text-center">
        <img src="https://freepngimg.com/thumb/toy/33571-5-plush-toy-image-thumb.png" height="300px" alt='img' className="img-fluid p-5" />
       </div>
        <div className="col-4 pt-5 mt-5 justify-content-center">
        <p className="category_box_h4 ">PLUSH TOYS</p>
       <Link> <p className="category_box_h7">SHOP NOW</p></Link>
        </div>
          </div>
         </p>
        </div>
   
      </div>
    </div>
    )
}

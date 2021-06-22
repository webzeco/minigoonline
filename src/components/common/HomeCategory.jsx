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
        <img src="http://www.pngall.com/wp-content/uploads/6/Sweater-PNG-Image.png" height="300px" alt='img' className="img-fluid pt-5" />
       </div>
        <div className="col-lg-6 col-md-6  pt-5 mt-5 justify-content-center no-under px-1">
        <p className="category_box_h4">BRANDED CLOTHES</p>
        <Link><p className="category_box_h7">SHOP NOW</p></Link>
        </div>
          </div>
         </p>
        </div>
   
        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 pb-4">
         <Link to="#">
          <div className="container books_box">
            <div className="col-12 text-center ">
        <img src="http://www.pngall.com/wp-content/uploads/8/E-Book-Cover-PNG.png" height="300px" alt='img' className="img-fluid text-center" />
       </div>
        <div className="col-12">
        <p className="category_box_h7">BOOKS</p>
        </div>
          </div>
         </Link>
        </div>
       
        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 pb-4">
         <p >
          <div className="container  drinkware_box">
            <div className="col-12 text-center">
        <img src="http://www.pngall.com/wp-content/uploads/2/Mug-PNG-Image-HD.png" height="300px" alt='img' className="img-fluid text-center" />
       </div>
        <div className="col-12">
        <Link> <p className="category_box_h7 ">DRINKWARE</p></Link>
        </div>
          </div>
         </p>
        </div>
       <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 pb-4 ">
         <p to="#" className="category_box_h4">
          <div className="container d-flex crossword_box">
            <div className="col-8 text-center">
        <img src="https://www.freeiconspng.com/uploads/women-bag-png-32.png" height="300px" alt='img' className="img-fluid p-5" />
       </div>
        <div className="col-4 pt-5 mt-5 justify-content-center">
        <p className="category_box_h4 ">CROSSWORD</p>
       <Link> <p className="category_box_h7">SHOP NOW</p></Link>
        </div>
          </div>
         </p>
        </div>
   
      </div>
    </div>
    )
}

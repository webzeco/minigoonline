import React from 'react'

export default function HomeCategory({title,col}) {
    return (

      <div class="container pt-5">
      <div class="row justify-content-center">
        <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12 pb-4">
         <a href="#" class="category_box_h4">
          <div class="container d-flex branded-colth_box">
            <div class="col-lg-6 col-md-5 col-sm-8 text-center">
        <img src="http://www.pngall.com/wp-content/uploads/6/Sweater-PNG-Image.png" height="300px" class="img-fluid pt-5" />
       </div>
        <div class="col-lg-6 col-md-6  pt-5 mt-5 justify-content-center no-under px-1">
        <p class="category_box_h4">BRANDED CLOTHES</p>
        <p class="category_box_h7">SHOP NOW</p>
        </div>
          </div>
         </a>
        </div>
   
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 pb-4">
         <a href="#">
          <div class="container books_box">
            <div class="col-12 text-center ">
        <img src="http://www.pngall.com/wp-content/uploads/8/E-Book-Cover-PNG.png" height="300px" class="img-fluid text-center" />
       </div>
        <div class="col-12">
        <p class="category_box_h7">BOOKS</p>
        </div>
          </div>
         </a>
        </div>
       
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 pb-4">
         <a href="#">
          <div class="container  drinkware_box">
            <div class="col-12 text-center">
        <img src="http://www.pngall.com/wp-content/uploads/2/Mug-PNG-Image-HD.png" height="300px" class="img-fluid text-center" />
       </div>
        <div class="col-12">
        <p class="category_box_h7 ">DRINKWARE</p>
        </div>
          </div>
         </a>
        </div>
   
   
   
       <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12 pb-4 ">
         <a href="#" class="category_box_h4">
          <div class="container d-flex crossword_box">
            <div class="col-8 text-center">
        <img src="https://www.freeiconspng.com/uploads/women-bag-png-32.png" height="300px" class="img-fluid p-5" />
       </div>
        <div class="col-4 pt-5 mt-5 justify-content-center">
        <p class="category_box_h4 ">CROSSWORD</p>
        <p class="category_box_h7">SHOP NOW</p>
        </div>
          </div>
         </a>
        </div>
   
      </div>
    </div>
   
   
   
   
    )
}

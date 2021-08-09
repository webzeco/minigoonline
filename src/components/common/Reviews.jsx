// import React from 'react'
// import ProductList from './showProductList';
// import ReactStars from "react-rating-stars-component";

// import './style/review.css';
// export default function Reviews({reviews}) {
//     return (
//      <section>
//      <div class="container">
//        <div class="row h-100">
//          <div class="col-lg-7 mx-auto text-center mb-6">
//            <h5 class="fw-bold fs-3 fs-lg-5 lh-sm mb-3 ">Our Customer's Reviews </h5>
//          </div>
//          <div class="col-12">
//            <div class="carousel slide" id="carouselBestSellers" data-bs-touch="false" data-bs-interval="false">
//              <div class="carousel-inner">
//                <div class="carousel-item active" data-bs-interval="10000">
//                  {/* <div class="row h-100 align-items-center g-2"> */}
//                  {/* <ProductList pageDataList={first} /> */}
//                  {/* review  */}
//                  <div class="row align-items-center g-2 ">
//                 {/* cara */}

//                 {/* cara */}
//                  {reviews && reviews.map((rev, index) => {
//                     return (

//                         <div key={index}  class="col-md-4  mb-3 mb-md-0">
//                         <div class="card card_back_col p-3 Card_h_w ">
//                             <div class="d-flex align-items-center mt-1 ">
//                             <ReactStars
//                             value={rev.rating}
//                             />
//                               </div>
//                             <div class="fw-bold r_title_look mb-2">{rev.reviewTitle}</div>
//                             <div class="fw-bold r_name_look mb-3  ">{rev.name}</div>
//                             <p class=" re_dis_look overflow-auto">{rev.feedback}</p>
//                         </div>
//                       </div>

//                     );
//                 })}

//                  </div>
//   {/* /review */}
//                </div>
//                <div class="carousel-item" data-bs-interval="5000">
//                <div class="row align-items-center g-2 ">
//                   <div class="col-md-4  mb-3 mb-md-0   ">
//                     <div class="card card_back_col p-3 Card_h_w ">
//                         <div class="d-flex align-items-center mt-1 ">
//                             <ul class="list-inline mb-2 me-3 small  ">
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-muted"></i></li>
//                             </ul>
//                           </div>
//                         <div class="fw-bold r_title_look mb-2">Title of Review</div>
//                         <div class="fw-bold r_name_look mb-3  ">Name of Customer</div>
//                         <p class=" re_dis_look overflow-auto">Review Discription</p>
//                     </div>
//                   </div>
//                   <div class="col-md-4  mb-3 mb-md-0 ">
//                     <div class="card card_back_col p-3 Card_h_w">
//                         <div class="d-flex align-items-center mt-1 ">
//                             <ul class="list-inline mb-2 me-3 small  ">
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-muted"></i></li>
//                             </ul>
//                           </div>
//                         <div class="fw-bold r_title_look mb-2">Title of Review</div>
//                         <div class="fw-bold r_name_look mb-3  ">Name of Customer</div>
//                         <h8 class=" re_dis_look ">Review Discription</h8>
//                     </div>
//                   </div>
//                   <div class="col-md-4  mb-3 mb-md-0 ">
//                     <div class="card card_back_col p-3 Card_h_w">
//                         <div class="d-flex align-items-center mt-1 ">
//                             <ul class="list-inline mb-2 me-3 small  ">
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-muted"></i></li>
//                             </ul>
//                           </div>
//                         <div class="fw-bold r_title_look mb-2">Title of Review</div>
//                         <div class="fw-bold r_name_look mb-3  ">Name of Customer</div>
//                         <h8 class=" re_dis_look ">Review Discription</h8>
//                     </div>
//                   </div>
//                 </div>

//                </div>
//                <div class="carousel-item" data-bs-interval="3000">
//                  <div class="row h-100 align-items-center g-2">
//                  {/* <ProductList pageDataList={first} /> */}
//                   </div>
//                </div>
//                <div class="carousel-item">
//                  <div class="row h-100 align-items-center g-2">
//                  {/* <ProductList pageDataList={second} /> */}
//                 </div>
//                </div>
//                <div class="row">
//                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselBestSellers" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button>
//                  <button class="carousel-control-next" type="button" data-bs-target="#carouselBestSellers" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next </span></button>
//                </div>
//              </div>
//            </div>
//          </div>
//        </div>
//      </div>
//    </section>
//    )
// }
// {/* <section>
//     <div class="container pt-5 ">
//       <div class="row h-100">
//         <div class="col-lg-7 mx-auto text-center mb-6">
//           <div class="fw-bold fs-3 fs-lg-5 lh-sm mb-3 r_title_look ">Shop Best Sellers</div>
//         </div>
//         <div class="col-12">
//           <div class="carousel slide" id="carouselBestSellers" data-bs-touch="false" data-bs-interval="false">
//             <div class="carousel-inner">
//               <div class="carousel-item active" data-bs-interval="10000">
//                 <div class="row align-items-center g-2 ">
//                   <div class="col-md-4  mb-3 mb-md-0   ">
//                     <div class="card card_back_col p-3 Card_h_w ">
//                         <div class="d-flex align-items-center mt-1 ">
//                             <ul class="list-inline mb-2 me-3 small  ">
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-muted"></i></li>
//                             </ul>
//                           </div>
//                         <div class="fw-bold r_title_look mb-2">Title of Review</div>
//                         <div class="fw-bold r_name_look mb-3  ">Name of Customer</div>
//                         <p class=" re_dis_look overflow-auto">Review Discription</p>
//                     </div>
//                   </div>
//                   <div class="col-md-4  mb-3 mb-md-0 ">
//                     <div class="card card_back_col p-3 Card_h_w">
//                         <div class="d-flex align-items-center mt-1 ">
//                             <ul class="list-inline mb-2 me-3 small  ">
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-muted"></i></li>
//                             </ul>
//                           </div>
//                         <div class="fw-bold r_title_look mb-2">Title of Review</div>
//                         <div class="fw-bold r_name_look mb-3  ">Name of Customer</div>
//                         <h8 class=" re_dis_look ">Review Discription</h8>
//                     </div>
//                   </div>
//                   <div class="col-md-4  mb-3 mb-md-0 ">
//                     <div class="card card_back_col p-3 Card_h_w">
//                         <div class="d-flex align-items-center mt-1 ">
//                             <ul class="list-inline mb-2 me-3 small  ">
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                               <li class="list-inline-item m-0"><i class="fas fa-star small text-muted"></i></li>
//                             </ul>
//                           </div>
//                         <div class="fw-bold r_title_look mb-2">Title of Review</div>
//                         <div class="fw-bold r_name_look mb-3  ">Name of Customer</div>
//                         <h8 class=" re_dis_look ">Review Discription</h8>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="carousel-item" data-bs-interval="5000">
//                 <div class="row h-100 align-items-center g-2">
//                     <div class="col-md-4  mb-3 mb-md-0 ">
//                         <div class="card card_back_col p-3 Card_h_w">
//                             <div class="d-flex align-items-center mt-1 ">
//                                 <ul class="list-inline mb-2 me-3 small  ">
//                                   <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                                   <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                                   <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                                   <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                                   <li class="list-inline-item m-0"><i class="fas fa-star small text-muted"></i></li>
//                                 </ul>
//                               </div>
//                             <div class="fw-bold r_title_look mb-2">Title of Review</div>
//                             <div class="fw-bold r_name_look mb-3  ">Name of Customer</div>
//                             <h8 class=" re_dis_look ">Review Discription</h8>
//                         </div>
//                       </div>
//                       <div class="col-md-4  mb-3 mb-md-0 ">
//                         <div class="card card_back_col p-3 Card_h_w">
//                             <div class="d-flex align-items-center mt-1 ">
//                                 <ul class="list-inline mb-2 me-3 small  ">
//                                   <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                                   <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                                   <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                                   <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                                   <li class="list-inline-item m-0"><i class="fas fa-star small text-muted"></i></li>
//                                 </ul>
//                               </div>
//                             <div class="fw-bold r_title_look mb-2">Title of Review</div>
//                             <div class="fw-bold r_name_look mb-3  ">Name of Customer</div>
//                             <h8 class=" re_dis_look ">Review Discription</h8>
//                         </div>
//                       </div>
//                       <div class="col-md-4  mb-3 mb-md-0 ">
//                         <div class="card card_back_col p-3 Card_h_w">
//                             <div class="d-flex align-items-center mt-1 ">
//                                 <ul class="list-inline mb-2 me-3 small  ">
//                                   <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                                   <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                                   <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                                   <li class="list-inline-item m-0"><i class="fas fa-star small text-warning"></i></li>
//                                   <li class="list-inline-item m-0"><i class="fas fa-star small text-muted"></i></li>
//                                 </ul>
//                               </div>
//                             <div class="fw-bold r_title_look mb-2">Title of Review</div>
//                             <div class="fw-bold r_name_look mb-3  ">Name of Customer</div>
//                             <h8 class=" re_dis_look ">Review Discription</h8>
//                         </div>
//                       </div>
//                 </div>
//               </div>
//               <div class="row">
//                 <button class="carousel-control-prev" type="button" data-bs-target="#carouselBestSellers" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button>
//                 <button class="carousel-control-next" type="button" data-bs-target="#carouselBestSellers" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next </span></button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//    */}
import React from 'react'
import ProductList from './showProductList';
import ReactStars from "react-rating-stars-component";

import './style/review.css';
export default function Reviews({ reviews }) {
  return (
    <div>
       <h5 class="fw-bold fs-3 fs-lg-5 text-center lh-sm mb-3 ">Our Customer's Reviews </h5>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        {reviews && reviews.map((rev, index, array) => {
          console.log(index, array.length);
          if (array.length>3) {
            if (array.length < index + 3) return null;
          }
          return (
            <div class={`carousel-item ${index === 0 ? "active" : ""} justify-content-center text-center m-5`}>
              <div key={index} class="col-md-4 m-0 mb-3 mb-md-0">
                <div class="card card_back_col p-3 Card_h_w ">
                  <div class="d-flex align-items-center  mt-1 ">
                    <div class="fw-bold r_title_look m-0 mb-2"> <ReactStars
                      value={rev.rating}
                    /></div>
                  </div>
                  <div class="fw-bold r_title_look m-0 mb-2">{rev.reviewTitle}</div>
                  <div class="fw-bold r_name_look mb-3  ">{rev.name}</div>
                  <p class=" re_dis_look overflow-auto">{rev.feedback}</p>
                </div>
              </div>
              <div key={index} class="col-md-4 m-0 mb-3 mb-md-0">
                <div class="card card_back_col p-3 Card_h_w ">
                  <div class="d-flex align-items-center mt-1 ">
                    <ReactStars
                      value={array[index + 1].rating}
                    />
                  </div>
                  <div class="fw-bold r_title_look mb-2">{array[index + 1].reviewTitle}</div>
                  <div class="fw-bold r_name_look mb-3  ">{array[index + 1].name}</div>
                  <p class=" re_dis_look overflow-auto">{array[index + 1].feedback}</p>
                </div>
              </div>
              <div key={index} class="col-md-4  mb-3 mb-md-0">
                <div class="card card_back_col p-3 Card_h_w ">
                  <div class="d-flex align-items-center mt-1 ">
                    <ReactStars
                      value={array[index + 2].rating}
                    />
                  </div>
                  <div class="fw-bold r_title_look mb-2">{array[index + 2].reviewTitle}</div>
                  <div class="fw-bold r_name_look mb-3  ">{array[index + 2].name}</div>
                  <p class=" re_dis_look overflow-auto">{array[index + 2].feedback}</p>
                </div>
              </div>
            </div>
          );
        })}

      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  )
}
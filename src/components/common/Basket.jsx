import React from "react";

export default function Basket({ id, image, price, selected }) {
  return (
    <>
    
    <div className="container w-50 mt-2 ">
      <lable for={id} >
        <div className="card p-3 border-danger" >
          <img
            style={{ width: "120px", height: "120px" , borderRadius:"100px" }}
            src={`${process.env.REACT_APP_URL}/img/${image}`}
            className="card-img-top text-center img-fluid "
            alt="basket img"
          />
            <h6 className="fw-bold px-2">Price</h6>
            <p className="card-text px-2">Rs.{price}</p>
            <input
        type="radio"
        id={id}
        name="BuckerRadio"
        value={price}
        onChange={(event) => selected(event)}
        className="mx-2"
      />
     

          </div>
        </lable>
        </div>
      
    
    </>
  );
}

import React from "react";

export default function Basket({ id, image, price, selected }) {
  return (
    <>
      <input
        type="radio"
        id={id}
        name="BuckerRadio"
        value={price}
        onChange={(event) => selected(event)}
      />
      <label for={id}>
        <div className="card m-1" style={{ width: "104px" }}>
          <img
            style={{ width: "100px", height: "100px" }}
            src={`${process.env.REACT_APP_URL}/img/${image}`}
            className="card-img-top p-2"
            alt="basket img"
          />
          <div className="card-body">
            <h6>Price</h6>
            <p className="card-text">Rs.{price}</p>
          </div>
        </div>
      </label>
    </>
  );
}

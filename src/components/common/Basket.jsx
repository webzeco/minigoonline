import React from "react";
import { useSelector } from "react-redux";
import { getSelectedBucket } from "../../storemini/reducers/cart";

export default function Basket({ handleBucket, bucket }) {
  const selectedBucket = useSelector(getSelectedBucket);

  return (
  <>
      <div className="container w-50 mt-2">
        <label for={bucket.id} >
          <div className="card p-3 border-danger" >
            <img
              style={{ width: "120px", height: "120px", borderRadius: "100px" }}
              src={`${process.env.REACT_APP_URL}/img/${bucket.image}`}
              className="card-img-top text-center img-fluid "
              alt="basket img"
            />
            <h6 className="fw-bold px-2">Price</h6>
            <p className="card-text px-2">Rs.{bucket.price}</p>
            <input
              type="radio"
              id={bucket.id}
              checked={bucket?._id===selectedBucket?._id}
              name="BuckerRadio"
              value={bucket.price}
              onChange={() => handleBucket(bucket)}
              className="mx-2 form-check-input"
            />
          </div>
        </label>
      </div>
  </>
);
}

import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import { getCart } from '../../storemini/reducers/cart';

export default function CartSummary() {
    const cart = useSelector(getCart);
    const [shippingCharges, setshippingCharges] = useState(100);

    return (
        <div>
                <div className="col-lg-5 col-md-12  pt-5 bg_color">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <div className="h6">Cart Summary</div>
            </div>
            {cart?.list?.map((prod) => {
              return (
                <div key={prod.product.id} className="d-flex jusitfy-content-between align-items-center pt-3 pb-2 border-bottom">
                  <div className="item pr-2">
                    <div className="number bg-info p-2 rounded-circle w-50 text-center text-white ">
                      {prod.qty}
                    </div>
                    <img
                      src={`${process.env.REACT_APP_URL}/img/${prod.product.images[0]}`}
                      alt=""
                      width="80"
                      height="80"
                    />
                  </div>
                  <div className="d-flex flex-column px-3">
                    <b className="h5">{prod.product.title}</b>
                    {prod.selectedVariants.map((veri,index) => {
                      return (
                        <p key={index} className="lead lh-sm fs-6 p-0 m-0">
                          {veri.variantType}/{veri.selectedVariant}
                        </p>
                      );
                    })}
                    {/* <a href="#" className="h5 text-primary">C-770</a> */}
                  </div>
                  <div className="ml-auto">
                    <b className="h5">{prod.qty *prod.product.price } Rs</b>
                  </div>
                </div>
              );
            })}

            <div className="my-3">
              {" "}
              <input
                type="text"
                className="w-100 form-control text-center"
                placeholder="Gift Card or Promo Card"
              />{" "}
            </div>

            <div className="col-lg-5 col-md-12 mt-4">
              <div className="d-flex align-items-center border-top justify-content-between">
                <div className="display-8 fw-bold">Subtotal</div>
                <div className="ml-auto font-weight-bold">
                  Rs.{cart.subtotal}
                </div>
              </div>
              <div className="d-flex align-items-center py-2 border-bottom justify-content-between">
                <div className="display-8 fw-bold">Shipping</div>
                <div className="ml-auto">Rs.{shippingCharges}</div>
              </div>
              <div className="d-flex align-items-center py-2 justify-content-between">
                <div className="display-8 fw-bold">Total</div>
                <div className="ml-auto d-flex">
                  <div className="font-weight-bold">
                    Rs.{cart.subtotal + shippingCharges}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        </div>
    )
}

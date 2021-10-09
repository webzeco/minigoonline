import { useState } from "react";
import ntcjs from "ntcjs";


const CartProduct = (props) => {
  console.log({ product: props });
  // const [qty, setQty] = useState(props.product.qty);
  return (
    <div key={props.key} className="container font_fam">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-md-12 d-flex font_fam">
          <div className="row pt-3">
            <div className="col-lg-3 col-md-2 col-xs-4">
              <img
                className="img-fluid img_look_on_cart"
                src={`${process.env.REACT_APP_URL}/img/${props.product.images[0]}`}
                alt="Product Img"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="h5 pro_title_h5 pb-1">
                {props.product.title}
              </div>
              {props.selectedVariants.map((variant, index) => {
                console.log(variant, ntcjs.name(variant.selectedVariant));
                if (variant.variantType === 'Color') {
                  return <div key={index}>{ntcjs.name(variant.selectedVariant)[1]}/</div>
                } else
                  return (
                    <div key={index}>{variant.selectedVariant}/</div>
                  )
              }
              )}
              <p>Estimated Processing Time:</p>
              <p>{props.product.estimatedProcessingTime}</p>
            </div>
            <div className="col-lg-5 col-md-6 col-xs-12 d-flex justify-content-between">
              <input
                className="form-control mt-5 mb-5 w-50"
                id={props.product.id}
                type="number"
                min={1}
                onChange={(e) => props.handleQuantityChange(e, props.product.id)}
                defaultValue={props.qty}
              />
              <button
                type="button"
                className="btn btn-white text-center  "
                id={props.product.id}
                onClick={() => props.removeCartItem(props.product.id)}
              >
                x Remove
              </button>
              <div className="h5 pro_price_h5 mt-5 mb-5 mx-5 fw-bold">
                Rs. {props.productPrice * props.qty}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ho mb-3 pt-3 w-75"></div>
    </div>
  );
};
export default CartProduct;
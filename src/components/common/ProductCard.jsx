import { Link } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { ProductDetailContext } from "../contexts/ProductDetailContext";
import "./style/productCard.css";
const ProductCard = ({ images, title, price, colorImg, product }) => {

  const { productDetailHandler } = useContext(ProductDetailContext);
  const [image, setImage] = useState(images[0]);
  useEffect(() => { }, [image]);

  const changeImgEnter = () => {
    if (images.length > 1) {
      setImage(images[1]);
    }
  };
  const changeImgLeave = () => {
    if (images.length > 1) {
      setImage(images[0]);
    }
  };
  const onradioBtnChange = (e) => {
    setImage(e.target.value);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const onClicked = (prod) => {
    productDetailHandler(prod);
    scrollToTop();
    // console.log("clicked");
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 pt-3 px-3" style={{ position: "inherit", width: '300px' }} >
      <div class="img__wrapper">
        <div className="card hid_border ">
          <Link onClick={() => onClicked(product)}>
            <span class="badge badge-lg mt-3 badge_best">Best Saller</span>
            <img
              alt="item img"
              src={`${process.env.REACT_APP_URL}/img/${image}`}
              onMouseEnter={() => changeImgEnter()}
              onMouseLeave={() => changeImgLeave()}
              // onClick={() => onClicked(product)}
              className="img-fluid img_back_col text-center mb-2 p-3"
            />
            <h6 className="card-title fw-bold ">
              {title}
            </h6>
          </Link>
          <span className="card-text">Rs.{price}</span>
          <div className="radio-buttons">
            {colorImg.map((colorbtn, index) => {
              return <label key={index} className="radio round_btn_look ">
                <button
                  className="round-button"
                  name="colorsBtn"
                  value={colorbtn.img}
                  onClick={(e) => onradioBtnChange(e)}
                  style={{ backgroundColor: colorbtn.color }}
                />
              </label>

            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;

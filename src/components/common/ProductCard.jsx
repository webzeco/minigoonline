import { useContext, useEffect, useState } from "react";
import { ProductDetailContext } from "../contexts/ProductDetailContext";
import "./style/productCard.css";
const ProductCard = ({ images, title, price, colorImg, product }) => {
  const { productDetailHandler } = useContext(ProductDetailContext);
  const [image, setImage] = useState(images[0]);
  useEffect(() => {
    // console.log(image);
  }, [image]);

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
    // console.log(e.target.value);
    setImage(e.target.value);
  };
  const onClicked = (prod) => {
    productDetailHandler(prod);
  };

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 pt-3 pb-3" >
            <div className="card hid_border ">
                    <img
                    alt='item img'
                        src={`${process.env.REACT_APP_URL}/img/${image}`} onClick={()=>onClicked(product)}
                        onMouseEnter={() => changeImgEnter()} onMouseLeave={() =>
                           { changeImgLeave() }}
                        className="img-fluid img_back_col text-center mb-2 p-3"
                    />
                    <h6 className="card-title fw-bold " onClick={()=>onClicked(product)}>{title}</h6>
                    <span className="card-text">${price}</span>
                    <div className="radio-buttons">
                        {colorImg.map(
                            (colorbtn) => {
                                return (<label className="radio round_btn_look ">
                                    <button
                                        className='round-button'
                                        name="colorsBtn"
                                        value={colorbtn.img} onClick={(e) => onradioBtnChange(e)}
                                        style={{ backgroundColor: colorbtn.color }} />
                                </label>)
                            }
                        )}
                    </div>
                </div>
            </div>
        
    

                   
                )

};
export default ProductCard;

import { useContext, useEffect, useState } from "react";
import { ProductDetailContext } from "../contexts/ProductDetailContext";
import "./style/productCard.css";
const ProductCard = ({ images, name, price, colorImg, product }) => {
  const { productDetailHandler } = useContext(ProductDetailContext);
  const [image, setImage] = useState(images[0]);
  useEffect(() => {
    console.log(image);
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
        <div class="col-lg-3 col-md-4 col-sm-6 pt-3 pb-3" >
            <div class="card hid_border">
                    <img
                    alt='item img'
                        src={`${process.env.REACT_APP_URL}/img/${image}`} onClick={()=>onClicked(product)}
                        onMouseEnter={() => changeImgEnter()} onMouseLeave={() =>
                           { changeImgLeave() }}
                        class="img-fluid img_back_col text-center mb-2 p-3"
                    />
                    <h6 class="card-title fw-bold " onClick={()=>onClicked(product)}>{name}</h6>
                    <span class="card-text">${price}</span>
                    <div class="radio-buttons">
                        {colorImg.map(
                            (colorbtn) => {
                                return (<label class="radio round_btn_look ">
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

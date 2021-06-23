import React, { useState } from 'react'
import Red from '../img/Red.png'
import Blue from '../img/Blue.png'
import Green from '../img/Green.png'
const ProductList = props => {
    return (
        <>
            <h3 className='text-center pb-4'>Shop Best Sellers</h3>
            <div className='row'>
                {props.productData.map(
                    (product) => {
                        const temp = {};
                        temp.title = product.title;
                        temp.price = product.price;
                        temp.images = [Blue, Green]
                        temp.colors = ''
                        return ProductCard(temp)
                    }
                )}
            </div>
        </>
    )
};

const ProductCard = ({ images, title, price, colors }) => {
    const [image, setImage] = useState(images[0]);
    const changeImgEnter = () => {
        if (images.length > 1) {
            setImage(images[1])
        }
    }
    const changeImgLeave = () => {
        if (images.length > 1) {
            setImage(images[0])
        }
    }
    return (
        <div class="col-lg-3 col-md-4 col-sm-6 pb-3 pb-3">
            <div class="card">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img
                    alt=''
                        src="https://www.freeiconspng.com/uploads/women-bag-png-32.png"
                        class="img-fluid"
                    />
                    <a href="#!">
                        <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)" } }></div>
                    </a>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Stacked logo Baseball Cap</h5>
                    <p class="card-text">
                        $28.00
                    </p>
                    <div class="mt-2 radio-buttons">
                        <label class="radio"> <input type="radio" name="code" value="grey" checked/> <span></span> </label>
                            <label class="radio"> <input type="radio" name="code" value="pink"/> <span></span> </label>
                                <label class="radio"> <input type="radio" name="code" value="black"/> <span></span></label>
                     </div>
                </div>
            </div>
        </div>
    

                   
                )

}
                export default ProductList;




                 {/* <div className='col-sm-3 col-lg-2 card'>
                        <img src={image} alt="" className='card-img-top'
                            onMouseEnter={() => changeImgEnter()} onMouseLeave={() => { changeImgLeave() }} />
                        <div className='card-body'>
                            <div className='card-text'>
                                <h3>{title}</h3>
                                <p>{price}</p>
                            </div>
                        </div>
                    </div> */}
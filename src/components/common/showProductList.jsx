import React, { useState } from 'react'
import { useEffect } from 'react';
import ProductCard from './ProductCard';




const ProductList = ({pageDataList}) => {
    return (
        <>
            <h3 className='text-center pb-4'>Shop Best Sellers</h3>
            <div className='row'>
{/* {            console.log(pageDataList)} */}
                {pageDataList&&pageDataList.map(
                    (product,index) => {
                        const {images,title,price}=product;
                        const colorImg=[];
                        // variants adjusted to colorImg array by  map method
                        product.variants.map(
                            (variant) => {
                                if (variant.selectedOption === "Color" ) {
                                    variant.tags.map(
                                        (tag) => {
                                            let colorData = {};
                                            colorData.color = tag.text;
                                            colorData.img = tag.img;
                                            colorImg.push(colorData)
                                        }
                                    )
                                }
                            }
                        )
      
                        return <ProductCard  key={index} images={images}title={title}price={price}colorImg={colorImg}/>
                    }
                )}
            </div>
        </>
    )
};


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
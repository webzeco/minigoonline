import React, { useContext } from 'react';
import { ProductDetailContext } from '../contexts/ProductDetailContext';
import './style/carauosel.css';

export default function TryCarauosel({getRelatedProducts}) {
    const { relatedProd } = useContext(ProductDetailContext);

    let items = document.querySelectorAll('.carousel-item')
    items.forEach((el) => {
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                next = items[0]
            };
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    });

    return (
        <div>
            <div className="container text-center my-3">
                <h2 className="font-weight-light">Bootstrap Multi Slide Carousel</h2>
                <div className="row mx-auto my-auto justify-content-center">
                    <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            {/* {relatedProd?.relatedProd.map(prod=>{
                                return (
                                )
                            })} */}
                            <div className="carousel-item active">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src="//via.placeholder.com/500x400/31f?text=1" className="img-fluid" />
                                        </div>
                                        <div className="card-img-overlay">Slide 1</div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src="//via.placeholder.com/500x400/fc0?text=6" className="img-fluid" />
                                        </div>
                                        <div className="card-img-overlay">Slide 6</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </a>
                        <a className="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
                <h5 className="mt-2 fw-light">advances one slide at a time</h5>
            </div>
        </div>
    )
}

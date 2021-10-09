import { Link } from '@material-ui/core';
import React, { useContext } from 'react';
import { ProductDetailContext } from '../contexts/ProductDetailContext';
export default function SearchElement({ items, clearSearch, mobile = false }) {
  const { productDetailHandler } = useContext(ProductDetailContext);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const onClicked = (prod) => {
    productDetailHandler(prod);
    scrollToTop();
    clearSearch();
    // console.log("clicked");
  };

  return (
    <div>
      {items.map((item, index) => {
        return <li
          style={{ width: mobile ? "100%" : "25%" }}
          key={index}
          className={`list-group-item w-${mobile ? "100" : "50"}`}
        >
          <Link
            onClick={() => onClicked(item)}
            className="list-group-item list-group-item-action list_look"
          >
            <div className="d-flex justify-content-between">
              <img
                src={`${process.env.REACT_APP_URL}/img/${item.images[0]}`}
                height="40px"
                width="40px"
                className="img-fluid"
                alt=''
              />
              <p className="pro_title_look">{item.title}</p>
              <small className="fw-bold mt-4">From Rs.{item.price}</small>
            </div>
          </Link>
        </li>
      })}
    </div>
  )
}

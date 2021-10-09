import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { productData } from "../data";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function Search() {
  const [searchText, setSearchText] = useState();
  const [items, setItems] = useState([]);

  const searchInput = useRef("");
  useEffect(() => {
    getRelatedItemsHandler();
    if (!searchText) setItems([]);
  }, [searchText]);
  const onTextChangeHandler = () => {
    setSearchText(searchInput.current.value);
  };
  const getRelatedItemsHandler = () => {
    setItems(productData.filter((prod) => prod.title.includes(searchText)));
  };
  return (
    <>
      <div className="col-3 d-flex justify-content-end mt-2" >
        <FontAwesomeIcon className="m-3 mr-2" icon={faSearch} />
        <input
          type="search"
          ref={searchInput}
          value={searchText}
          onChange={onTextChangeHandler}
          className="form-control  w-50 mb-5 no-border mr-sm-2"
          placeholder="Search"
        />
      </div>
      {items.map((prod, index) => {
        return (
          <li

            key={index}
            className="list-group-item ms-5"

          >
            <a
              href="#"
              className="list-group-item list-group-item-action list_look"
            >
              <div className=" row d-flex justify-content-between">
                <div className="col-4">
                  <img
                    src="https://www.freeiconspng.com/uploads/women-bag-png-32.png"
                    height="40px"
                    width="40px"
                    className="img-fluid"
                  />
                </div>
                <div className="col-4">
                  <p className="pro_title_look">{prod.title}</p>
                </div>
                <div className="col-4">
                  <small className="fw-bold mt-4">From $30.00</small>
                </div>
              </div>
            </a>
          </li>
        );
      })}
    </>
  );
}

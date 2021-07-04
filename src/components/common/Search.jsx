import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react';
import { productData } from '../data';
import {
  faSearch
} from "@fortawesome/free-solid-svg-icons";
export default function Search() {
  const [searchText, setSearchText] = useState();
  const [items, setItems] = useState([]);

  const searchInput = useRef('');
  useEffect(() => {
    getRelatedItemsHandler();
    console.log(items);
    if (!searchText) setItems([]);
  }, [searchText])
  const onTextChangeHandler = () => {
    setSearchText(searchInput.current.value);
    console.log(searchText);
  }
  const getRelatedItemsHandler = () => {
    setItems(productData.filter(prod => prod.title.includes(searchText)));
  }
  return (
    <>
      <div className="col-3 d-flex justify-content-end mt-2">
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
      <ul class="list-group" style={{border:'none'}}>

        {items.map(prod => {
          return (
            <li class="list-group-item " aria-current="true" style={{width:'25%',marginLeft:'60px'}}>
              <a href="#" class="list-group-item list-group-item-action list_look" >
                <div class="d-flex justify-content-between">
                  <img src="https://www.freeiconspng.com/uploads/women-bag-png-32.png" height="40px" width="40px" class="img-fluid" />
                  <p class="pro_title_look">{prod.title}</p>
                  <small class="fw-bold mt-4">From $30.00</small>
                </div>
              </a>
            </li>

          )
        })}
      </ul>

    </>
  )
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useRef, useState } from 'react';
import './style/upperherader.css';
import { productData } from '../data';
import {
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
export default function Search() {
  const { user } = useContext(UserContext);
  const [searchText, setSearchText] = useState();
  const [items, setItems] = useState([]);
  const searchInput = useRef('');
  useEffect(() => {
    getRelatedItemsHandler();
    // console.log(items);
    if (!searchText) setItems([]);
  }, [searchText])
  const onTextChangeHandler = () => {
    setSearchText(searchInput.current.value);
    // console.log(searchText);
  }
  const getRelatedItemsHandler = () => {
    setItems(productData.filter(prod => prod.title.includes(searchText)));
  }
  return (
    <>
  <div  className="col-3  d-flex justify-content-end mt-2" >
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

    {/* search bar ended */}
    <div className="col-5 text-center pt-3  not-show">
          <img
            // src={`${process.env.REACT_APP_URL}/images/logo.png`}
            src='https://namibwear.com/wp-content/plugins/minigo/inc/admin/img/logo.png'
            height="60px"
            alt="logo img"
          />
        </div>
        <div className="col-4  pt-3 ">
          <div className="row justify-content-end">
            <div className="col-5">
              {!user && (<Link to='/login'>
                <FontAwesomeIcon className="mt-2 icon_s_look mx-1"  icon={faUser} />
                <span className="s_look" >
                  Sign in
                </span>
              </Link>)}
              {user && (<Link to='/account'>
                <FontAwesomeIcon className="mt-2 icon_s_look mx-1" icon={faUser} />
                <span className="s_look" >
                  {user.username}
                </span>
              </Link>)}
            </div>
            <div className="col-6">
              {/* <i className="fa fa-cart-plus pt-1 mx-2"></i> */}
              <Link to='/cart'>
                <FontAwesomeIcon className="fa-cart-plus icon_s_look mx-1" icon={faCartPlus} />
                <span className="s_look " >
                  Cart
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* searched items starts */}
        <ul class="List-group w-25 mx-5">
  {items.map((prod,index) => {
          return (
            <li   key={index} className="list-group-item ">
              <p   >
                <div  className="d-flex justify-content-between ">
                  <img src="https://www.freeiconspng.com/uploads/women-bag-png-32.png" height="40px" width="40px" className="img-fluid" />
                  <p className="pro_title_look">{prod.title}</p>
                  <small className="fw-bold mt-4">From $30.00</small>
                </div>
              </p>
            </li>
          )
        })}
        </ul>


    </>
  )
}

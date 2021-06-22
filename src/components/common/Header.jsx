import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {  Collection } from "../contexts/Collection";
import {
  faSearch,
  faUser,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavMenu from "./NavMenu";
import "./style/navmenu.css";

export default function Header() {
  const Coll = useContext(Collection)
  const [collection, setCollection] = useState(null);
  const showMenu = (collection) => {
    setCollection(collection);
  };
  const hideMenu = () => {
    setCollection(null);
  };

  console.log({coll:Coll});
  // Coll.setCollectionHandler("Ali Ahmad");
  console.log({coll:Coll});

  return (
    <>
      <div className="row bg-white fixed-top">
        <div className="col-3 d-flex justify-content-end mt-2">
          {/* <i className="fa fa-search pt-3 px-1"></i> */}
          <FontAwesomeIcon className="m-3 mr-2" icon={faSearch} />
          <input
            type="search"
            className="form-control  w-50 mb-5 no-border mr-sm-2"
            placeholder="Search"
          />
        </div>

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
              {/* <i className="fa fa-user pt-1  mx-2 "></i> */}
              <FontAwesomeIcon className="mt-2" icon={faUser} />
              <span style={{ fontSize: "small", paddingLeft: "2px" }}>
                Sign in
              </span>
            </div>
            <div className="col-6">
              {/* <i className="fa fa-cart-plus pt-1 mx-2"></i> */}
              <FontAwesomeIcon className="fa-cart-plus" icon={faCartPlus} />
              <span style={{ fontSize: "small", paddingLeft: "2px" }}>
                Cart
              </span>
            </div>
          </div>
        </div>
              {/* navbar starts */}
        <div className="d-flex justify-content-center" >
          <Link style={{textDecoration:'none',color:'black'}} exact className='p-2 active' onMouseEnter={hideMenu}  to="/">Best Sellers
          </Link>
          <Link style={{textDecoration:'none',color:'black'}} className='p-2 link' onMouseEnter={() => showMenu("Personalized")}  to="/">Personalized</Link>
          <Link style={{textDecoration:'none',color:'black'}} className='p-2' onMouseEnter={() => showMenu("Times Goods")}  to="/">Times Goods</Link>
          <Link style={{textDecoration:'none',color:'black'}} className='p-2' onMouseEnter={() => showMenu("Wall Art")}  to="/">Wall Art</Link>
          <Link style={{textDecoration:'none',color:'black'}} className='p-2' onMouseEnter={() => showMenu("Books")}  to="/">Books  </Link>
          <Link style={{textDecoration:'none',color:'black'}} className='p-2' onMouseEnter={hideMenu}  to="/">Special Sections</Link>
          <Link style={{textDecoration:'none',color:'black'}} className='p-2' onMouseEnter={hideMenu}  to="/">Sale</Link>
        </div>
        {console.log(collection)}
        <NavMenu onMouseEnter={hideMenu} hideMenu={hideMenu} collection={collection} />
      </div>
    </>
  );
}


import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  faSearch,
  faUser,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavMenu from "./NavMenu";
import "./style/navmenu.css";

export default function Header() {
  const [collection, setCollection] = useState(null);
  const showMenu = (collection) => {
    setCollection(collection);
  };
  const hideMenu = () => {
    setCollection(null);
  };
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
            src='https://lh3.googleusercontent.com/proxy/2eEVb9QCZk0QxMkdDF1PiyWQrmo21nZ1NbsAUJcGlUFraW4NjmNC787arWByVI_L5sKugH5Glym4mPnNSU3-wZjhzSGl0J6gkGKo1oS6KXIEaWf00pvO9owOZIugwiPJV3t8d4KS'
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
          <Link exact className='p-2' onMouseEnter={hideMenu} activeclassName="active" to="/">Best Sellers
          </Link>
          <Link className='p-2 link' onMouseEnter={() => showMenu("Personalized")} activeclassName="active" to="/">Personalized</Link>
          <Link className='p-2' onMouseEnter={() => showMenu("Times Goods")} activeclassName="active" to="/">Times Goods</Link>
          <Link className='p-2' onMouseEnter={() => showMenu("Wall Art")} activeclassName="active" to="/">Wall Art</Link>
          <Link className='p-2' onMouseEnter={() => showMenu("Books")} activeclassName="active" to="/">Books  </Link>
          <Link className='p-2' onMouseEnter={hideMenu} activeclassName="active" to="/">Special Sections</Link>
          <Link className='p-2' onMouseEnter={hideMenu} activeclassName="active" to="/">Sale</Link>
        </div>
        {console.log(collection)}
        <NavMenu onMouseEnter={hideMenu} hideMenu={hideMenu} collection={collection} />
      </div>
    </>
  );
}

{
  /* <Link exact className='p-2' activeclassName="active" to="/"> <FadeMenu collection={'Best Sellers'}/>
    </Link>
      <Link className='p-2 link' activeclassName="active" to="/">    
      <FadeMenu collection={'Personalized'}/>
      </Link>
      <Link className='p-2' activeclassName="active" to="/">
      <FadeMenu collection={'Times Goods'}/>
        </Link>

      <Link className='p-2' activeclassName="active" to="/"><FadeMenu collection={'Wall Art'}/>
</Link>
      <Link className='p-2' activeclassName="active" to="/">      <FadeMenu collection={'Books'}/>
  </Link>
      <Link className='p-2' activeclassName="active" to="/"> <FadeMenu collection={'Special Sections'}/></Link>
      <Link className='p-2' activeclassName="active" to="/"> <FadeMenu collection={'Sale'}/></Link> */
}

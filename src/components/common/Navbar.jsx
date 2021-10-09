import React, { useContext, useEffect, useState } from "react";
import "./style/navbar.css";
import $ from "jquery";
import { CollectionContext } from "../contexts/CollectionContext";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { productData } from "../data";
import SearchElement from "./SearchElement";
import { useDispatch, useSelector } from "react-redux";
import { getUserSelector, loadUser } from "../../storemini/reducers/user";
import { getNumberOfCartItems } from "../../storemini/reducers/cart";
import { useHistory } from 'react-router-dom'
import { getAllCategoriesSelector, loadCategories, setCategory } from "../../storemini/reducers/categories";
import { addCategoryProducts } from "../../storemini/reducers/products";
export default function Navbar(props) {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [items, setItems] = useState([]);

  const allCategories = useSelector(getAllCategoriesSelector);
  const user = useSelector(getUserSelector);
  const numberOfCartItems = useSelector(getNumberOfCartItems);

  const history = useHistory();
  useEffect(() => {
    getRelatedItemsHandler();
    dispatch(loadCategories());
    dispatch(loadUser());
    // alert(JSON.stringify(user));
    console.log(JSON.stringify(user));
    if (!searchText) setItems([]);
  }, [searchText]);

  useEffect(() => {



  }, [])
  const onTextChangeHandler = (e) => {
    setSearchText(e.target.value);
  };
  const getRelatedItemsHandler = () => {
    setItems(props.products.filter((prod) => prod.title.includes(searchText)));
  };

  const clearSearch = () => {
    setSearchText("");
  };
  useEffect(() => {
    window.onscroll = function () {
      myFunction();
    };
    var navbar = document.getElementById("sticky-nav");
    var header = document.getElementById("sticky-header");
    function myFunction() {
      if (window.pageYOffset >= 60) {
        document.getElementById("sticky-nav").classList.add("sticky");
        document.getElementById("sticky-header").classList.add("stick-head");
      } else {
        navbar.classList.remove("sticky");
        header.classList.remove("stick-head");
      }
    }
  }, []);

  const setCategoryProducts = (category, sub, cateObj) => {
    dispatch(addCategoryProducts(`${category}/${sub}`));
    dispatch(setCategory(cateObj));
    history.push("/products");
  };
  return (
    <header>
      {/* <!-- On Small Screen --> */}
      <div className="top-header res-top-header py-1 d-none issue-class" id="sticky-header">
        <div className="container">
          {/* toggle side bar */}
          <div className="d-flex align-items-center justify-content-between">
            <div className="top-header-leftarea">
              <div className="d-flex">
                <button
                  className="sidemenu-toggle-btn"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBackdrop"
                  aria-controls="offcanvasWithBackdrop"

                >
                  <i className="fad fa-bars"></i>
                </button>
                <button

                  className="sidemenu-toggle-btn"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBackdrop"
                  aria-controls="offcanvasWithBackdrop"


                >
                  <i className="fal fa-search"></i>
                </button>
              </div>
            </div>
            <div className="top-header-logo text-center">
              <a href="#">
                <img
                  src="assets/images/logo-2.png"
                  className="w-100"
                  alt="img"
                />
              </a>
            </div>
            <div className="top-header-rightarea">
              <a href="#">
                <i className="fal fa-user"></i>
              </a>
              <a href="#" className="top-cart ms-2">
                <i className="fal fa-shopping-cart"></i>
                <span className="cart-counter">0</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Top Header --> */}
      <div className="top-header pt-3">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="top-header-leftarea">
              <div className="d-flex">
                <button
                  className="d-lg-none me-md-4 sidemenu-toggle-btn"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBackdrop"
                  aria-controls="offcanvasWithBackdrop"

                >
                  <i className="fad fa-bars"></i>
                </button>
                <div className="align-items-center d-none d-md-flex">
                  <span className="me-2 small">
                    <i className="bold-500 fal fa-search icon-color"></i>
                  </span>
                  <input
                    value={searchText}
                    className="form-control"
                    type="text"
                    onChange={(e) => onTextChangeHandler(e)}
                    placeholder="Search"
                  />
                </div>
                <button
                  className="d-md-none sidemenu-toggle-btn"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBackdrop"
                  aria-controls="offcanvasWithBackdrop"

                >
                  <i className="fal fa-search"></i>
                </button>
              </div>
            </div>
            <div className="top-header-logo text-center">
              <Link to="/">
                <img
                  src={`${process.env.REACT_APP_URL}/img/footer_logo.png`}
                  className="img-fluid"
                  alt="img"
                />
              </Link>
            </div>

            <div className="top-header-rightarea ">

              {user?.name ? (
                <Link to="/account">
                  <i className="fal fa-user"></i>
                  {user && (
                    <span className="d-none d-md-inline-block">
                      {user.name}
                    </span>
                  )}
                </Link>
              ) : (
                <Link to="/login">
                  <i className="fal fa-user"></i>
                  <span className="d-none d-md-inline-block ">Sign In</span>
                </Link>
              )}
              <Link to="/cart" className="top-cart ms-md-5 ms-2">
                <i className="fal fa-shopping-cart"></i>
                <span className="d-none d-md-inline-block ">Cart</span>
                <span className="cart-counter icon-color">
                  {props.cartProductNumber}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Navbar --> */}
      <nav
        className="navbar navbar-expand-md navbar-light d-none d-lg-block oo"
        id="sticky-nav"
      >
        <div className="container">
          <div className="collapse navbar-collapse" id="my-navbar">
            <div className="nav-hidden-items">
              <div className="align-items-center d-flex">
                <span className="me-2 small">
                  <i className="bold-500 fal fa-search icon-color"></i>
                </span>
                <input
                  value={searchText}
                  onChange={(e) => onTextChangeHandler(e)}
                  className="form-control"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
            {/* navbar links starts */}
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  // onClick={() => onClickHandlers("Best Sellers")}
                  onClick={() =>
                    setCategoryProducts("bestSellers", "", {
                      name: "Best sellers",
                      description: "Best seller Products available here",
                    })
                  }
                  className="nav-link"
                // to={`showProduct`}
                >
                  Best Sellers
                </Link>
              </li>
              {allCategories?.map((cate) => {
                return (
                  <li key={cate._id} className="nav-item">
                    <Link
                      // onClick={() => onClickHandlers(cate.category)}
                      className="nav-link"
                    // to={`showProduct`}
                    >
                      {cate.category}
                    </Link>
                    <div className="navbar-menu">
                      <div className="navbar-menu-list1">
                        {/* <h4 className="navbar-menu-heading">Personalized Books</h4> */}
                        <ul className="navbar-menu-list">
                          {cate.subCategories?.map((subCate) => {
                            return (
                              <li key={subCate._id}>
                                <Link
                                  // onClick={() => onClickHandlers(`${cate.category}/${subCate.name}`)}
                                  onClick={() =>
                                    setCategoryProducts(
                                      cate.category,
                                      subCate.name,
                                      subCate
                                    )
                                  }
                                  // to={`showProduct`}
                                  style={{ textDecoration: "none" }}
                                  className="text-dark fw-light"
                                >
                                  {subCate.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}

              <li className="nav-item">
                <Link
                  // onClick={() => onClickHandlers("Sale")}
                  onClick={() =>
                    setCategoryProducts("sale", "", {
                      name: "Sale",
                      description: "Sale Products ",
                    })
                  }
                  className="nav-link"
                // to={`showProduct`}
                >
                  Sale
                </Link>
              </li>
            </ul>
            <div className="nav-hidden-items">
              <Link to="/cart" className="top-cart">
                <i className="bold-500 fal fa-shopping-cart"></i>
                Cart
                <span className="cart-counter">{numberOfCartItems}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <SearchElement clearSearch={clearSearch} items={items} />
      {/* <!-- Side Menu --> */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasWithBackdrop"
        aria-labelledby="offcanvasWithBackdropLabel"

      >


        <i className="fas fa-times  close-btn"
          data-bs-dismiss="offcanvas"></i>
        <div className="sidemenu-header">
          <div className="position-relative">
            <input className="form-control "
              type="text" placeholder="SEARCH"
              value={searchText}
              onChange={(e) => onTextChangeHandler(e)}
            />
            <i className="fal fa-search"></i>
          </div>
        </div>
        <SearchElement clearSearch={clearSearch} items={items} mobile={true} />
        <div className="offcanvas-body">
          <ul className="sidemenu-list">
            <li className="nav-item">
              <Link
                // onClick={() => onClickHandlers("Best Sellers")}
                onClick={() =>
                  setCategoryProducts("bestSellers", "", {
                    name: "Best sellers",
                    description: "Best seller Products available here",
                  })
                }
                className="nav-link"
              // to={`showProduct`}
              >
                Best Sellers
              </Link>
            </li>
            {allCategories?.map((cate, index) => {
              return (
                <>
                  <li>
                    <div className="sidemenu-dropdown-box">
                      <Link
                        to={`#sidemenu-dropdown-${index}`}
                        // onClick={() => onClickHandlers(cate.category)}
                        className="collapsed sidebar-dropdown-btn collapse_class"
                        data-bs-toggle="collapse"
                        data-target=".navbar-collapse"
                      >
                        {cate.category}
                      </Link>
                      {/* <button type="button" class="navbar-toggle" data-toggle="collapse" /> */}

                      <div
                        className="collapse"
                        id={`sidemenu-dropdown-${index}`}
                      >
                        <ul className="sidemenu-sublist navbar-collapse">
                          {cate.subCategories?.map((subCate) => {
                            return (
                              <li key={subCate._id}>
                                <Link
                                  // onClick={() => onClickHandlers(`${cate.category}/${subCate.name}`)}
                                  // onClick={() => onClickHandlers(`${cate.category}/${subCate.name}`)}
                                  onClick={() =>
                                    setCategoryProducts(
                                      cate.category,
                                      subCate.name,
                                      subCate
                                    )
                                  }
                                  // to={`showProduct`}
                                  // to={`showProduct`}
                                  style={{ textDecoration: "none" }}
                                  className="text-dark fw-light"
                                >
                                  {subCate.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>

                      </div>
                    </div>
                  </li>
                </>
              );
            })}
            <li>
              <a href="#">Sale</a>
            </li>
          </ul>
          <ul className="sidemenu-extra-links mt-3">
            <li>
              <a href="#">Corporate Gifts</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Terms of Sale</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Image Licensing</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>


    </header>
  );
}


/* <div className="dropdown">
<a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  Dropdown link
</a>
<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
  <li><a className="dropdown-item" href="#">Action</a></li>
  <li><a className="dropdown-item" href="#">Another action</a></li>
  <li><a className="dropdown-item" href="#">Something else here</a></li>
</ul>
</div>
<div className="dropdown">
<a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"  aria-expanded="false">
  Dropdown link
</a>
<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
  <li><a className="dropdown-item" href="#">Action</a></li>
  <li><a className="dropdown-item" href="#">Another action</a></li>
  <li><a className="dropdown-item" href="#">Something else here</a></li>
</ul>
</div> */

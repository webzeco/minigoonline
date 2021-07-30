import React, { useContext, useEffect, useRef, useState } from 'react'
import './style/navbar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import $ from 'jquery';
import { CollectionContext } from '../contexts/CollectionContext';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { productData } from '../data';

export default function Navbar({ categories }) {
    const { coll, setCollectionHandler } = useContext(CollectionContext);
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

    const onClickHandlers = (coll) => {
        setCollectionHandler(coll);
    }
    console.log(categories);
    useEffect(() => {
        window.onscroll = function () { myFunction() };
        var navbar = document.getElementById("sticky-nav");
        var header = document.getElementById("sticky-header");
        function myFunction() {
            if (window.pageYOffset >= 60) {
                document.getElementById("sticky-nav").classList.add("sticky")
                document.getElementById("sticky-header").classList.add("stick-head")
            } else {
                navbar.classList.remove("sticky");
                header.classList.remove("stick-head");
            }
        }
        return () => {
            console.log('clean up navbar');
        }
    }, [])
    return (
        <header>
            {/* <!-- On Small Screen --> */}
            <div class="top-header res-top-header py-1 d-none" id="sticky-header">
                <div class="container">
                    {/* toggle side bar */}
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="top-header-leftarea">
                            <div class="d-flex">
                                <button class="sidemenu-toggle-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"><i class="fad fa-bars"></i></button>
                                <button class="sidemenu-toggle-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"><i class="fal fa-search"></i></button>
                            </div>
                        </div>
                        <div class="top-header-logo text-center">
                            <a href="#"><img src="assets/images/logo-2.png" class="w-100" alt="img" /></a>
                        </div>
                        <div class="top-header-rightarea">
                            <a href="#">
                                <i class="fal fa-user"></i>
                            </a>
                            <a href="#" class="top-cart ms-2">
                                <i class="fal fa-shopping-cart"></i>
                                <span class="cart-counter">0</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Top Header --> */}
            <div class="top-header pt-3">
                <div class="container">
                    <div class="d-flex justify-content-between">
                        <div class="top-header-leftarea">
                            <div class="d-flex">
                                <button class="d-lg-none me-md-4 sidemenu-toggle-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"><i class="fad fa-bars"></i></button>
                                <div class="align-items-center d-none d-md-flex">
                                    <span class="me-2 small"><i class="bold-500 fal fa-search"></i></span>
                                    <input class="form-control" type="text" placeholder="Search" />
                                </div>
                                <button class="d-md-none sidemenu-toggle-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"><i class="fal fa-search"></i></button>
                            </div>
                        </div>
                        <div class="top-header-logo text-center">
                            <Link to="/"><img src='https://namibwear.com/wp-content/plugins/minigo/inc/admin/img/logo.png'
                               width="50px" height="60px" alt="img" /></Link>
                        </div>
                        
                        <div class="top-header-rightarea">
                            {!user&&<Link to="/login">
                                <i class="fal fa-user"></i>
                                <span class="d-none d-md-inline-block">Sign In</span>
                            </Link>}
                            {user&&<Link to="/account">
                                <i class="fal fa-user"></i>
                                {user&&<span class="d-none d-md-inline-block">{user.name}</span>}
                            </Link>}
                            
                            <Link to="/cart" class="top-cart ms-md-5 ms-2">
                                <i class="fal fa-shopping-cart"></i>
                                <span class="d-none d-md-inline-block">Cart</span>
                                <span class="cart-counter">0</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Navbar --> */}
            <nav class="navbar navbar-expand-md navbar-light d-none d-lg-block" id="sticky-nav">
                <div class="container">
                    <div class="collapse navbar-collapse" id="my-navbar">
                        <div class="nav-hidden-items">
                            <div class="align-items-center d-flex">
                                <span class="me-2 small"><i class="bold-500 fal fa-search"></i></span>
                                <input class="form-control" type="text" placeholder="Search" />
                            </div>
                        </div>
                        {/* navbar links starts */}
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item"><Link onClick={() => onClickHandlers('Best Sellers')} class="nav-link" to={`showProduct`}>Best Sellers</Link></li>
                            {categories?.map(cate => {
                                return <li key={cate._id} class="nav-item"><Link onClick={() => onClickHandlers(cate.category)} class="nav-link" to={`showProduct`}>{cate.category}</Link>
                                    <div class="navbar-menu">
                                        <div class="navbar-menu-list1">
                                            {/* <h4 class="navbar-menu-heading">Personalized Books</h4> */}
                                            <ul class="navbar-menu-list">
                                                {cate.subCategories?.map(subCate => {
                                                    return <li key={subCate._id} ><Link onClick={() => onClickHandlers(subCate.name)} to={`showProduct`} style={{ textDecoration: 'none' }} className="text-dark fw-light">{subCate.name}</Link></li>
                                                })}

                                                {/* <li><a href="#">Custom Birthday Book</a></li>
                                            <li><a href="#">Special Day Book</a></li>
                                            <li><a href="#">Anniversary Book</a></li>
                                            <li><a href="#">Sports History Books</a></li> */}
                                            </ul>
                                        </div>
                                        {/* <div class="navbar-menu-list2">
                                        <h4 class="navbar-menu-heading">Custom Reprints</h4>
                                        <ul class="navbar-menu-list">
                                            <li><a href="#">Front Page Reprint</a></li>
                                            <li><a href="#">Inside Page Reprint</a></li>
                                            <li><a href="#">Front Page Puzzle</a></li>
                                            <li><a href="#">Crossword Puzzle Reprint</a></li>
                                            <li><a href="#">Custom Photo Reprint</a></li>
                                        </ul>
                                    </div> */}
                                    </div>
                                </li>
                            })}

                            {/* <li class="nav-item"><a class="nav-link" href="#">Times Goods</a>
                                <div class="navbar-menu">
                                    <div class="navbar-menu-list1">
                                        <h4 class="navbar-menu-heading">Branded Goods</h4>
                                        <ul class="navbar-menu-list">
                                            <li><a href="#">Accessories</a></li>
                                            <li><a href="#">Drinkware</a></li>
                                            <li><a href="#">Maps</a></li>
                                            <li><a href="#">Puzzles & Games</a></li>
                                            <li><a href="#">Stationary</a></li>
                                        </ul>
                                    </div>
                                    <div class="navbar-menu-list2">
                                        <h4 class="navbar-menu-heading">Branding Clothing</h4>
                                        <ul class="navbar-menu-list">
                                            <li><a href="#">Men's</a></li>
                                            <li><a href="#">Women's</a></li>
                                            <li><a href="#">Babies & Kids</a></li>
                                        </ul>
                                    </div>
                                    <div class="navbar-menu-list2">
                                        <h4 class="navbar-menu-heading">Collections</h4>
                                        <div class="d-flex">
                                            <ul class="navbar-menu-list">
                                                <li><a href="#">Cooking</a></li>
                                                <li><a href="#">The 1619 Project</a></li>
                                                <li><a href="#">Early Edition</a></li>
                                                <li><a href="#">Local Edition</a></li>
                                                <li><a href="#">Modern Love</a></li>
                                                <li><a href="#">"The Daily"</a></li>
                                            </ul>
                                            <div class="ms-5">
                                                <ul class="navbar-menu-list">
                                                    <li><a href="#">"The Truth"</a></li>
                                                    <li><a href="#">Crossword Gifts</a></li>
                                                    <li><a href="#">Travel Gifts</a></li>
                                                    <li><a href="#">Women's Rights</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="#">Wall Art</a>
                                <div class="navbar-menu">
                                    <div class="navbar-menu-list1">
                                        <h4 class="navbar-menu-heading">Photography</h4>
                                        <div class="d-flex">
                                            <ul class="navbar-menu-list">
                                                <li><a href="#">Best Sellers</a></li>
                                                <li><a href="#">Historical</a></li>
                                                <li><a href="#">New York</a></li>
                                                <li><a href="#">Aerial</a></li>
                                                <li><a href="#">Politics</a></li>
                                                <li><a href="#">Space</a></li>
                                            </ul>
                                            <div class="ms-4">
                                                <ul class="navbar-menu-list">
                                                    <li><a href="#">Sports</a></li>
                                                    <li><a href="#">Travel</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="navbar-menu-list2">
                                        <h4 class="navbar-menu-heading">Prints</h4>
                                        <ul class="navbar-menu-list">
                                            <li><a href="#">Illustrations</a></li>
                                            <li><a href="#">Maps</a></li>
                                            <li><a href="#">Posters</a></li>
                                        </ul>
                                    </div>
                                    <div class="navbar-menu-list2">
                                        <h4 class="navbar-menu-heading">Personalized</h4>
                                        <ul class="navbar-menu-list">
                                            <li><a href="#">Front Page Reprint</a></li>
                                            <li><a href="#">Inside Page Reprint</a></li>
                                            <li><a href="#">Crossword Puzzle Reprint</a></li>
                                            <li><a href="#">Choose Any Times Photo</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="#">Books</a>
                                <div class="navbar-menu">
                                    <div class="navbar-menu-list1">
                                        <h4 class="navbar-menu-heading">Categories</h4>
                                        <ul class="navbar-menu-list">
                                            <li><a href="#">Crosswords</a></li>
                                            <li><a href="#">Travel</a></li>
                                            <li><a href="#">Books From The Times</a></li>
                                        </ul>
                                    </div>
                                    <div class="navbar-menu-list2">
                                        <h4 class="navbar-menu-heading">Personalized</h4>
                                        <ul class="navbar-menu-list">
                                            <li><a href="#">Ultimate Birthday Book</a></li>
                                            <li><a href="#">Custom Birthday Book</a></li>
                                            <li><a href="#">History Books</a></li>
                                            <li><a href="#">Sports History Books</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="#">Special Sections</a></li>
                             */}
                            <li class="nav-item"><Link onClick={() => onClickHandlers('Sale')} class="nav-link" to={`showProduct`}>Sale</Link></li>
                        </ul>
                        <div class="nav-hidden-items">
                            <Link to="/cart" class="top-cart">
                                <i class="bold-500 fal fa-shopping-cart"></i>
                                Cart
                                <span class="cart-counter">0</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <!-- Side Menu --> */}
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
                <div class="sidemenu-header">
                    <div class="position-relative">
                        <input class="form-control" type="text" placeholder="SEARCH" />
                        <i class="fal fa-search"></i>
                    </div>
                </div>
                <div class="offcanvas-body">
                    <ul class="sidemenu-list">
                        <li><a href="#">Best Sellers</a></li>
                        <li>
                            <div class="sidemenu-dropdown-box">
                                <a href="#sidemenu-dropdown1" class="collapsed sidebar-dropdown-btn" data-bs-toggle="collapse">Personalized</a>
                                <div class="collapse" id="sidemenu-dropdown1">
                                    <ul class="sidemenu-sublist">
                                        <li class="sidemenu-sublist-mainlink"><a href="#">View All Personalized</a></li>
                                        <li><a href="#" class="sidemenu-sublist-heading">Personalized Books</a></li>
                                        <li><a href="#">Ultimate Birthday Book</a></li>
                                        <li><a href="#">Custom Birthday Book</a></li>
                                        <li><a href="#">Special Day Book</a></li>
                                        <li><a href="#">Anniversary Book</a></li>
                                        <li><a href="#">Sports History Books</a></li>
                                    </ul>
                                    <ul class="sidemenu-sublist">
                                        <li><a href="#" class="sidemenu-sublist-heading">Custom Reprints</a></li>
                                        <li><a href="#">Front Page Reprint</a></li>
                                        <li><a href="#">Inside Page Reprint</a></li>
                                        <li><a href="#">Front Page Puzzle</a></li>
                                        <li><a href="#">Crossword Puzzle Reprint</a></li>
                                        <li><a href="#">Custom Photo Reprint</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="sidemenu-dropdown-box">
                                <a href="#sidemenu-dropdown2" class="collapsed sidebar-dropdown-btn" data-bs-toggle="collapse">Times Goods</a>
                                <div class="collapse" id="sidemenu-dropdown2">
                                    <ul class="sidemenu-sublist">
                                        <li class="sidemenu-sublist-mainlink"><a href="#">View All Times Goods</a></li>
                                        <li><a href="#" class="sidemenu-sublist-heading">Branded Goods</a></li>
                                        <li><a href="#">Accessories</a></li>
                                        <li><a href="#">Drinkware</a></li>
                                        <li><a href="#">Maps</a></li>
                                        <li><a href="#">Puzzles & Games</a></li>
                                        <li><a href="#">Stationary</a></li>
                                    </ul>
                                    <ul class="sidemenu-sublist">
                                        <li><a href="#" class="sidemenu-sublist-heading">Branded Clothing</a></li>
                                        <li><a href="#">Men's</a></li>
                                        <li><a href="#">Women's</a></li>
                                        <li><a href="#">Babies & Kids</a></li>
                                    </ul>
                                    <ul class="sidemenu-sublist">
                                        <li><a href="#" class="sidemenu-sublist-heading">Collection</a></li>
                                        <li><a href="#">Cooking</a></li>
                                        <li><a href="#">The 1619 Project</a></li>
                                        <li><a href="#">Early Edition</a></li>
                                        <li><a href="#">Local Edition</a></li>
                                        <li><a href="#">Modern Love</a></li>
                                        <li><a href="#">"The Daily"</a></li>
                                        <li><a href="#">"The Truth"</a></li>
                                        <li><a href="#">Crossword Gifts</a></li>
                                        <li><a href="#">Travel Gifts</a></li>
                                        <li><a href="#">Women's Rights</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="sidemenu-dropdown-box">
                                <a href="#sidemenu-dropdown3" class="collapsed sidebar-dropdown-btn" data-bs-toggle="collapse">Wall Art</a>
                                <div class="collapse" id="sidemenu-dropdown3">
                                    <ul class="sidemenu-sublist">
                                        <li class="sidemenu-sublist-mainlink"><a href="#">View All Wall Art</a></li>
                                        <li><a href="#" class="sidemenu-sublist-heading">Photography</a></li>
                                        <li><a href="#">Best Sellers</a></li>
                                        <li><a href="#">Historical</a></li>
                                        <li><a href="#">New York</a></li>
                                        <li><a href="#">Aerial</a></li>
                                        <li><a href="#">Politics</a></li>
                                        <li><a href="#">Space</a></li>
                                        <li><a href="#">Sports</a></li>
                                        <li><a href="#">Travel</a></li>
                                    </ul>
                                    <ul class="sidemenu-sublist">
                                        <li><a href="#" class="sidemenu-sublist-heading">Prints</a></li>
                                        <li><a href="#">Illustrations</a></li>
                                        <li><a href="#">Maps</a></li>
                                        <li><a href="#">Posters</a></li>
                                    </ul>
                                    <ul class="sidemenu-sublist">
                                        <li><a href="#" class="sidemenu-sublist-heading">Personalized</a></li>
                                        <li><a href="#">Front Page Reprint</a></li>
                                        <li><a href="#">Inside Page Reprint</a></li>
                                        <li><a href="#">Crossword Puzzle Reprint</a></li>
                                        <li><a href="#">Choose Any Times Photo</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="sidemenu-dropdown-box">
                                <a href="#sidemenu-dropdown4" class="collapsed sidebar-dropdown-btn" data-bs-toggle="collapse">Books</a>
                                <div class="collapse" id="sidemenu-dropdown4">
                                    <ul class="sidemenu-sublist">
                                        <li class="sidemenu-sublist-mainlink"><a href="#">View All Books</a></li>
                                        <li><a href="#" class="sidemenu-sublist-heading">Categories</a></li>
                                        <li><a href="#">Crosswords</a></li>
                                        <li><a href="#">Travel</a></li>
                                        <li><a href="#">Books From The Times</a></li>
                                    </ul>
                                    <ul class="sidemenu-sublist">
                                        <li><a href="#" class="sidemenu-sublist-heading">Personalized</a></li>
                                        <li><a href="#">Ultimate Birthday Book</a></li>
                                        <li><a href="#">Custom Birthday Book</a></li>
                                        <li><a href="#">History Books</a></li>
                                        <li><a href="#">Sports History Books</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li><a href="#">Special Sections</a></li>
                        <li><a href="#">Sale</a></li>
                    </ul>
                    <ul class="sidemenu-extra-links mt-3">
                        <li><a href="#">Corporate Gifts</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Return Policy</a></li>
                        <li><a href="#">Terms of Sale</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Image Licensing</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}


{/* <div class="dropdown">
<a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
</a>
<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
</ul>
</div>
<div class="dropdown">
<a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"  aria-expanded="false">
    Dropdown link
</a>
<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
</ul>
</div> */}

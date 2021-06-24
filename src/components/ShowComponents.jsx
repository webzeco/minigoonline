import React, { useContext, useState } from "react";
import "./style/showComponent.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ProductList from './showProductList';
import { Collection } from "./contexts/Collection";


export default function ShowComponents({ category,productData }) {
const {coll,setCollectionHandler}= useContext(Collection);
  const [price, setPrice] = useState("Price");
  const [sort, setSort] = useState("Sort");
  const handlePriceSelect = (e) => {
    setPrice(e);
  };
  const handleSortSelect = (e) => {
    setSort(e);
  };
  
  return (
    <div>
      {/* <!-- ======= bann area ======= --> */}
      <div className="container-fluid bann pt-5 mt-5">
        <ol className="breadcrumb pt-2 m-3 px-5">
          <li className="breadcrumb-item look">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item look">
            <a href="/">{coll}</a>
          </li>
        </ol>
        <div className="row justify-content-center">
          <div className="col-auto w-50">
            <div className="info text-center">
              <span className="h2 bann_title text-center">{coll}</span>
              <br></br>
              <span className="h7 bann_discription justify-content-center ">
                Take The Times wherever you go. Stand out in a crowd and look.
                Well read with our umbrellas, totes and baseball caps displaying
                our classic, gothic nameplate or logo.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*  <!-- ======= bann area end ======= -->  */}
      {/* <!-- ======= price and sort of product======= -->  */}
      <div className="container-fluid border mt-1 p-2">
        <div className="row">
          <div className="col-6 text-center">
            <div className="dropdown d-flex justify-content-center">
              <DropdownButton
                variant='light'
                alignRight
                title={price}
                id="dropdown-menu-align-right"
                onSelect={handlePriceSelect}
              >
                <Dropdown.Item eventKey="Less than $50">
                  Less than $50
                </Dropdown.Item>
                <Dropdown.Item eventKey="$50-$100">$50-$100</Dropdown.Item>
                {/* <Dropdown.Divider /> */}
              </DropdownButton>
            </div>
          </div>

          <div className="col-6 d-flex justify-content-center">
            <span className=" pt-2  count mx-3 ">48 items</span>
            <div className="dropdown">
              <DropdownButton
                variant='light'
                alignRight
                title={sort}
                id="dropdown-menu-align-right"
                onSelect={handleSortSelect}
              >
                <Dropdown.Item eventKey="New Arrivals">New Arrivals</Dropdown.Item>
                <Dropdown.Item eventKey="Bestselling">Bestselling</Dropdown.Item>
                <Dropdown.Item eventKey="Featured" > Featured</Dropdown.Item>
                <Dropdown.Item eventKey="Price: High to Low">Price: High to Low </Dropdown.Item>
                <Dropdown.Item   eventKey="Price: Low to High">  Price: Low to High</Dropdown.Item>
                {/* <Dropdown.Divider /> */}
              </DropdownButton>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ======= price and sort of product ends======= -->  */}

      {/* <!-- ======= product display in cards ======= -->  */}

      <div className="container pt-5">
        <div className="row ">

        <ProductList productData={productData} />
  </div>
      </div>
      {/* <!-- ======= product display in cards ends ======= -->  */}
      {/* <!-- ======= pagination ======= -->  */}

      <ul className="pagination justify-content-center p-4">
        <li className="page-item">
          <a className="page-link" href="/" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>

      {/* <!-- ======= pagination ends ======= -->  */}
    </div>
  );
}

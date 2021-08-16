import React, { useContext, useEffect, useState } from "react";
import "./style/showComponent.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ProductList from "./common/showProductList";
import { CollectionContext } from "./contexts/CollectionContext";
import $ from "jquery";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";
import { filterByPrice } from "../utils/filter";
import { sortBy } from "../utils/sort";
import { getProductsWithCategories } from "../services/productServices";
export default function ShowComponents({ products }) {
  const [productData, setProductData] = useState([]);
  const { coll, setCollectionHandler } = useContext(CollectionContext);
  const [cate, setCate] = useState({ category: coll.category, subcategory: coll.subcategory });
  const getProductsWithCategoryHandler = async () => {
    const { data } = await getProductsWithCategories({ category: coll.category, subcategory: coll.subcategory })
    let pageDataList = filterByPrice(data.data, price);
    pageDataList = sortBy(pageDataList, sort);
    setTotalPageItems(pageDataList.length);
    pageDataList = paginate(pageDataList, page.currentPage, page.pageSize);
    setData(pageDataList);
  };
const handler=()=>{
alert('hello')
}

  // getProductsWithCategoryHandler();
  // Stationary/Books
  const [page, setPage] = useState({
    currentPage: 1,
    itemsCount: productData.length,
    pageSize: 2,
  });
  const [price, setPrice] = useState("Price");
  const [sort, setSort] = useState("Sort");
  const [data, setData] = useState();
  const [totalPageItems, setTotalPageItems] = useState(productData?.length);
  useEffect(() => {
    $('#myCate').change(function () { 
      alert('test'); 
  });
  }, [])
  useEffect(() => {
    getProductsWithCategoryHandler();
    return () => { };
  }, [page, price, sort]);


  const changePageHandler = (c_page) => {
    const newPage = { ...page };
    newPage.currentPage = c_page;
    page.currentPage = newPage;
    setPage(newPage);
  };
  const handlePriceSelect = (e) => {
    const newPage = { ...page };
    newPage.currentPage = 1;
    page.currentPage = newPage;
    setPage(newPage);
    setPrice(e);
  };
  const handleSortSelect = (e) => {
    setSort(e);
  };

  return (
    <div>
      {/* <!-- ======= bann area ======= --> */}
      <div className="container-fluid bann  mt-2">
        <ol className="breadcrumb pt-4 m-3 px-5">
          <li className="breadcrumb-item lookb">
            <a href="/">Home</a>
          </li>
<<<<<<< HEAD
          <li className="breadcrumb-item lookb">
            <a href="/">{coll}</a>
=======
          <li className="breadcrumb-item look">
            <a href="/">{coll?.subcategory}</a>
>>>>>>> 4c129be8d2d2ddfa550996ad061a523bfca9cd34
          </li>
        </ol>
        <div className="row justify-content-center">
          <div className="col-auto w-50">
            <div className="info text-center">
              {/* <span className="h2 bann_title fw-bold text-center">{coll?.subcategory}</span> */}
              <input className="h2 bann_title fw-bold text-center" style={{
                background: "transparent",
                border: "none",
                
                fontSize:"30px"
              }}
              id="myCate"
              type="text" value={coll?.subcategory} onInput={()=>handler()} />
              <br></br>
              <span className="h7 bann_discription justify-content-center ">
                {coll?.description}
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
            <div className="dropdown d-flex justify-content-center message_look" >
              <DropdownButton
                variant="light"
                alignRight
                title={price}
                id="dropdown-menu-align-right "
                onSelect={handlePriceSelect}
              >
                <Dropdown.Item eventKey="Less than $50">
                  Less than $50
                </Dropdown.Item>
                <Dropdown.Item eventKey="$50-$100">$50-$100</Dropdown.Item>
              </DropdownButton>
              {/* <div className="dropdown">
                                            <button
                                                className="btn btn-light dropdown-toggle"
                                                type="button"
                                                id="dropdownMenuButton"
                                                data-mdb-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                change status
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul> 
                                        </div> */}
            </div>
          </div>

          <div className="col-6 d-flex justify-content-center">
            <span className=" pt-2  count mx-3 ">{totalPageItems} items</span>
            <div className="dropdown message_look fw-bold ">
              <DropdownButton
                variant="light"
                alignRight
                title={sort}
                id="dropdown-menu-align-right "
                onSelect={handleSortSelect}
              >
                <Dropdown.Item eventKey="New Arrivals">
                  New Arrivals
                </Dropdown.Item>
                <Dropdown.Item eventKey="Bestselling">
                  Bestselling
                </Dropdown.Item>
                <Dropdown.Item eventKey="Featured"> Featured</Dropdown.Item>
                <Dropdown.Item eventKey="Price: High to Low">
                  Price: High to Low{" "}
                </Dropdown.Item>
                <Dropdown.Item eventKey="Price: Low to High">
                  {" "}
                  Price: Low to High
                </Dropdown.Item>
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
          {data && <ProductList pageDataList={data} />}
        </div>
      </div>
      {/* <!-- ======= product display in cards ends ======= -->  */}
      {/* <!-- ======= pagination ======= -->  */}

      <ul className="pagination justify-content-center p-4  message_look">
        <Pagination
          className="bg-danger"
          itemsCount={totalPageItems}
          pageSize={page.pageSize}
          currentPage={page.currentPage}
          onPageChange={changePageHandler}
        />
        {/* <li className="page-item">
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
        </li> */}
      </ul>

      {/* <!-- ======= pagination ends ======= -->  */}
    </div>
  );
}

// const newPage={...page};
// newPage.itemsCount=pageDataList.length;
// setPage(newPage);

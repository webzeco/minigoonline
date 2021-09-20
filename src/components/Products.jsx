import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ProductList from "./common/ProductList";
import Pagination from "./common/Pagination";
import { connect } from "react-redux";
import {
  changePage,
  sortProducts,
  loadProducts,
  filterPrice,
} from "../storemini/reducers/products";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./style/showComponent.css";

class Products extends Component {
  state={
    data:[]
  };
  componentDidMount() {
    $("#myCate").change(function () {});
    this.props.loadProducts();
    this.setState({ data: this.props.products });
  }
  componentDidUpdate() {
    if (
      this.props.products[0]?.category !== this.state.data[0]?.category ||
      this.props.products.length !== this.state.data.length
    ) {
      this.setState({ data: this.props.products });
    }
  }
  render() {
    return (
      <div>
        <div className="container-fluid bann  mt-2">
          <ol className="breadcrumb pt-4 m-3 px-5">
            <li className="breadcrumb-item look">
              <Link className="text-light" to="/">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item look">
              <a className="text-light" href="/">
                {this.props.category?.name}
              </a>
            </li>
          </ol>
          <div className="row justify-content-center">
            <div className="col-auto w-50">
              <div className="info text-center">
                <span className="h2 bann_title fw-bold text-center">
                  {this.props.category?.name}
                </span>
                <br></br>
                <span className="h7 bann_discription justify-content-center ">
                  {this.props.category?.description}
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
              <div className="dropdown d-flex justify-content-center message_look">
                <DropdownButton
                  variant="light"
                  alignRight
                  title={this.props.price}
                  id="dropdown-menu-align-right "
                  onSelect={this.props.filterPrice}
                >
                  <Dropdown.Item eventKey="All">All</Dropdown.Item>
                  <Dropdown.Item eventKey="Less than Rs.500">
                    Less than Rs.500
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Rs.500-Rs.1000">
                    Rs.500-Rs.1000
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Greater then Rs.1000">
                    Greater then Rs.1000
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <span type="text" className=" pt-2  count mx-3 ">
                {this.props.itemsCount} items
              </span>
              <div className="dropdown message_look fw-bold ">
                <DropdownButton
                  variant="light"
                  alignRight
                  title={this.props.sort}
                  id="dropdown-menu-align-right"
                  onSelect={this.props.sortProducts}
                >
                  <Dropdown.Item eventKey="sort">Sort</Dropdown.Item>
                  <Dropdown.Item eventKey="New Arrivals">
                    New Arrivals
                  </Dropdown.Item>
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
            {this.state.data && <ProductList pageDataList={this.state.data} />}
          </div>
        </div>
        {/* <!-- ======= product display in cards ends ======= -->  */}
        {/* <!-- ======= pagination ======= -->  */}

        <ul className="pagination justify-content-center p-4  message_look">
          <Pagination
            className="bg-danger"
            itemsCount={this.props.itemsCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChange={(page) => this.props.changePage(page)}
          />
        </ul>

        {/* <!-- ======= pagination ends ======= -->  */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.entities.products.filtered,
  category: state.entities.categories.selected,
  loading: state.entities.products.loading,
  itemsCount: state.entities.products.pagination.itemsCount,
  currentPage: state.entities.products.pagination.currentPage,
  pageSize: state.entities.products.pagination.pageSize,
  sort: state.entities.products.sort,
  price: state.entities.products.priceFilter,
});
const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => dispatch(loadProducts()),
  changePage: (page) => dispatch(changePage(page)),
  sortProducts: (path) => dispatch(sortProducts(path)),
  filterPrice: (path) => dispatch(filterPrice(path)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Products);

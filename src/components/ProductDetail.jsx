import React, { Component, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactStars from "react-rating-stars-component";
import "./style/ProductDetail.css";
import { Link } from "@material-ui/core";
import ControlledCarousel from "./common/Carousel";
import { connect } from "react-redux";
import { loadProducts } from "../storemini/reducers/products";
import Variants from "./common/Variants";
import Overview from "./Overview";
import AddReview from "./AddReview";
import { addItem } from "../storemini/reducers/cart";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVariants: [],
      customWriting: "",
      customDate: null,
      variantImage: ""
    };
    this.handleSelected = this.handleSelected.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.setCustomizationOptions = this.setCustomizationOptions.bind(this);
  }

  componentDidMount() {
    const tempArray = this.props.product?.variants.map((variant) => {
      const temp = {};
      temp.variantType = variant.selectedOption;
      if (temp.variantType === "Color") {
        temp.selectedVariant = variant.tags[0].text;
        temp.tag = variant.tags[0];
        // temp.image=variant.tags[0].img;
        this.setState({ variantImage: temp.tag.img })
      } else {
        temp.selectedVariant = variant.tags[0].text;
        temp.tag = variant.tags[0];
        // temp.image=variant.tags[0].img;
      }
      return temp;
    });
    this.setState({
      selectedVariants: tempArray,
    });
  }

  async handleSelected(selected, img) {
    await this.setState({ selectedVariants: selected });
    this.setState({ variantImage: img })
  }
  calculateDiscountPrice(price, discount) {
    let discountedPrice = (price * discount) / 100;
    return discountedPrice;
  }

  handleAddToCart(e) {
    e.preventDefault();
    const product = this.props.product;
    const temp = {};
    temp.estimatedProcessingTime = product.estimatedProcessingTime;
    temp.selectedVariants = this.state.selectedVariants;
    temp.customWriting = this.state.customWriting;
    temp.customDate = this.state.customDate;
    temp.qty = 1;
    temp.price = product.price;
    temp.product = product;
    this.props.addToCart(temp);
    this.props.history.push('/cart');
  }
  setCustomizationOptions(writing, date) {
    this.setState({
      customWriting: writing,
      customeDate: date,
    });
  }
  componentDidUpdate() {
    this.props.cartItems.map((product) => {
      if (product.title === this.props.product?.title) {
        document.getElementById("addtocart").disabled = true;
        document.getElementById("addtocart").innerHTML =
          "Already added to Cart";
      }
    });
  }
  render() {
    const product = this.props.product;
    return (
      <>
        {product && (
          <div className="mt-5">
            {/* <!-- =======Product display in Banner area ======= --> */}
            <div className="container-fluid banner_pd">
              <nav>
                <ol className="breadcrumb  px-5 pt-4">
                  <li className="breadcrumb-item  look">
                    <Link className="font-weight-bold message_lookb">Home</Link>
                  </li>
                  <li className="breadcrumb-item text-black look">
                    <Link className=" message_lookb">{product.title}</Link>
                  </li>
                </ol>
              </nav>
            </div>
            <div className="container-fluid">
              <div className="row justify-content-center ">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  {/* carousel start */}
                  <div
                    id="carouselExampleIndicators"
                    className="carousel"
                    style={{ background: "#fff" }}
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                    </div>
                    <div className="carousel-inner">
                      <div
                        // key={index}
                        // className={`carousel-item ${
                        //   index === 0 ? "active" : ""
                        // }`}
                        className='carousel-item active'
                      >
                        <img
                          src={`${process.env.REACT_APP_URL}/img/${this.state.variantImage}`}
                          className="d-block w-100 cara_pic"
                          height="400"
                          alt="..."
                        />
                      </div>
                      );
                    </div>
                  </div>
                  {/* caroausel end */}
                </div>
                <div className="col-lg-6 col-md-12 px-5">
                  <div className="product pt-2">
                    <div className=" align-items-center w-75">
                      <div className="h5 text-uppercase pro_title_h_5">
                        {product.title}
                      </div>
                      <div className="h5  pro_price_h5">
                        {product.discount === 0 ? (
                          `Rs.${product.price}`
                        ) : (
                          <>
                            {product.price} is discounted for{" "}
                            {this.calculateDiscountPrice(
                              product.price,
                              product.discount
                            )}
                          </>
                        )}
                      </div>

                      <div className="d-flex align-items-center">
                        {/* Reviews Component */}
                        <Reviews reviews={product.reviews} />

                      </div>

                      <div className="ho mt-2 "></div>
                      {/* Variants Start */}
                      <Variants
                        selectedVariants={this.state.selectedVariants}
                        setSelected={(selected, img) =>
                          this.handleSelected(selected, img)
                        }
                        variants={product.variants}
                      />
                      {/* Variants End */}
                      <Customization
                        setCustomizationOptions={this.setCustomizationOptions}
                        customDate={product.customDate}
                        customWriting={product.customWriting}
                      />
                      {!product.sellOutofStock &&
                        product.availableQuantity < 10 ? (
                        <div className="fst-italic few_dis pt-5">
                          Only few left
                        </div>
                      ) : null}

                      <div className="cart mt-4 align-items-center">
                        <button
                          id="addtocart"
                          className="btn text-uppercase w-50 add_cart_btn "
                          onClick={this.handleAddToCart}
                        >
                          Add to cart
                        </button>
                      </div>
                      <div className="over_look">
                        <Overview product={product} />
                      </div>
                      <div className="code_dis pt-2 pb-3">
                        SKU: {product.stockKeepingUnit}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ======= Banner area end ======= -->  */}
            {/* <!-- ======= Product specificatio start======= --> */}
            <div className="container-fluid pro_spec pt-5 pb-3  ">
              <div className="row justify-content-center ">
                <div className="col-md-6 w-50"></div>
                <div className="col-md-6 back px-5">
                  <div className="product">
                    <div className=" align-items-center w-75">
                      <span className="fw-bold ov_look">SPECIFICATIONS </span>
                      <p className="about pt-2 ">Made in the U.S.A. </p>

                      {this.state.selectedVariants.map((variant, index) => {
                        return (
                          <p key={index} className="about ">
                            {variant.variantType}:{variant.selectedVariant}
                          </p>
                        );
                      })}

                      <p className="about">Material: 100% pre-shrunk cotton </p>

                      <div className="ho pt-2 mb-3 w-100"></div>
                      <span className="fw-bold ov_look">DELIVERY </span>
                      <p className="about pt-2">
                        Shop from a wide range of t-shirt from orianz. Pefect
                        for your everyday use, you could pair it with a stylish
                        pair of jeans or trousers complete the look.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ======= Product specificatio end ======= --> */}
            {/* <!-- ======= Product in carousle ======= --> */}
            <div className="container font_fam">
              <div className="ho pt-2 mb-3 w-100"></div>
              {/* <h6 className="text-center pt-4 pb-5 ov_look">
            YOU MIGHT ALSO LIKE
          </h6> */}
              {
                // console.log({my:this.state})
              }
              <ControlledCarousel
                productData={this.props.products}
                title={""}
              />
            </div>
            <Reviews reviews={this.prreviews} />
            {/* <!-- =======  customer Review ======= --> */}
            <AddReview reviews={product.reviews} {...this.props} />
            {/* <!-- =======  Customer Review ====== --> */}
          </div>
        )}
      </>
    );
  }

}

const mapStateToProps = (state) => ({
  products: state.entities.products.list,
  loading: state.entities.products.loading,
  category: state.entities.products.category,
  cartItems: state.entities.cart.list
});
const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => dispatch(loadProducts()),
  addToCart: (item) => dispatch(addItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

const Customization = (props) => {
  const [customDate, setcustomDate] = useState(new Date());
  const [customWriting, setCustomWriting] = useState("");
  React.useEffect(() => {
    props.setCustomizationOptions(customWriting, customDate);
  }, [customWriting, customDate]);
  return (
    <>
      {props.customWriting && (
        <div className="mb-4 mt-3">
          <label for="name" className="color_size_h6">
            {props.customWriting}*
          </label>
          <input type="name" className="form-control" maxlength="30" />
        </div>
      )}

      {props.customDate ? (
        <div className="mb-4 mt-3">
          <label for="name" className="color_size_h6">
            Date
          </label>
          <DatePicker
            selected={customDate}
            onChange={(date) => setcustomDate(date)}
          />
        </div>
      ) : null}
    </>
  );
};

const Reviews = (props) => {
  function avergeRating() {
    let sum = 0;
    props?.reviews?.map((review) => {
      sum += review.rating;
    });
    return Math.ceil(sum / props.reviews?.length);
  }
  function fakeArray(length) {
    const fakearr = [];
    for (var i = 0; i < length; i++) {
      fakearr.push("fake");
    }
    return fakearr;
  }

  return (
    <>
      <ul className="list-inline mb-2 me-3 small">
        {/* {
                    fakeArray(avergeRating()).map(
                        () => <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
                    )
                }
                {
                    fakeArray(5 - avergeRating()).map(
                        () => <li className="list-inline-item m-0"><i className="fas fa-star small text-muted"></i></li>
                    )
                } */}
        <ReactStars
          edit={false}
          count={5}
          size={24}
          value={avergeRating()}
          activeColor="#ffd700"
        />
      </ul>
      <Link to="#">
        <p className="mb-2 re_look">{props.reviews?.length} REVIEWS</p>
      </Link>
      <div className="vl mb-1 mx-4"></div>
      {/* <a href="#write-review">
        <p className=" mb-2 re_look"> WRITE A REVIEW</p>
      </a> */}
    </>
  );
};

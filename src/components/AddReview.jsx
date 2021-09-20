import { Component } from "react";
import ReactStars from "react-rating-stars-component";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { addReview } from "../storemini/reducers/reviews";
import Review from "./common/Reviews";
import { ProductDetailContext } from "./contexts/ProductDetailContext";

 class AddReview extends Component {
    static contextType = ProductDetailContext;
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        email: "",
        rating: 0,
        reviewTitle: "",
        feedback: "",
        product: "",
        reviews:[]
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.ratingChanged = this.ratingChanged.bind(this);
    }
    
     getAllReviewsHandler = async () => {
      // const { data } = await getAllReviews();
      const detail = this.context;
      // alert('hello');
      this.setState({
        name: "",
        email: "",
        rating: 0,
        reviewTitle: "",
        feedback: "",
        product: detail.product._id,
  });
    };
    componentDidMount() {
      // const detail = this.context;
      // this.setState({
      //   name: "",
      //   email: "",
      //   rating: 0,
      //   reviewTitle: "",
      //   feedback: "",
      //   product: detail.product._id,
      // });
      this.getAllReviewsHandler();
      // this.getAllProductsHandler();
    }
    ratingChanged(rating) {
      this.setState({ rating });
    }
     handleSubmit(e) {
      e.preventDefault();
      const { name, email, rating, reviewTitle, feedback, product } = this.state;
      this.props.addReview({ name, email, rating, reviewTitle, feedback, product });
    }
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value,
      });
    }
   
    render() {
      return (
        <>
          <div className="container font_fam">
            {/* <div className="ho pt-2 mb-3 w-100"> */}
            {/* caroausel start */}
            {/* <TryCarauosel getRelatedProducts /> */}
            {/* caroausel end */}
            {/* </div> */}
            <h6 className="text-center pt-4 pb-2 fw-bold ov_look">
              {" "}
              {/* CUSTOMER REVIEWS{" "} */}
            </h6>
            {/* {console.log(this.state.reviews)} */}
            {/* <Review reviews={this.state.reviews} /> */}
            <a
              className="re_look text-center fw-bold mb-4"
              data-bs-toggle="collapse"
              href="#reviewform"
              role="button"
              aria-expanded="false"
              aria-controls="reviewform"
            >
              <p className=" mb-2 re_look"> WRITE A REVIEW</p>
            </a>
  
            <div className="collapse pt-3 pb-5" id="reviewform">
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="form-group mb-4 ">
                  <a name="write-review"></a>
                  <label  for="name" className="form-label">
                    NAME (AS IT WILL APPEAR WITH REVIEW)
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="nameInput1"
                    onChange={this.handleInputChange}
                    placeholder="Enter your name"
                  />
                </div>
  
                <div className="form-group mb-4">
                  <label for="email">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="emailInput2"
                    onChange={this.handleInputChange}
                    placeholder="john.smith@example.com"
                  />
                </div>
  
                <div className="form-group mb-4">
                  <label for="Rating">RATING</label>
                  <ul className="list-inline large d-flex">
                    
                     <ReactStars
    count={5}
    onChange={this.ratingChanged}
    size={24}
    value={1}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
                  </ul>
                </div>
  
                <div className="form-group mb-4">
                  <label for="REVIEW TITLE">REVIEW TITLE</label>
                  <input
                    type="text"
                    name="reviewTitle"
                    className="form-control"
                    id="reviewtitleInput3"
                    onChange={this.handleInputChange}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group mb-4">
                  <label for="body of Review">BODY OF REVIEW</label>
                  <textarea
                    name="feedback"
                    className="form-control"
                    id="bodyofreviewTextarea4"
                    rows="9"
                    onChange={this.handleInputChange}
                    placeholder="write your comments here"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn mb-3 sub_review_btn float-end bg-danger text-white"
                >
                  Submit
                </button>
              </form>
        
  
            </div>
          </div>
        </>
      );
    }
  }
  
  
const mapStateToProps=(state)=>({
  products:state.entities.products.list,
  loading:state.entities.products.loading
});
const mapDispatchToProps=(dispatch)=>({
  addReview:(review)=>dispatch(addReview(review))
});
export default connect(mapStateToProps,mapDispatchToProps)(AddReview);
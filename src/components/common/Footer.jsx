import React from "react";
import "./style/footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <p className="submit-content">
                  Sign up for exclusive offers and get 10% off your first order
                </p>
              </div>
              <div className="col-sm-auto col-12 my-sm-0 mt-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  value="Enter email"
                />{" "}
              </div>
              <div className="col-auto align-self-end mt-sm-0 mt-4">
                <button className="btn btn-block btn_style btn-danger ml-2 mt-md-0 mt-3">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-4 footer-contact">
                <a href="index.html">
                
                  <img src='https://namibwear.com/wp-content/plugins/minigo/inc/admin/img/logo.png' width='120px' height='120px' alt="MiniGo" />
                </a>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-4 footer-links">
                <ul className="no-design">
                  <li>
                    <Link to="#">Time Wine Club</Link>
                  </li>
                  <li>
                    <a href="#">Times Journeys</a>
                  </li>
                  <li>
                    <a href="#">Times Talks</a>
                  </li>
                  <li>
                    <a href="#">Times School</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 footer-links">
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>

                  <li>
                    <a href="#">Contact Us</a>
                  </li>

                  <li>
                    <a href="#">FAQs</a>
                  </li>

                  <li>
                    <a href="#">Return Policy</a>
                  </li>

                  <li>
                    <a href="#">E-Gift Card</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-4 col-sm-4 footer-links">
                <ul>
                  <li>
                    <a href="#">Corporate Gifts</a>
                  </li>

                  <li>
                    <a href="#">Terms of Sale</a>
                  </li>

                  <li>
                    <a href="#">Terms of Service</a>
                  </li>

                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>

                  <li>
                    <a href="#">Licensing</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-4 footer-links">
                <ul>
                  <li>
                    <a href="https://www.facebook.com" target="_blank">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com" target="_blank">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6">
                <div className="container footer-bottom clearfix">
                  <div className="copyright">
                    &copy;<span> MiniGo Company. MiniGo Store</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

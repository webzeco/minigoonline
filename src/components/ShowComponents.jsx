import React from "react";
import "./style/showComponent.css";

export default function ShowComponents({category}) {
  return (
    <div>
      {/* <!-- ======= bann area ======= --> */}
      <div class="container-fluid bann pt-5 mt-5">
        <ol class="breadcrumb pt-2 px-5">
          <li class="breadcrumb-item look">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item look">
            <a href="/">Books</a>
          </li>
        </ol>
        <div class="row justify-content-center">
          <div class="col-auto w-50">
            <div class="info text-center">
              <span class="h2 bann_title text-center">Times Accessories</span>
              <br></br>
              <span class="h7 bann_discription justify-content-center ">
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
      <div class="container-fluid border mt-1 p-2">
        <div class="row">
          <div class="col-6 text-center">
            <div class="dropdown d-flex justify-content-center">
              <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Price
              </button>
              <div class="vl mt-1 mx-3"></div>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-6 d-flex justify-content-center">
            <span class=" pt-2  count  ">48 items</span>
            <div class="dropdown">
              <button
                class="btn dropdown-toggle border mx-2 px-5 border-dark"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ======= price and sort of product ends======= -->  */}

      {/* <!-- ======= product display in cards ======= -->  */}

      <div class="container pt-5">
        <div class="row ">
        <div class="col-lg-3 col-md-4 col-sm-6 pb-3">
            <div class="card">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  alt=""
                  src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                  class="img-fluid"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
                {/* end of a product  */}
                <div class="col-lg-3 col-md-4 col-sm-6 pb-3">
            <div class="card">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  alt=""
                  src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                  class="img-fluid"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
                {/* end of a product  */}
                <div class="col-lg-3 col-md-4 col-sm-6 pb-3">
            <div class="card">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  alt=""
                  src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                  class="img-fluid"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
                {/* end of a product  */}
                <div class="col-lg-3 col-md-4 col-sm-6 pb-3">
            <div class="card">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  alt=""
                  src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                  class="img-fluid"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
                {/* end of a product  */}
                <div class="col-lg-3 col-md-4 col-sm-6 pb-3">
            <div class="card">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  alt=""
                  src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                  class="img-fluid"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
                {/* end of a product  */}
                <div class="col-lg-3 col-md-4 col-sm-6 pb-3">
            <div class="card">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  alt=""
                  src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                  class="img-fluid"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
                {/* end of a product  */}
                <div class="col-lg-3 col-md-4 col-sm-6 pb-3">
            <div class="card">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  alt=""
                  src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                  class="img-fluid"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
                {/* end of a product  */}
                <div class="col-lg-3 col-md-4 col-sm-6 pb-3">
            <div class="card">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  alt=""
                  src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                  class="img-fluid"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
                {/* end of a product  */}
                <div class="col-lg-3 col-md-4 col-sm-6 pb-3">
            <div class="card">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  alt=""
                  src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                  class="img-fluid"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
                {/* end of a product  */}
                <div class="col-lg-3 col-md-4 col-sm-6 pb-3">
            <div class="card">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  alt=""
                  src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                  class="img-fluid"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
                {/* end of a product  */}
                <div class="col-lg-3 col-md-4 col-sm-6 pb-3">
            <div class="card">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  alt=""
                  src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                  class="img-fluid"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
                {/* end of a product  */}
                <div class="col-lg-3 col-md-4 col-sm-6 pb-3">
            <div class="card">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  alt=""
                  src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                  class="img-fluid"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
                {/* end of a product  */}
                

        </div>
      </div>
      {/* <!-- ======= product display in cards ends ======= -->  */}

      {/* <!-- ======= pagination ======= -->  */}

      <ul class="pagination justify-content-center p-4">
        <li class="page-item">
          <a class="page-link" href="/" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            3
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>

      {/* <!-- ======= pagination ends ======= -->  */}
    </div>
  );
}

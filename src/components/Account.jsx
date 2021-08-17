import React from "react";
import { toast } from "react-toastify";
import "./style/account.css";

export default function Account() {
  const logoutHandler = async () => {
    localStorage.removeItem("jwt");
    toast.success("logout  successfully !!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    // history.push('/');
    window.location = "/";
  };
  return (
    <div>
      <div className="container pro_spec  pb-5 mt-3 ">
        <div className="row justify-content-center ">
          <div className="col-12">
            <div className="d-flex row ">
              <div className="col-10">
                <div className="h5 text-uppercase pro_title_h5">My Account</div>
              </div>
              <div className="col-2 justify-content-center">
                <a href="/">
                  <p
                    onClick={logoutHandler}
                    className="re_look text-center  pt-2"
                  >
                    Logout
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="ho mb-3 mt-2 w-100"></div>

          <div className="col-md-12 pt-3 ">
            <div className="row">
              <div className="col-lg-8 col-md-12 pb-5 ">
                <span className="fw-bold ov_look">Order History </span>
                <p className=" order_p">You haven't place any orders yet.</p>
                <div class="table-responsive">
                  <table className="table  ">
                    <thead className="bg-danger text-white ">
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Status</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td> Rs</td>
                        <td></td>
                        <td></td>
                        <td> Rs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="ho mb-3 mt-2 w-100 d-lg-none"></div>
              <div className="col-lg-1">
                <div className="vl text-center "></div>
              </div>
              <div className="col-lg-3 col-md-12 back">
                <span className="fw-bold ov_look">Account Details </span>
                <a href="#" className="re_look fw-bold mb-4">
                  <p className=" mb-2 re_look"> View Adress(0)</p>
                </a>
                <div className="card rounded pt-3 p-2">
                  <div className="px-1 d9_look">First Name :</div>
                  <div className=" px-1 d9_look">Last Name :</div>
                  <div className="px-1 d9_look">Address 1 : </div>
                  <div className="px-1 d9_look">Address 2 :</div>
                  <div className=" px-1 d9_look">City :</div>
                  <div className=" px-1 d9_look">Province : </div>
                  <div className=" px-1 d9_look">Zip :</div>
                  <div className="px-1 d9_look">Contact no :</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

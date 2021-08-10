import React from "react";
import { toast } from "react-toastify";
import './style/account.css';

export default function Account() {
  const logoutHandler = async () => {
      localStorage.removeItem('jwt');
      toast.success("logout  successfully !!!", {
        position: toast.POSITION.TOP_CENTER
      });
      // history.push('/');
      window.location='/';
  }
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
                  <p onClick={logoutHandler} className="re_look text-center  pt-2">Logout</p>
                </a>
              </div>
            </div>
          </div>

          <div className="ho mb-3 mt-2 w-100"></div>

          <div className="col-md-12 pt-3 ">
            <div className="row">
              <div className="col-8 pb-5 ">
                <span className="fw-bold ov_look">Order History </span>
                <p className=" order_p">You haven't place any orders yet.</p>
              </div>

              <div className="col-md-4 back ">
                <span className="fw-bold ov_look">Account Details </span>
                <a href="#" className="re_look fw-bold mb-4">
                  <p className=" mb-2 re_look"> View Adress(0)</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

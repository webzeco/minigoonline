import React from "react";
import './style/account.css';

export default function Account() {
  return (
    <div>
      <div class="container pro_spec pt-5 pb-5 mt-3">
        <div class="row justify-content-center ">
          <div class="col-12 pt-5 ">
            <div class="d-flex row ">
              <div class="col-10">
                <div class="h5 text-uppercase pro_title_h5">My Account</div>
              </div>

              <div class="col-2 justify-content-center">
                <a href="#">
                  <p class="re_look text-center  pt-2">Logout</p>
                </a>
              </div>
            </div>
          </div>

          <div class="ho mb-3 mt-2 w-100"></div>

          <div class="col-md-12 pt-3 ">
            <div class="row">
              <div class="col-8 pb-5 ">
                <span class="fw-bold ov_look">Order History </span>
                <p class=" ">You haven't place any orders yet.</p>
              </div>

              <div class="col-md-4 back ">
                <span class="fw-bold ov_look">Account Details </span>
                <a href="#" class="re_look fw-bold mb-4">
                  <p class=" mb-2 re_look"> View Adress(0)</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

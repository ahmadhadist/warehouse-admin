import { useState } from "react";

function Login() {
  return (
    <>
      <div class="container">
        <br />
        <br />
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg-6 d-none d-lg-block">
                    <br />
                    <br />
                    <img
                      // src="../assets/toyota.png"
                      src="./../public/toyota.png"
                      class="rounded mx-auto d-block"
                      alt="TOYOTA"
                    />
                  </div>
                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      {/* @if (isError) {
                <div class="alert alert-danger alert-dismissable">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-="true"
                  >
                    &times;
                  </button>
                  <h5 style="font-weight: bold">Informasi</h5>
                  <p>{{ errorMessage }}</p>
                </div>

                } */}

                      <form class="user">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Noreg..."
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                          />
                        </div>
                        <div class="form-group">
                          <div class="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheck"
                            />
                          </div>
                        </div>
                        <a class="btn btn-primary btn-user btn-block">Login</a>
                      </form>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

import React from "react";

//react-router-dom navigation
import { useNavigate } from "react-router-dom";

//importing css files
import ".././assets/css/style.css";
import ".././assets/vendor/bootstrap/css/bootstrap.min.css";
import ".././assets/vendor/bootstrap-icons/bootstrap-icons.css";
import ".././assets/vendor/boxicons/css/boxicons.min.css";
import ".././assets/vendor/glightbox/css/glightbox.min.css";
import ".././assets/vendor/remixicon/remixicon.css";
import ".././assets/vendor/swiper/swiper-bundle.min.css";

function LoginScreen() {
  const navigate = useNavigate();
  return (
    <div>
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <a
                      href="index.html"
                      className="logo d-flex align-items-center w-auto"
                    >
                      <span
                        onClick={() => navigate("/")}
                        className="d-none d-lg-block"
                      >
                        {" "}
                        <span style={{ color: "green" }}>
                          {" "}
                          AVINX{" "}
                        </span> NATION{" "}
                      </span>
                    </a>
                  </div>

                  <form action="" className="mt" method="post">
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="pt-4 pb-2">
                          <h5 className="card-title text-center pb-0 fs-4">
                            {" "}
                            Kindly Login{" "}
                          </h5>
                        </div>

                        <form className="row g-3 needs-validation" novalidate>
                          <div className="col-12">
                            <label for="inputText" className="form-label">
                              {" "}
                              Email{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="email"
                              id="email"
                              required
                            />
                            <div className="invalid-feedback">
                              {" "}
                              Please enter your email!{" "}
                            </div>
                          </div>

                          <div className="col-12">
                            <label for="yourPassword" className="form-label">
                              Password
                            </label>
                            <input
                              type="password"
                              name="country"
                              className="form-control"
                              id="yourPassword"
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter your password!
                            </div>
                          </div>

                          <div className="col-12">
                            <button
                              className="btn btn-primary w-100"
                              name="login"
                              type="submit"
                            >
                              Login
                            </button>
                          </div>
                          <div className="col-12">
                            <p className="small mb-0">
                              Don't have account?{" "}
                              <a href="/AvinxWeb/Sign_up.php">
                                Create an account
                              </a>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;

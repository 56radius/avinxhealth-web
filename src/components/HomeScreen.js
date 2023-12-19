import React from "react";

//importing css files
import ".././assets/css/style.css";
import ".././assets/vendor/bootstrap/css/bootstrap.min.css";

//importing image files

function HomeScreen() {
  return (
    <div>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="index.html"> Avinx </a>
          </h1>
          {/*  <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  {" "}
                  <span id="Love"> Home </span>{" "}
                </a>
              </li>

              <li>
                <a className="nav-link scrollto" href="#services">
                  {" "}
                  Services{" "}
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  {" "}
                  About{" "}
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#team">
                  {" "}
                  Donate{" "}
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  {" "}
                  Contact{" "}
                </a>
              </li>
              <li>
                <a className="getstarted scrollto" href="dashboard/login.php">
                  {" "}
                  Try AVA{" "}
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default HomeScreen;

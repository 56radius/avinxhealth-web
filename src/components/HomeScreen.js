import React from "react";

//importing css files
import ".././assets/css/style.css";
import ".././assets/vendor/bootstrap/css/bootstrap.min.css";
import ".././assets/vendor/bootstrap-icons/bootstrap-icons.css";
import ".././assets/vendor/boxicons/css/boxicons.min.css";
import ".././assets/vendor/glightbox/css/glightbox.min.css";
import ".././assets/vendor/remixicon/remixicon.css";
import ".././assets/vendor/swiper/swiper-bundle.min.css";

//importing image files
import mind from ".././assets/img/mind.png";

function HomeScreen() {
  return (
    <div>
      {/* Navbar */}
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a style={{ textDecoration: "none" }} href="index.html">
              {" "}
              Avinx{" "}
            </a>
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
                <a
                  style={{ textDecoration: "none" }}
                  className="getstarted scrollto"
                  href="dashboard/login.php"
                >
                  {" "}
                  Try AVA{" "}
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      {/* Home Page */}
      <section id="hero" class="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>
                {" "}
                Revitalize Your Mind and Body with AVA, AI-powered therapy{" "}
              </h1>
              <ul>
                <p>
                  Welcome to our AI-powered mind therapy app. Our cutting-edge
                  tehcnology provides personalized solutions to improve your
                  mental health. Our team of experts created an AI, AVA(Avinx
                  Virtual Assistant) to tailor therapy programs to your unique
                  needs, helping you achieve your goals. Say goodbye to anxiety
                  and stress.
                </p>
              </ul>
              <div className="mt-3">
                <a href="Sign_up.php" className="btn-get-started scrollto">
                  {" "}
                  Get Started{" "}
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={mind} className="img-fluid" alt="mind" />
            </div>
          </div>
        </div>
      </section>

      {/* services section */}
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
          </div>

          <div className="row">
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bxl-dribbble"></i>
                </div>
                <h4>
                  <a href=""> Mindfulness Meditation </a>
                </h4>
                <p>
                  {" "}
                  Our Mindfulness meditation program utilizes AI technology to
                  deliver personalized guided meditations and regular meditation
                  practice that fits your lifestyle and supports your mental
                  health.{" "}
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-file"></i>
                </div>
                <h4>
                  <a href=""> Mindfulness-Based Cognitive Therapy </a>
                </h4>
                <p>
                  {" "}
                  Our mindfulness-based cognitive therapy program helps you
                  manage negative thoughts, emotions and behaviours.{" "}
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-tachometer"></i>
                </div>
                <h4>
                  <a href=""> Mindfulness-Based Stress Reduction </a>
                </h4>
                <p>
                  {" "}
                  Offers a holistic approach to stress management that
                  incorporates mindfulness practices, yoga and body awareness
                  techniques.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeScreen;

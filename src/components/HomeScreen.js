import React from "react";

//react-router-navigation
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
                  onClick={() => navigate("/login")}
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

      {/* the rest of the main link */}
      <main id="main">
        {/* About Section */}
        <section id="about" className="about">
          <div className="container">
            <div className="row content">
              <div className="col-lg-6">
                <div className="col-lg-6 order-1 order-lg-2 hero-img">
                  <img
                    src={mind}
                    style={{ width: "80%" }}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <p>
                  Welcome to AVINX(Advanced Interracial Network Experience), a
                  place where you can take the first step towards improving your
                  health. But in this case we are focusing on your mental health
                  with the help of artificial intelligence. Our mission is to
                  make therapy accessible and affordable to everyone by using
                  the latest AI technology.
                </p>

                <p className="fst-italic">
                  Our AI therapists are programmed to assist you with a range of
                  mental health concerns, including anxiety, depression, stress
                  and relationship issues. At Avinx, we are committed to
                  providing you with a personalized experience. Take the first
                  step towards improving your mental health today by signing up
                  for our AI therapy platform. Let our AI therapists help you
                  navigate life's challenges and achieve your goals. The name of
                  our AI therapists is AVA(Avinx Virtual Assistant).
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq">
          <div className="container">
            <div className="section-title">
              <h2>Frequently Asked Questions</h2>
            </div>

            <ul className="faq-list">
              <li>
                <div
                  data-bs-toggle="collapse"
                  className="collapsed question"
                  href="#faq1"
                >
                  Non consectetur a erat nam at lectus urna duis?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                    volutpat lacus laoreet non curabitur gravida. Venenatis
                    lectus magna fringilla urna porttitor rhoncus dolor purus
                    non.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq2"
                  className="collapsed question"
                >
                  Feugiat scelerisque varius morbi enim nunc faucibus a
                  pellentesque? <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq3"
                  className="collapsed question"
                >
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                    sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                    nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                    pellentesque eu tincidunt. Lectus urna duis convallis
                    convallis tellus. Urna molestie at elementum eu facilisis
                    sed odio morbi quis
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq4"
                  className="collapsed question"
                >
                  Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq5"
                  className="collapsed question"
                >
                  Tempus quam pellentesque nec nam aliquam sem et tortor
                  consequat? <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Molestie a iaculis at erat pellentesque adipiscing commodo.
                    Dignissim suspendisse in est ante in. Nunc vel risus commodo
                    viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                    bibendum est. Purus gravida quis blandit turpis cursus in
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq6"
                  className="collapsed question"
                >
                  Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                  turpis nunc eget lorem dolor?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Laoreet sit amet cursus sit amet dictum sit amet justo.
                    Mauris vitae ultricies leo integer malesuada nunc vel.
                    Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                    eget lorem dolor sed. Ut venenatis tellus in metus vulputate
                    eu scelerisque. Pellentesque diam volutpat commodo sed
                    egestas egestas fringilla phasellus faucibus. Nibh tellus
                    molestie nunc non blandit massa enim nec.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer">
        <div class="container d-md-flex py-4">
          <div class="me-md-auto text-center text-md-start">
            <div class="copyright">
              &copy; Copyright{" "}
              <strong>
                <span style={{ color: "green", textAlign: "center" }}>
                  Avinx Nation | Health{" "}
                </span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
        </div>

        {/* Avinx Health logo image or something */}

        <div className="container d-md-flex py-4">
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>

            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomeScreen;

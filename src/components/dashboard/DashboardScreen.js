import React from "react";

//importing navigation files
import { useNavigate } from "react-router-dom";

import logo from "../.././assets/dashboard/assets/img/logo.png";

//importing css files
import "../.././assets/dashboard/assets/css/style.css";
import "../.././assets/dashboard/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../.././assets/dashboard/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../.././assets/dashboard/assets/vendor/boxicons/css/boxicons.min.css";

function DashboardScreen() {
  const navigate = useNavigate();
  return (
    <div className="body">
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <a
            style={{ textDecoration: "none" }}
            href="index.html"
            className="logo d-flex align-items-center"
          >
            <img src={logo} alt="logo" />
            <span className="d-none d-lg-block">
              {" "}
              <span style={{ color: "green" }}> Avinx </span> Nation{" "}
            </span>
          </a>
          <i className="bi bi-list toggle-sidebar-btn"></i>
        </div>

        {/* profile */}
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <a
                className="nav-link nav-icon search-bar-toggle "
                href="index.html"
              >
                <i className="bi bi-search"></i>
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link nav-icon"
                href="index.html"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">4</span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                  You have 4 new notifications
                  <a href="index.html">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-exclamation-circle text-warning"></i>
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-x-circle text-danger"></i>
                  <div>
                    <h4>Atque rerum nesciunt</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>1 hr. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-check-circle text-success"></i>
                  <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-info-circle text-primary"></i>
                  <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <a href="index.html">Show all notifications</a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="index.html"
                data-bs-toggle="dropdown"
              >
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  {" "}
                  Merit Mohammed{" "}
                </span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6> Merit Mohammed </h6>
                  <span>Web Designer</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="users-profile.html"
                  >
                    <i className="bi bi-person"></i>
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="users-profile.html"
                  >
                    <i className="bi bi-gear"></i>
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="pages-faq.html"
                  >
                    <i className="bi bi-question-circle"></i>
                    <span>Need Help?</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      {/* side bar nav bar */}
      <aside id="sidebar" className="sidebar ">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link " href="index.html">
              <i className="bi bi-grid"></i>
              <span style={{ color: "green" }}>Dashboard</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person"></i>
              <span> Profile </span>
            </a>
          </li>

          <li className="nav-item">
            <button
              style={{ borderWidth: 0, backgroundColor: "#fff" }}
              className="nav-link collapsed"
              onClick={() => navigate("/tryava")}
            >
              <i className="bi bi-dash-circle"></i>
              <span> Try AVA </span>
            </button>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#icons-nav"
              data-bs-toggle="collapse"
              href="index.html"
            >
              <i className="bi bi-gem"></i>
              <span> Mindful Minutes </span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="icons-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="yoga.html">
                  <i className="bi bi-circle"></i>
                  <span> Yoga </span>
                </a>
              </li>
              <li>
                <a href="exercise.html">
                  <i className="bi bi-circle"></i>
                  <span> Exercise </span>
                </a>
              </li>
              <li>
                <a href="mind_planning.html">
                  <i className="bi bi-circle"></i>
                  <span> Mental Health To-do list </span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#charts-nav"
              data-bs-toggle="collapse"
              href="index.html"
            >
              <i className="bi bi-bar-chart"></i>
              <span> Tracking </span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="charts-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="mood_tracking.php">
                  <i className="bi bi-circle"></i>
                  <span> Mood Tracking </span>
                </a>
              </li>
              <li>
                <a href="sleep_tracking.php">
                  <i className="bi bi-circle"></i>
                  <span> Sleep Tracking </span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="self_diagnoser.html">
              <i className="bi bi-person"></i>
              <span> Self-diagnoser </span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="community.html">
              <i className="bi bi-person"></i>
              <span> Community </span>
            </a>
          </li>

          <li className="nav-heading">Pages</li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="logout.php">
              <i className="bi bi-box-arrow-in-right"></i>
              <span> Logout </span>
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Dashboard */}
      <main id="main" class="main">
        <div class="pagetitle">
          <h1>
            {" "}
            <span style={{ color: "green" }}> User's </span> Dashboard{" "}
          </h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        <section class="section dashboard">
          <div class="row">
            <div class="col-lg-8">
              <div class="row">
                <div class="col-xxl-4 col-md-6">
                  <div class="card info-card sales-card">
                    <div class="filter">
                      <a class="icon" href="#" data-bs-toggle="dropdown">
                        <i class="bi bi-three-dots"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li class="dropdown-header text-start">
                          <h6> Pick Your Choice </h6>
                        </li>

                        <li>
                          <a class="dropdown-item" href="yoga.html">
                            {" "}
                            Yoga{" "}
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="exercise.html">
                            {" "}
                            Exercise{" "}
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="mind_planning.html">
                            {" "}
                            Mind Planning{" "}
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="card-body">
                      <h5 class="card-title"> Mindful Minutes </h5>

                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i style={{ color: "green" }} class="bi bi-peace"></i>
                        </div>
                        <div class="ps-3">
                          <h6> Solace </h6>
                          <span>
                            {" "}
                            Check in to plan and check out some exercises to
                            relief stress on your mind{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xxl-4 col-md-6">
                  <div class="card info-card revenue-card">
                    <div class="filter">
                      <a class="icon" href="#" data-bs-toggle="dropdown">
                        <i class="bi bi-envelope"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li class="dropdown-header text-start">
                          <h6> </h6>
                        </li>

                        <li>
                          <a class="dropdown-item" href="#">
                            Today
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="card-body">
                      <h5 class="card-title"> Feedback </h5>

                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i
                            style={{ color: "blue" }}
                            class="bi bi-envelope"
                          ></i>
                        </div>
                        <div class="ps-3">
                          <h6> How do we improve? </h6>
                          <span
                            class="text-muted small pt-2 ps-1"
                            style={{ color: "green" }}
                          >
                            {" "}
                            Click on the envelope icon on the top right to give
                            us a feedback on how to improve{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="col-xxl-4 col-xl-12">
                <div class="card info-card customers-card">
                  <div class="filter">
                    <a class="icon" href="index.html" data-bs-toggle="dropdown">
                      <i class="bi bi-three-dots"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li>
                        <a class="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title"> Mind Health Trends </h5>

                    <div class="d-flex align-items-center">
                      <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i style={{ color: "green" }} class="bi bi-people"></i>
                      </div>
                      <div class="ps-3">
                        <h6>1244</h6>
                        <span class="text-muted small pt-2 ps-1">
                          {" "}
                          Health looks for trends in certain topics and can
                          notify you when there's a change{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="copyright">
          &copy; Copyright 2023 Avinx Nation All Rights Reserved
        </div>
        <div className="credits"></div>
      </footer>
    </div>
  );
}

export default DashboardScreen;

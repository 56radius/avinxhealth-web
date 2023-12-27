import React from "react";

import logo from ".././assets/dashboard/assets/img/logo.png";

//importing css files
import ".././assets/dashboard/assets/css/style.css";
import ".././assets/dashboard/assets/vendor/bootstrap/css/bootstrap.min.css";
import ".././assets/dashboard/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import ".././assets/dashboard/assets/vendor/boxicons/css/boxicons.min.css";

function DashboardScreen() {
  return (
    <div>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src={logo} alt="logo" />
            <span className="d-none d-lg-block"> Avinx Nation </span>
          </a>
          <i className="bi bi-list toggle-sidebar-btn"></i>
        </div>

        {/* 
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
        </nav> */}
      </header>

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
            <a className="nav-link collapsed" href="try_ava.html">
              <i className="bi bi-dash-circle"></i>
              <span> Try AVA </span>
            </a>
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
    </div>
  );
}

export default DashboardScreen;

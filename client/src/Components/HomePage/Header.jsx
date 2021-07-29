/* eslint-disable no-undef */
import React, { Fragment, useEffect } from "react";
import { useContext } from "react";
import { GoogleLogout, useGoogleLogout } from "react-google-login";
import { Link, useHistory } from "react-router-dom";
import { contextData } from "../../context/Provider";

const Header = () => {
  const history = useHistory();
  const context = useContext(contextData);
  const logout = (response) => {
    context.logoutUser();
    history.push("/login");
  };

  return (
    <header className="header-global">
      <nav
        id="navbar-main"
        className="navbar navbar-main navbar-theme-primary navbar-expand-lg headroom py-lg-3 px-lg-6 navbar-dark navbar-transparent"
      >
        <div className="container">
          <a className="navbar-brand @@logo_classes" href="javascript:void();">
            <img
              className="navbar-brand-dark common"
              src="https://demo.themesberg.com/spaces/assets/img/brand/light.svg"
              height={35}
              alt="Logo light"
            />
            <img
              className="navbar-brand-light common"
              src="https://demo.themesberg.com/spaces/assets/img/brand/dark.svg"
              height={35}
              alt="Logo dark"
            />
          </a>
          <div className="navbar-collapse collapse" id="navbar_global">
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <Link to="#">
                    <img
                      src="https://demo.themesberg.com/spaces/assets/img/brand/dark.svg"
                      height={35}
                      alt="Logo Impact"
                    />
                  </Link>
                </div>
                <div className="col-6 collapse-close">
                  <Link
                    to="#navbar_global"
                    role="button"
                    className="fas fa-times"
                    data-toggle="collapse"
                    data-target="#navbar_global"
                    aria-controls="navbar_global"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  />
                </div>
              </div>
            </div>
            <ul className="navbar-nav navbar-nav-hover justify-content-center">
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  id="mainPagesDropdown"
                  className="nav-link dropdown-toggle"
                  aria-expanded="false"
                  data-toggle="dropdown"
                >
                  <span className="mr-1 nav-link-inner-text">Front pages</span>
                  <i className="fas fa-angle-down nav-link-arrow" />
                </Link>
                <div
                  className="p-3 dropdown-menu dropdown-megamenu p-lg-4"
                  aria-labelledby="mainPagesDropdown"
                >
                  <div className="row">
                    <div className="col-6 col-lg-4">
                      <h6 className="mb-3 d-block text-primary">Main pages</h6>
                      <ul className="mb-4 list-style-none">
                        <li className="mb-2 megamenu-item">
                          <a className="megamenu-link" href="index.html">
                            Landing
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a className="megamenu-link" href="index-2.html">
                            Landing 2
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a className="megamenu-link" href="index-3.html">
                            Landing 3
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a className="megamenu-link" href="about.html">
                            About
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a className="megamenu-link" href="pricing.html">
                            Pricing
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a className="megamenu-link" href="team.html">
                            Team
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a className="megamenu-link" href="contact.html">
                            Contact
                          </a>
                        </li>
                      </ul>
                      <h6 className="d-block text-primary">Legal</h6>
                      <ul className="mb-4 list-style-none">
                        <li className="mb-2 megamenu-item">
                          <a className="megamenu-link" href="legal.html">
                            Legal center
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a className="megamenu-link" href="terms.html">
                            Terms &amp; agreement
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-lg-4">
                      <h6 className="mb-3 d-block text-primary">Listing</h6>
                      <ul className="mb-4 list-style-none">
                        <li className="mb-2 megamenu-item">
                          <a className="megamenu-link" href="all-spaces.html">
                            All spaces
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a
                            className="megamenu-link"
                            href="all-spaces-map.html"
                          >
                            Map view
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a
                            className="megamenu-link"
                            href="all-spaces-sidebar.html"
                          >
                            All spaces sidebar
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a className="megamenu-link" href="single-space.html">
                            Space details
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a className="megamenu-link" href="profile.html">
                            Profile
                          </a>
                        </li>
                      </ul>
                      <h6 className="mb-3 d-block text-primary">Support</h6>
                      <ul className="mb-4 list-style-none">
                        <li className="mb-2 megamenu-item">
                          <a className="megamenu-link" href="support.html">
                            Support center
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a
                            className="megamenu-link"
                            href="support-topic.html"
                          >
                            Support topic
                          </a>
                        </li>
                      </ul>
                      <h6 className="mb-3 d-block text-primary">Blog</h6>
                      <ul className="mb-4 list-style-none">
                        <li className="mb-2 megamenu-item">
                          <a className="megamenu-link" href="blog.html">
                            Blog
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a className="megamenu-link" href="blog-post.html">
                            Blog post
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-lg-4">
                      <h6 className="mb-3 d-block text-primary">User</h6>
                      <ul className="mb-4 list-style-none">
                        <li className="mb-2 megamenu-item">
                          <a className="megamenu-link" href="sign-in.html">
                            Sign in
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a className="megamenu-link" href="sign-up.html">
                            Sign up
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a
                            className="megamenu-link"
                            href="forgot-password.html"
                          >
                            Forgot password
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a
                            className="megamenu-link"
                            href="reset-password.html"
                          >
                            Reset password
                          </a>
                        </li>
                      </ul>
                      <h6 className="mb-3 d-block text-primary">Special</h6>
                      <ul className="mb-4 list-style-none">
                        <li className="mb-2 megamenu-item">
                          <a className="megamenu-link" href="404.html">
                            404 Not Found
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a className="megamenu-link" href="500.html">
                            500 Server Error
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a className="megamenu-link" href="maintenance.html">
                            Maintenance
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a className="megamenu-link" href="coming-soon.html">
                            Coming soon
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a className="megamenu-link" href="blank.html">
                            Blank page
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  id="dashboardPagesDropdown"
                  className="nav-link dropdown-toggle"
                  aria-expanded="false"
                  data-toggle="dropdown"
                >
                  <span className="mr-1 nav-link-inner-text">Dashboard</span>{" "}
                  <i className="fas fa-angle-down nav-link-arrow" />
                </Link>
                <div
                  className="p-3 dropdown-menu dropdown-megamenu-sm p-lg-4"
                  aria-labelledby="dashboardPagesDropdown"
                >
                  <div className="row">
                    <div className="col-6">
                      <h6 className="mb-3 d-block text-primary">
                        User dashboard
                      </h6>
                      <ul className="mb-4 list-style-none">
                        <li className="mb-2 megamenu-item">
                          <Link className="megamenu-link" to="/userdashboard">
                            My account
                          </Link>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a
                            className="megamenu-link"
                            href="dashboard/settings.html"
                          >
                            Settings
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a
                            className="megamenu-link"
                            href="dashboard/security.html"
                          >
                            Security
                          </a>
                        </li>
                      </ul>
                      <h6 className="mb-3 d-block text-primary">Items</h6>
                      <ul className="list-style-none">
                        <li className="mb-2 megamenu-item">
                          <a
                            className="megamenu-link"
                            href="dashboard/my-items.html"
                          >
                            My items
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a
                            className="megamenu-link"
                            href="dashboard/edit-item.html"
                          >
                            Edit item
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <h6 className="mb-3 d-block text-primary">Messaging</h6>
                      <ul className="mb-4 list-style-none">
                        <li className="mb-2 megamenu-item">
                          <a
                            className="megamenu-link"
                            href="dashboard/messages.html"
                          >
                            Messages
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a
                            className="megamenu-link"
                            href="dashboard/single-message.html"
                          >
                            Chat
                          </a>
                        </li>
                      </ul>
                      <h6 className="mb-3 d-block text-primary">Billing</h6>
                      <ul className="mb-4 list-style-none">
                        <li className="mb-2 megamenu-item">
                          <a
                            className="megamenu-link"
                            href="dashboard/billing.html"
                          >
                            Billing details
                          </a>
                        </li>
                        <li className="mb-2 megamenu-item">
                          <a
                            className="megamenu-link"
                            href="userdashboard/invoice"
                          >
                            Invoice
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  id="supportDropdown"
                  className="nav-link dropdown-toggle"
                  aria-expanded="false"
                  data-toggle="dropdown"
                >
                  <span className="mr-1 nav-link-inner-text">Support</span>
                  <i className="fas fa-angle-down nav-link-arrow" />
                </Link>
                <div
                  className="dropdown-menu dropdown-menu-lg"
                  aria-labelledby="supportDropdown"
                >
                  <div className="col-auto px-0">
                    <div className="list-group list-group-flush">
                      <Link
                        to="https://themesberg.com/docs/spaces/getting-started/quick-start/"
                        target="_blank"
                        className="p-0 py-3 list-group-item list-group-item-action d-flex align-items-center px-lg-4"
                      >
                        <span className="icon icon-md icon-secondary">
                          <i className="fas fa-file-alt" />
                        </span>
                        <div className="ml-4">
                          <span className="text-dark d-block">
                            Documentation
                            <span className="ml-2 badge badge-sm badge-secondary">
                              v3.0
                            </span>
                          </span>
                          <span className="small">Examples and guides</span>
                        </div>
                      </Link>
                      <Link
                        to="https://themesberg.com/contact"
                        target="_blank"
                        className="p-0 py-3 list-group-item list-group-item-action d-flex align-items-center px-lg-4"
                      >
                        <span className="icon icon-md icon-primary">
                          <i className="fas fa-microphone-alt" />
                        </span>
                        <div className="ml-4">
                          <span className="text-dark d-block">Support</span>{" "}
                          <span className="small">Looking for answers?</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* <div className="d-none d-lg-block @@cta_button_classes">
                            <Link to="/adminpanel" className="mr-3 btn btn-md btn-outline-white animate-up-2">
                                <i className="mr-1 fas fa-book" />
                                <span className="d-xl-none">Docs</span>
                                <span className="d-none d-xl-inline">Admin</span>
                            </Link>
                        </div> */}

          <div id="google_translate_element"></div>

          {!context.isAuthenticated && (
            <Link to="/login" className="btn btn-md btn-secondary animate-up-2">
              <i className="mr-2 fas fa-shopping-bag" />
              Login
            </Link>
          )}
          {context.isAuthenticated && context.isAdmin ? (
            <div className="d-none d-lg-block @@cta_button_classes">
              <Link
                to="/adminpanel"
                className="mr-3 btn btn-md btn-outline-white animate-up-2"
              >
                <i className="mr-1 fas fa-book" />
                <span className="d-xl-none">Docs</span>
                <span className="d-none d-xl-inline">Admin</span>
              </Link>
            </div>
          ) : (
            ""
          )}

          {context.isAuthenticated && (
            <Fragment>
              <button
                onClick={logout}
                className="btn btn-md btn-secondary animate-up-2"
              >
                <i className="mr-2 fas fa-shopping-bag" />
                Logout
              </button>
            </Fragment>
          )}

          <div className="d-flex d-lg-none align-items-center">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar_global"
              aria-controls="navbar_global"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [burger, setBurger] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const navScrollBackground = () => {
    if (window.scrollY >= 50 || burger) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", navScrollBackground);

  return (
    <div id="navbar">
      <nav
        className={
          navbar
            ? "container-fluid navbar fixed-top navbar-expand-lg nav-menu active"
            : "container-fluid navbar fixed-top navbar-expand-lg nav-menu"
        }
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="#">
            <span className="h2 fw-bold logo">Pooja Makeovers</span>
          </Link>
          <span
            className={
              burger
                ? `navbar-toggler nav-button change`
                : `navbar-toggler nav-button`
            }
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              setBurger(!burger)
              if(navbar === false){
              setNavbar(true)
              }
            }}
          >
            <div className="line1"></div>
            <div className=" line2"></div>
            <div className=" line3"></div>
          </span>
        </div>

        <div
          className="collapse navItemCnt navbar-collapse text-uppercase fw-bold text-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-0 mb-lg-0">
            <li className="nav-item">
              <HashLink
                className="nav-link ms-lg-4 menu-item"
                aria-current="page"
                to="#"
              >
                Home
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                className="nav-link ms-lg-4 menu-item"
                aria-current="page"
                to="/poojamakeovers#meetPooja"
              >
                MEET&nbsp;POOJA
              </HashLink>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link ms-lg-4 menu-item"
                aria-current="page"
                to="#"
              >
                PORTFOLIO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link ms-lg-4 menu-item"
                aria-current="page"
                to="#"
              >
                RATES
              </Link>
            </li>
            <li className="nav-item">
              <HashLink
                className="nav-link ms-lg-4 menu-item"
                aria-current="page"
                to="/poojamakeovers#footer"
              >
                CONTACT
              </HashLink>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link ms-lg-4 menu-item"
                aria-current="page"
                to="#"
              >
                REVIEWS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

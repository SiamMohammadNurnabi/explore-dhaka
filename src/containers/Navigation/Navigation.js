import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <NavLink className="navbar-brand" to="/">
          Dhaka Explore Guide
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i className="fas fa-bars" style={{ color: "#fff" }} />
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item ml-5 active">
              <NavLink
                className="nav-link text-light text-uppercase"
                to="/"
                activeStyle={{ color: "danger" }}
              >
                &nbsp;<i className="fas fa-home"></i>Home{" "}
                <span className="sr-only">
                  (curre<i className="fas fa-home"></i>nt)
                </span>
              </NavLink>
            </li>
            <li className="nav-item ml-5">
              <NavLink
                className="nav-link text-light text-uppercase"
                to="/locations"
              >
                Locations
              </NavLink>
            </li>
            <li className="nav-item ml-5">
              <NavLink
                className="nav-link text-light text-uppercase"
                to="/contact-us"
              >
                Contact us
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navigation;

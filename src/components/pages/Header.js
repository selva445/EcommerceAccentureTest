import React from "react";
import { Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar
      collapseOnSelect
      className="navbar navbar-expand-lg navbar-light bg-dark "
      expand="md"
    >
      <Navbar.Toggle />
      <Navbar.Collapse>
        <div className="justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li className="nav-item  ">
              <a className="nav-link text-white" eventKey="1" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" eventKey="2" href="/">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" eventKey="3" href="/">
                Cart
              </a>
            </li>
            <li className="nav-item">
              <i className="fas fa-shopping-cart fa-2x text-danger"></i>
            </li>
          </ul>
        </div>
      </Navbar.Collapse>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search this Website"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </Navbar>
  );
}

import React from "react";
import { NavLink } from 'react-router-dom'
import './Navbar.css';
const user = JSON.parse(localStorage.getItem('user'))

const Navbar = ({ countCartItems, name, handleLogOut}) => {
  return (
    <nav
      style={{ backgroundColor: "rgb(37, 150, 190)" }}
      className="navbar navbar-expand-lg navbar-dark"
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand ms-3" to="#">
          Beauty Saloon
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul
            style={{ marginRight: "10px", marginLeft: "10px" }}
            className="navbar-nav ms-auto hover-nav fw-bolder"
          >
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active text-dark"
                exact
                to="/appointment"
              >
                Appointment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active text-dark"
                exact
                to="dashboard"
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark active" exact to="/shop">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active text-dark" exact to="/blogs">
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active text-dark" exact to="contact">
                Contact Us
              </NavLink>
            </li>
            <li class="nav-item dropdown">
              <NavLink
                class="nav-link active text-dark dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user.name || name ? (
                  user.name || name
                ) : (
                  <span>Registration</span>
                )}
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {user.name || name ? (
                  <li className="">
                    <NavLink class="dropdown-item" to='/logout'>
                      <span onClick={handleLogOut}>
                         Logout
                     </span>
                    </NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink class="dropdown-item" exact to="/login">
                      <span>Sign In</span>
                    </NavLink>
                  </li>
                )}
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" exact to="/shop">
                Cart{" "}
                {countCartItems ? (
                  <button className="btn-sm fw-bolder btn btn-warning">
                    {countCartItems}
                  </button>
                ) : (
                  ""
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



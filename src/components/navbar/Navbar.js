import React from "react";
import "./navbar.css";
import logo from "../../Assets/Images/logo.png"
const Navbar = () => {
  return (
    <div className="starr-navbar">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="logo" />
          <h2>Lonestar Stain and Seal</h2>
        </a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ">
            <div class="nav-item nav-link contactNumber">
                (972) 322-8227
            <button class='button'>
                Get a Quote today
            </button>
          </div>

          </div>
        </div>
      </nav>

      <div className="second-nav">
      </div>
    </div>
  );
};

export default Navbar;

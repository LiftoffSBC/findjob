import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar fixed-top navbar-light bg-light">
  <a className="navbar-brand"><img src={require('../../img/finjobiotransparent.png')} /></a>
  <form className="form-inline">
    <button className="btn btn-outline-success my-2 my-md-0" type="submit" onClick={this.loadCareer}>Search</button>
    <input className="form-control mr-lg-2" type="search" placeholder="City" aria-label="city" controlId="formHorizontalName" />
    <input className="form-control mr-lg-2" type="search" placeholder="State" aria-label="state" controlId="formHorizontalName" />
    <input className="form-control mr-lg-2" type="search" placeholder="Zip" aria-label="Zip" controlId="formHorizontalName" />

  </form>
</nav>
);

export default Navbar;

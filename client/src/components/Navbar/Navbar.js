import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar fixed-top navbar-light bg-light">
  <a className="navbar-brand"><img src={require('../../img/finjobiotransparent.png')} alt="logo" /></a>
  <form className="form-inline">
    <button className="btn btn-outline-success my-2 my-md-0" type="submit" onClick={this.loadCareer}>Search</button>
    <input className="form-control mr-lg-2" type="search" placeholder="Search" aria-label="Search" controlId="formHorizontalName" />
  </form>
</nav>
);

export default Navbar;

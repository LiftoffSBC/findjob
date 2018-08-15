import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar fixed-top navbar-light bg-light">
  <a className="navbar-brand"><img src={require('../../img/finjobiotransparent.png')} /></a>
  <form className="form-inline">

  <input className="form-control mr-lg-2" type="search" placeholder="Job" aria-label="Search" controlId="formHorizontalName" />
    <input className="form-control mr-lg-1" type="search" placeholder="City" aria-label="city" controlId="formHorizontalName" />
    <br> 
    </br>
  </form>
  <button className="btn btn-outline-success my-2 my-md-0" type="submit" onClick={this.loadCareer}>Search</button>

</nav>
);

export default Navbar;

import React from "react";
import "./Footer.css";

const Footer = () => (

    <nav className="navbar sticky-bottom navbar-light bg-light footerBottom">
        <div className="footerDiv">
        <a href="https://github.com/LiftoffSBC/findjob" target="link">
            <img src={require('../../img/github.jpg')} className="img-fluid" alt="Github"/> 
            </a>
            <div className="footer-copyright text-center py-3">© 2018 Copyright: FindJob.io.</div>
        </div>
    </nav>

);

export default Footer;
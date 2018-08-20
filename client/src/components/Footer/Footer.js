import React from "react";
import "./Footer.css";

const Footer = () => (

    <nav className="navbar sticky-bottom navbar-light bg-light footerBottom">
        <div className="footerDiv">




            <a className="nav-link github" href="https://github.com/LiftoffSBC/findjob" target="link">Github</a>
            <br />
            {/* <p> Thank you for visiting!</p> */}

            <div className="footer-copyright text-center py-3">© 2018 Copyright: FindJob.io.

            </div>
        </div>

    </nav>

);

export default Footer;
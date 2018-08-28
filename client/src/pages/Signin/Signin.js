import React from "react";
import {Link} from "react-router-dom";
const Signin = () => {
    return (
        <div className="container">
        <form action="/login" method="POST"> 
        <input id="txtEmail" name="email" type="email" placeholder="Email"></input>
        
        <input id="txtPassword" type="password" name="password" placeholder="Password"></input>
        </form>
        <Link to="/">Login</Link>
            

        
    </div>


    )

       
}

export default Signin;
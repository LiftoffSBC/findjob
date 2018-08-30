import React from "react";
//import {Link} from "react-router-dom";
import "./Register.css"
import Footer from "../../components/Footer/Footer";

const Register = () => {

   const handleSignIn = () => {
        window.location = '/login';
      };
    return (
        <div>
        <div className="jumbotron">
        <form action="/register" method="POST"> 
        <input id="txtEmail" name="email" type="email" placeholder="Email"></input>
        
        <input id="txtPassword" type="password" name="password" placeholder="Password"></input>
        <input type="submit" value="submit" className="btn btn-black my-2 my-md-0 submit"
        onClick={this.handleSignIn}
    
      ></input>

        </form>
       

            

        
    </div>
    <Footer />
    </div>
    )     
}

export default Register;
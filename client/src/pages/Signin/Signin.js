import React from "react";
import  "./SignIn.css";
import Footer from "../../components/Footer/Footer";

    
      
const Signin = () => {
  
    return (
        <div>
        <div className="jumbotron">
        
        <form action="/login" method="POST"> 
        <input id="txtEmail" name="email" type="email" placeholder="Email"></input>
        
        <input id="txtPassword" type="password" name="password" placeholder="Password"></input>
        <input type="submit" value="submit"
        id="login"
        className="btn btn-black my-2 my-md-0 submit"
       ></input>
        </form>
    </div>
     <Footer />
</div>

    )


}

export default Signin;
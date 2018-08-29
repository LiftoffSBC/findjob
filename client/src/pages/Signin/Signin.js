import React from "react";

const Signin = () => {
    return (
        <div className="container">
        <form action="/login" method="POST"> 
        <input id="txtEmail" name="email" type="email" placeholder="Email"></input>
        
        <input id="txtPassword" type="password" name="password" placeholder="Password"></input>
        <input type="submit" value="submit" class="btn btn-primary submit"></input>
        </form>
        
            

        
    </div>


    )

       
}

export default Signin;
import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {

  redirectToTarget = () => {
    this.context.router.history.push(`/login`)
  }
  
 
handleMyJobs = event => {
  window.location = '/save';

};
handleSignUp = event => {
  window.location = '/register';

};
handleSignIn = event => {
  window.location = '/login';
};

  render() {
    return (


<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand">
        <img alt="Brand" src={require('../../img/finjobiotransparent.png')}></img>
      </a>
    </div>

    
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
  
      <button 
      type="button" 
      className="btn btn-black my-2 my-md-0 navbar-btn"
      onClick={this.handleSignIn}
      >Sign In</button>

      <button 
      type="button" 
      className="btn btn-black my-2 my-md-0 navbar-btn"
      onClick={this.handleSignUp}
      >Sign Up</button>

      <button 
      type="button" 
      className="btn btn-black my-2 my-md-0 navbar-btn"
      onClick={this.handleMyJobs}
      >My Jobs</button>

          
      </ul>
    </div>
  </div>
</nav>

    )
  }
}


export default Navbar;

import React from "react";
import "./Navbar.css";
import API from "./../../utils/API";


class Navbar extends React.Component {

  state = {
    jobs: [],
    searchResults: [],
    JobTitle: "JobTitle",
    Company: "Company",
    URL: "Job Description",
    AcquisitionDate: "Date",
    search: ''
  };


  loadCareer = (title) => {
    API.getCareer(title)
      .then(res => {
        this.props.updateSearchResults(res.data.Jobs);
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    
    this.setState({
      search: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.loadCareer(this.state.search);
    console.log(this.state.search);
  };

  render() {
    return (
// testing area for new format

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
      // onClick={this.handleSignIn} - our user auth function for sign in
      >Sign In</button>

      <button 
      type="button" 
      className="btn btn-black my-2 my-md-0 navbar-btn"
      // onClick={this.handleSignUp} - our functtion for sign ups
      >Sign Up</button>

      <button 
      type="button" 
      className="btn btn-black my-2 my-md-0 navbar-btn"
      // onClick={this.handleSavedJobs} - or function to go to a signed in users job page. 
      //we also need to create hide/show functions for this based on if signed in.
      >My Jobs</button>

          {/* <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown 
          {/* we may not use this, leaving for now */}
          {/* <span className="caret"></span></a> 
          <ul className="dropdown-menu">  */}
            {/* <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">One more separated link</a></li> */}
          </ul>
      {/* </ul> */}
      <form className="navbar-form navbar-left">
        <div className="form-group">
        <input
            className="form-control mr-lg-2"
            type="search"
            aria-label="Search"
            controlid="formHorizontalName"
            onChange={this.handleInputChange}
            value={this.state.search}
            name="search"
            placeholder="Search For a Job"
            id="search" />
        </div>
        <button
            className="btn btn-black my-2 my-md-0"
            type="submit"
            onClick={this.handleFormSubmit}
          >Search</button>
      </form>
      <ul className="nav navbar-nav navbar-right">
        {/* <li><a href="#">Link</a></li> */}
        {/* <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li> */}
      </ul>
    </div>
  </div>
</nav>


// end testing area for new format
      /* <nav classNameName="navbar-brand fixed-top navbar-light bg-light navbarTop">

        <a classNameName="img-fluid"><img src={require('../../img/finjobiotransparent.png')} alt="Findjob.io" /></a>

        <form classNameName="form-inline">

          <button
            classNameName="btn btn-black my-2 my-md-0"
            type="submit"
            onClick={this.handleFormSubmit}
          >Search</button>

          <input
            classNameName="form-control mr-lg-2"
            type="search"
            aria-label="Search"
            controlid="formHorizontalName"
            onChange={this.handleInputChange}
            value={this.state.search}
            name="search"
            placeholder="Search For a Job"
            id="search" />

        </form>

      </nav> */
    )
  }
}

export default Navbar;

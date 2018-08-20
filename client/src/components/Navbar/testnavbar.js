import React from "react";
import "./Navbar.css";
import API from "./../../utils/API";

//this is the original navbar - working

class Navbar extends React.Component {

//below from Austin - Lib needed array for db
//   state={
//     search: ""
//   }

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

      <nav className="navbar fixed-top navbar-light bg-light navbarTop">

        <a className="img-fluid"><img src={require('../../img/finjobiotransparent.png')} alt="Findjob.io" /></a>

        <form className="form-inline">

          <button
            className="btn btn-black my-2 my-md-0"
            type="submit"
            onClick={this.handleFormSubmit}
          >Search</button>

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

        </form>

      </nav>
    )
  }
}

export default Navbar;

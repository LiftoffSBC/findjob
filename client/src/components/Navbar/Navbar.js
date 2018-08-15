import React from "react";
import "./Navbar.css";
import API from "./../../utils/API";


class Navbar extends React.Component {

  state = {
    jobs: [],
    JobTitle: "JobTitle",
    Company: "Company",
    URL: "Job Description",
    AcquisitionDate: "Date",
  };



  loadCareer = (title) => {
    API.getCareer(title)
      .then(res => {
        this.setState({ jobs: res, JobTitle: "", Company: "", URL: "", AcquisitionDate: "" })
        console.log(res);
      }
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.loadCareer(this.state.search);
    console.log(this.state.search); 
  };

  render() {
       return (

  <nav className="navbar fixed-top navbar-light bg-light">

  <a className="navbar-brand"><img src={require('../../img/finjobiotransparent.png')} alt="Findjob.io" /></a>

  <form className="form-inline">

    <button 
    className="btn btn-primary my-2 my-md-0" 
    type="submit" 
    onClick={this.handleFormSubmit}
    >Search</button>

    <input 
    className="form-control mr-lg-2" 
    type="search" 
    aria-label="Search" 
    controlId="formHorizontalName" 
    onChange={this.handleInputChange}
    value={this.state.search}
    name="search"
    placeholder="Search For a Job"
    id="search"/>

  </form>

</nav>
       )}
}

export default Navbar;

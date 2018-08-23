import React from "react";
import "./Searchbar.css";
import API from "./../../utils/API";

class Searchbar extends React.Component {

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

           
      <form className="form left">
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
    //   <ul className="nav nav right"> </ul>
        )
    }
}

    export default Searchbar;
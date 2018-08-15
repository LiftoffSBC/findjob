import React from "react";
import API from "./../../utils/API";

class Career extends React.Component {
    state = {
      jobs: [],
      JobTitle: "JobTitle",
      Company: "Company",
      URL: "Job Description",
      AcquisitionDate: "Date",
    };
  
    loadCareer = () => {
      API.getCareer()
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
    };
  
    // render() {
    //   return (
    //     <form>
    //       <div className="form-group">
    //         <label htmlFor="search">Search:</label>
    //         <input
              
    //         />
    //         <br />
    //         <button
        //   onClick={this.handleFormSubmit}
        //   className="btn btn-primary"
    //         >
    //           Search
    //                </button>
    //       </div>
    //     </form>
    //   )
    // }
  }

export default Career;
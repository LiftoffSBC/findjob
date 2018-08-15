import React from "react";
import "./Table.css";
import API from "../src/utils/API";

class App extends Component {
  state = {
    jobs: [],
    JobTitle: "JobTitle",
    Company: "Company",
    URL: "Job Description",
    AcquisitionDate: "Date",
  };

componentDidMount() {
  // this.loadCareer();
}

loadCareer = () => {
  API.getCareer()
    .then(res => {
      this.setState({ jobs: res, JobTitle: "", Company: "", URL: "" , AcquisitionDate: ""})
      console.log(res);}
      )
      .catch (err => console.log(err));
};
}

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
          <form>
               <div className="form-group">
                 <label htmlFor="search">Search:</label>
                 <input
                   onChange={this.handleInputChange}
                   value={this.state.search}
                   name="search"
                   type="text"
                   className="form-control"
                   placeholder="Search For a Job"
                   id="search"
                 />
                 <br />
                 <button
                   onClick={this.handleFormSubmit}
                   className="btn btn-primary"
                 >
                   Search
                 </button>
               </div>
             </form>
const Table = () => (
    <div className="table">
                <h1>Results</h1>
                <thead id="thead">
                  <tr>
                    <th>#</th>
                    <th>Job</th>
                    <th>Location</th>
                    <th>Pay</th>
                  </tr>
                </thead>
                <tbody id="tbody">
                  <tr>
                    <td>1</td>
                    <td>Full-Stack Developer</td>
                    <td>Charlotte, NC</td>
                    <td>$85k</td>
                  </tr>
                </tbody>
        </div>
  );

export default Table;
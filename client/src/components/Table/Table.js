import React from "react";
import "./Table.css";
import "../Navbar/Navbar";
// import "../../App";

const Table = (props) => {
  console.log(props);
  return (
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
        {props.searchResults.map((result, i) => {
          console.log(result);
          return (
            <tr>
              <td>{i+1}</td>
              <td>{result.JobTitle}</td>
              <td>Charlotte, NC</td>
              <td>$85k</td>
            </tr>
          )
        })}
      </tbody>
    </div>
  )
};

export default Table;
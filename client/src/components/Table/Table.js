import React from "react";
import "./Table.css";
import "../Navbar/Navbar";
// import "../../App";

const Table = (props) => {
  console.log(props);
  return (
    <div>
    
    <table className="table">
      <thead id="thead">
        <tr>
          <th>Title</th>
          <th>Location</th>
          <th>Company</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody id="tbody">
        {props.searchResults.map((result) => {
          console.log(result);
          return (
            <tr>
              <td>{result.JobTitle}</td>
              <td>{result.Location}</td>
              <td>{result.Company}</td>
              <td><a href={result.URL} target="_blank">Apply Now</a></td>
            </tr>
          )
        })}
      </tbody>
    </table>
    </div>
  )
};

export default Table;
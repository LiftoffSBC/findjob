import React from "react";
import "./Table.css";
import "../Navbar/Navbar";

class Table extends React.Component {

render() {
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
        <tr>
          <td>1</td>
          <td>Full-Stack Developer</td>
          <td>Charlotte, NC</td>
          <td>$85k</td>
        </tr>
      </tbody>
    </div>
  )}

}
  
  export default Table;
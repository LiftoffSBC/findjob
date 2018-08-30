import passData from "../../utils.js";
import React, {Component} from "react"
import "./Table.css";
import "../Navbar/Navbar";
import axios from "axios";
// import $ from "jquery";
// // import "../../App";



// class savedJobsTable extends Component {
//     state = {savedJobs:""}
//   componentDidMount(){
//     $.ajax({
//         type: "GET",
//         url: "/savedJobs"
//          }).then(function(dbUser){
//             this.setState({savedJobs:dbUser.savedJobs})
//             console.log(dbUser.savedJobs)
//          });
//   }
  
//   render(){
//   return (
//     <div>
    
//     <table className="table">
//       <thead id="thead">
//         <tr>
//           <th>Title</th>
//           <th>Location</th>
//           <th>Company</th>
//           <th>Link</th>
//         </tr>
//       </thead>
//       <tbody id="tbody">
//         {this.state.savedJobs.map((result) => {
//           console.log(result);
//           return (
//             <tr>
//               <td>{result.JobTitle}</td>
//               <td>{result.Location}</td>
//               <td>{result.Company}</td>
//               <td><a href={result.URL} target="_blank">Apply Now</a></td>
//               {/* <td><button data-id={result.JvId} onClick={()=>axios.post("/save", {params: {id: result.JvId}})}>Save</button></td> */}
//               <td><button data-id={result.JvId} onClick={()=>passData(result.JvId)}>Save</button></td>

//             </tr>
//           )
//         })}
//       </tbody>
//     </table>
//     </div>
//   )}
// };

// export default savedJobsTable;
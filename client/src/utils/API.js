import axios from "axios";
export default {
  // Gets CareerOneStop jobs
  getCareer: function (title) {
    return axios.get("/api/search/" + title);
  },
}
//   // Gets Github Career jobs
//   loadGitCareer: function () {
//     return axios.get("/api/searchGit/" + title);
//   }
// }
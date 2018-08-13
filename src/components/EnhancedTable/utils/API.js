import axios from "axios";

export default {
  // Gets CareerOneStop jobs
  loadCareer: function() {
    return axios.get("/api/search/:title");
  },}
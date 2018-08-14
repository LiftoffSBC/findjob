var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Create Job schema
var JobSchema = new Schema({
  // title is a required string
  jobtitle: {
    type: String,
    required: true,
    unique: true
  },
  // link is a required string
  url: {
    type: String,
    required: true
  },
  date: String,
  saved: {
    type: Boolean,
    default: false
  },
});

// Create the Job model with the JobSchema
var Job = mongoose.model("Job", JobSchema);

// Export the model
module.exports = Job;
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Create Job schema
var Userschema = new Schema({
  // title is a required string
  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  }
});

// Create the Job model with the JobSchema
var User = mongoose.model("User", Userschema);

// Export the model
module.exports = User;
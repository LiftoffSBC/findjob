var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Create Job schema
const Userschema = new Schema({
  // title is a required string
  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },
  savedJobs: [{
    type: Schema.Types.ObjectId,
    ref: "Jobs"
  }]
});

Userschema.methods.validPassword=function(pass){
    return (this.password === pass);
}

// Create the Job model with the JobSchema
const User = mongoose.model("User", Userschema);

// Export the model
module.exports = User;
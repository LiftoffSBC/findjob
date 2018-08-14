const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const request = require("request");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Use body parser with our app
app.use(bodyParser.urlencoded({
  extended: false
}));








app.get("/api/search/:title", (req, res) => {
  
  const options = {
    url: `https://api.careeronestop.org/v1/jobsearch/q2Tg69QZctxkreR/${req.params.title}/charlotte%2C%20nc/25/0/0/0/100/60`,
    headers: {
      "Authorization": "Bearer eSYovS0Vc2Nrqm7mTFo0ilggJpIwdYpjuysry3Ej/Wcxbykv3Bp6aG+AZE4VpOQad5fmn7t++cH6N4qrixfh2w=="
    }
  }
  request(options, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      res.json(JSON.parse(body));
      console.log(JSON.parse(body));
    } else {
      res.json({ error: err.message });
    }
  });
});
// Database configuration with mongoose
var databaseUri = "mongodb://localhost/jobdb";

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
}

var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection sucessful.");
});

//if set up routes:
// // Import routes and give the server access to them.
// var router = express.Router();

// // Require routes file pass router object
// require("./config/routes")(router);

// // Have every request go through router middlewar
// app.use(router);

// Send every request to the React app
// Define any API routes before this runs
app.get("*"), function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
};
app.get("/api/searchGit/:title", (req, res) => {
  
  const options = {
    url: `https://jobs.github.com/positions.json?description=${req.params.title}&page=1`
    }
  request(options, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      res.json(JSON.parse(body));
      console.log(JSON.parse(body));
    } else {
      res.json({ error: err.message });
    }
  });
});
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Send every request to the React app
// Define any API routes before this runs
app.get("*"), function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
};
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
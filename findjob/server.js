const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
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
      res.json(body);
      console.log(body);
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

db.on("error", function (error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function () {
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

app.get("/api/searchGit/:title", (req, res) => {

  const options = {
    url: `https://jobs.github.com/positions.json?description=${req.params.title}&page=1`
  }
  request(options, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      res.json(body);
      //***add db connection into here ***//
      console.log(body);
      module.exports = {
        findAll: function (req, res) {
          db.Job
            .find(req.query)
            .sort({ date: -1 })
            .then(dbJob => res.json(dbJob))
            .catch(err => res.status(422).json(err));
        },
        findById: function (req, res) {
          db.Job
            .findById(req.params.id)
            .then(dbJob => res.json(dbJob))
            .catch(err => res.status(422).json(err));
        },
        create: function (req, res) {
          const job = {
            jobtitle: req.body.JobTitle,
            companyname: req.body.Company,
            description: req.body.URL,
            date: req.body.AccquisitionDate
          };
          db.Job
            .create(job)
            .then(dbjob => res.json(dbjob))
            .catch(err => res.status(422).json(err));
        },
        update: function (req, res) {
          db.Job
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbjob => res.json(dbjob))
            .catch(err => res.status(422).json(err));
        },
        remove: function (req, res) {
          db.Job
            .findById({ _id: req.params.id })
            .then(dbjob => dbjob.remove())
            .then(dbjob => res.json(dbjob))
            .catch(err => res.status(422).json(err));
        }
      };
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
app.get("*"), function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
};
app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
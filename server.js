const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const request = require("request");

//correct server file

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

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*"), function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
};

server.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
res.sendFile(path.join(__dirname, "/public/upload.html")
);
app.post('/upload', function(req, res) {
 console.log(req.files);
})
var routes = require("/upload")
app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

// router.get('/'), function(req, res){
//   re.send('/')
// };
app.listen();
module.exports = app;



//keys
//careerOneStop userid and key
jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://uncc-cors-proxy.herokuapp.com/' + options.url;
    }
  });
  jQuery.ajaxSettings.traditional = true;
var uniqueUserId = "q2Tg69QZctxkreR"
var CareerOneStopKey = "eSYovS0Vc2Nrqm7mTFo0ilggJpIwdYpjuysry3Ej/Wcxbykv3Bp6aG+AZE4VpOQad5fmn7t++cH6N4qrixfh2w==";
//careerstop api
var searchURL = "https://api.careeronestop.org/v1/jobsearch/q2Tg69QZctxkreR/programmer/charlotte%2C%20nc/25/0/asc/0/10/30";
console.log(searchURL);
$.ajax({
    // Go get the job details

    url: searchURL,
    method: "GET"
}).done(function (response) {
    console.log(searchURL);
    var parsed = JSON.parse(response);
    var jobs = parsed.message.body.job_list
    console.log(JSON.stringify(jobs, null, 4, ));

});
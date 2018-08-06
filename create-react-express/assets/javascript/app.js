//keys
//careerOneStop userid and key
console.log("here");
var uniqueUserId="q2Tg69QZctxkreR"
var CareerOneStopkey="eSYovS0Vc2Nrqm7mTFo0ilggJpIwdYpjuysry3Ej/Wcxbykv3Bp6aG+AZE4VpOQad5fmn7t++cH6N4qrixfh2w=="
//careerstop api
var searchURL =
    "https://api.careeronestop.org/v1/jobsearch/{uniqueUserId}/{CareerOneStopkey}/{Charlotte, NC}/{50}/{0}/{Ascending}/{0}/{10}/{30}" 

    $.ajax({ 
        // Go get the job details
        
        url: searchURL + key,
        method: "GET"
      }).done(function (response) {
        console.log(searchURL);
        var parsed = JSON.parse(response);
        var jobs = parsed.message.body.job_list
        console.log(JSON.stringify(jobs, null, 4, ));
        
      });
     
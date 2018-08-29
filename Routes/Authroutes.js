const passport = require("passport");
//console.log("******");
module.exports = function(app){

     app.post('/login', passport.authenticate
     ('local', { successRedirect: '/',
      failureRedirect: '/login' }));
   
    app.get('/', function(req, res){
        console.log(req.body);
    })

    
}
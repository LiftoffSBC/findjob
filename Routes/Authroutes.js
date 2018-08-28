const passport = require("passport");
module.exports = function(app){

     app.post('/login', passport.authenticate
     ('local', { successRedirect: '/',
      failureRedirect: '/login' }));
   
    app.get('/', function(req, res){
        console.log(req.user)
    })
}
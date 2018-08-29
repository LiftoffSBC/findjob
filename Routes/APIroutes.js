const db=require("../models");
const mongoose = require("mongoose");
mongoose.Promise = Promise;

//console.log("******");
module.exports=function(app){
    app.post("/register", function(req, res){
        console.log(req.body);
        db.User.create(req.body).then(function(user){
            console.log(user);
            
        })
        
    })

    app.post("/save", function(req, res){
        db.User.findOneAndUpdate({email: req.user.email},{
            $push:{jobs:dbJob._id}},{new: true}).then(function(dbUser){res.json(dbUser)});
        
        })


}

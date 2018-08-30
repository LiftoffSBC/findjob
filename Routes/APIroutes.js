const db=require("../models");
const mongoose = require("mongoose");
const util = require("util");
mongoose.Promise = Promise;

//console.log("******");
module.exports=function(app){
    app.post("/register", function(req, res){
        console.log(req.body);
        console.log("***")
        db.User.create(req.body).then(function(user){
            console.log(user);
            
        })
        
    })

    app.post("/save", function(req, res){
        console.log(req.user);

        db.Jobs.find({jobID:req.body.id})
        .then(function(dbJob){
            console.log(dbJob + "***") 
            return db.User.findOneAndUpdate({email: req.user.email},{
                $push:{savedJobs:dbJob}},{new: true})
                .then(function(dbUser){console.log(dbUser)});
                }).catch(function(err){res.json(err)})
                
        })

    // app.get("/savedJobs", function(req, res){
    //     db.User.find({email:req.user.email}).populate("savedJobs").then(function(dbUser){
    //         return dbUser
    //     })
    // })
        

}

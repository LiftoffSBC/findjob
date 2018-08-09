var mongoose = require('mongoose');
var db = mongoose.connection.db;
var body = require('body-parser');
var fs = require ('fs');
var path = require("path");
var app = express();

exports.upload = function(req, res){
    upload(Req, res, function(err){
        console.log(req.body);
    });
};
var dirname = "/node/file/upload/uploads/";
var newPath = dirname + req.body.filename;
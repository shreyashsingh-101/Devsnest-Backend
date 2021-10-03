var mongoose = require("mongoose");

var mongodb = "mongodb+srv://rohit:rohit123@cluster0.ceea0.mongodb.net/wapp?retryWrites=true&w=majority";
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true }); //url management

var db = mongoose.connection;

db.on("error", console.error.bind(console, "Mongodb connection error"));
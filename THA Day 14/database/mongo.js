var mongoose = require('mongoose');


var mongoDB = 'mongodb+srv://rohit:rohit123@cluster0.ceea0.mongodb.net/wapp?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});


var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


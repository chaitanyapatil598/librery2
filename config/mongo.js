const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
var dbUrl = 'mongodb://localhost:27017/libraryDB' //'mongodb://localhost:27017/writeYourDbName'
mongoose.connect(dbUrl,{ useNewUrlParser: true, useUnifiedTopology: true });
// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open successful ');
});
// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});


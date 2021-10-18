const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
var dbUrl = 'mongodb://localhost:27017/libraryDB'
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
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
mongoose.connection.on("error", (err) => {
    if (err.message.indexOf("ECONNREFUSED") !== -1) {
        log.error("Error: The server was not able to reach MongoDB.\nMaybe it's not running?");
        process.exit(1);
    } else {
        throw err;
    }
});

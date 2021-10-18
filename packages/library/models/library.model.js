const mongoose = require('mongoose');  
const librarySchema = new mongoose.Schema({
    name: String,
    city: String,
    department : String,
    year:Number,
    isOpen:Boolean
});

const LibraryModel = mongoose.model("library", librarySchema);

module.exports = LibraryModel;

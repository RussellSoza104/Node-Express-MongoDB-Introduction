const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//News collection Schema 
const NewSchema = Schema({
    title: String,
    description :  String
});

module.exports = mongoose.model('news', NewSchema);
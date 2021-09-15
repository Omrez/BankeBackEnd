const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let serieSchema = new Schema({
    serieNr: {
        type: String
    }
   
}, {
    collection: 'serieNr'
})


module.exports = mongoose.model('SerieSchema', serieSchema)
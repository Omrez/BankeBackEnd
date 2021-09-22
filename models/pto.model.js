const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ptoSchema = new Schema({
    vognNr: {
        type: String,
        required: true
    },
    serieNr: {
        type: String,
        required: true
    },
    fejlName: {
        type: String,
        required: true
    },
    createdAt:{ type: Date, default: Date.now }
   
});


module.exports = mongoose.model('epto',ptoSchema)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ServiceSchema = new Schema({
    serviceProblem: {
        type: String,
        required: true
    },
    årsag: [{
        type: String,
        required: true
    }],
    løsning: [{
        type: String,
        required: true
    }],
    createdAt:{ type: Date, default: Date.now }
   
});


module.exports = mongoose.model('serviceproblem',ServiceSchema)
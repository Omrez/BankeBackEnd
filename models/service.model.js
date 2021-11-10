const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ServiceSchema = new Schema({
    serviceProblem: {
        type: String,
        required: true
    },
    causes:[{
        
        type: Schema.Types.ObjectId,
        ref: "cause"

    }],  
    solutions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "solution"
    }],
    createdAt:{ type: Date, default: Date.now },

}


);
module.exports = mongoose.model('serviceproblem',ServiceSchema)
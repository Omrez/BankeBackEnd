const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SolutionSchema = new Schema({
    name: [{type: String}],
    serviceType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "serviceproblem"
    }
}


);
module.exports = mongoose.model('solution',SolutionSchema)
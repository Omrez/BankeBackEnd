const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SolutionSchema = new Schema({
    name: {type: String}
}


);
module.exports = mongoose.model('solution',SolutionSchema)
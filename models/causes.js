const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CausesSchema = new Schema({
    name: {type: String}
}


);
module.exports = mongoose.model('cause',CausesSchema)
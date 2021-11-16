const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CausesSchema = new Schema({
    name: [{type: String}],
    serviceType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "serviceproblem"
    }


}

);


module.exports = mongoose.model('cause',CausesSchema)
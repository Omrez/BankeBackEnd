const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CausesSchema = new Schema({
    name: {type: String},
    id: {type: Number},
    createdAt:{ type: Date, default: Date.now },

}


);
ServiceSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

module.exports = mongoose.model('serviceproblem',ServiceSchema)
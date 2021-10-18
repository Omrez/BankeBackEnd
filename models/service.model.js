const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ServiceSchema = new Schema({
    serviceProblem: {
        type: String,
        required: true
    },
    causes:[{
        
    

    }],  
    solutions: [{
        type: String,
        required: true
    }],
    createdAt:{ type: Date, default: Date.now },

}


);
ServiceSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

module.exports = mongoose.model('serviceproblem',ServiceSchema)
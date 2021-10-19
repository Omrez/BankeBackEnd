const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role"
        }
      ],
    createdAt:{ type: Date, default: Date.now }
   
});


module.exports = mongoose.model('User',userSchema)
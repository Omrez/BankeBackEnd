const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ptoSchema = new Schema({
    fejlId: {
        type: Number,
        unique: true
    },
    vognNr: {
        type: String,
        required: true
    },
    serieNr: {
        type: Schema.Types.ObjectId,
        ref: "SerieSchema"
    },
    fejlName: {
        type: String
    },
    createdAt:{ type: Date, default: Date.now }
   
}, {
    collection: 'fejl'
})


module.exports = mongoose.model('PtoSchema', ptoSchema)
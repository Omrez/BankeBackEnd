const db = require("../models/service.model");
const ServiceSchema = require("../models/service.model");
const CausesSchema = require("../models/causes.model");

module.exports = {

    addCause: async (req, res, next) => {

        const newCause = new CausesSchema(req.body);
        const cause = await newCause.save();
        res.status(201).json(cause);
    },

    getCause: async (req, res, next) => {
        try{
            const id = req.params.id;
            const cause = await CausesSchema.findById(id);
            res.status(200).json(cause);
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    }









}
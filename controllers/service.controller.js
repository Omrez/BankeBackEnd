const db = require("../models/service.model");
const ServiceSchema = require("../models/service.model");
const CausesSchema = require("../models/causes.model");
const SolutionSchema = require("../models/solution.model");

module.exports = {

    addService: async (req, res, next) => {

        const newService = new ServiceSchema(req.body);
        const service = await newService.save();
        res.status(201).json(service);
    },

    getService: async (req, res, next) => {
       
        const id = req.params.id;
        const service = await ServiceSchema.findById(id);
        res.status(200).json(service);

        res.status(400).json({message: err.message});
      
    },

    getServiceCause: async (req, res, next) => {
        const id = req.params.id;
        const service = await ServiceSchema.findById(id);
        console.log("service", service);
    },

    addServiceCause: async (req, res, next) => {
      try {
        const id = req.params.id;
        const newCause = new CausesSchema(req.body);

        const service = await ServiceSchema.findById(id);

        newCause.serviceType = service;

        await newCause.save();

        service.causes.push(newCause._id);

        await service.save();
        res.status(201).json(newCause);
      } catch (err) {
          next(err);
      }
    },

    addServiceSolution: async (req, res, next) => {
    
        const id = req.params.id;
        const newSolution = new SolutionSchema(req.body);

        const service = await ServiceSchema.findById(id);

        newSolution.serviceType = service;

        await newSolution.save();

        service.solutions.push(newSolution._id);

        await service.save();
        res.status(201).json(newSolution);

    }










}
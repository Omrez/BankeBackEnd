const db = require("../models/service.model");
const ServiceSchema = require("../models/service.model");
const causeSchema = require("../models/causes.model");



  module.exports = {

    createService: async (req, res) => {
        const service = new ServiceSchema(req.body);

        service.save(service).then(data => {res.send(data)})
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the E-PTO."
            });
        });
        console.log(service);
        },

    getServices: async (req, res) => {
        await ServiceSchema.find({}).then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
            });
        });

        },

    getServiceId: async (req, res) => {
        const id = req.params.id;
        await ServiceSchema.findById(id).then(data => {
            if (!data)
              res.status(404).send({ message: "Not found E-PTO with id " + id });
            else res.send(data);
          })
          .catch(err => {
            res
              .status(500)
              .send({ message: "Error retrieving E-PTO with id=" + id });
          });
    },

    updateService: async (req, res) => {
        const id = req.params.id;

        await ServiceSchema.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update E-PTO with id=${id}. Maybe E-PTO was not found!`
            });
          } else res.send({ message: "E-PTO was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating E-PTO with id=" + id
          });
        });
    },

    deleteServiceId: async (req, res) => {
        const id = req.params.id;
        await ServiceSchema.findByIdAndDelete(id).then(data => {
            if (!data) {
              res.status(404).send({
                message: `Cannot delete Service with id=${id}. Maybe Service was not found!`
              });
            } else {
              res.send({
                message: "Service was deleted successfully!"
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete Service with id=" + id
            });
          });
    }


} // Module exports end ////
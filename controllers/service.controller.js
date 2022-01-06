const db = require("../models/service.model");
const ServiceSchema = require("../models/service.model");
const causeSchema = require("../models/causes.model");
const solutionSchema = require("../models/solution.model");



module.exports = {

    // Create service problem
    createService: async (req, res) => {
        const service = new ServiceSchema(req.body);

        service.save(service).then(data => {res.send(data)})
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the service problem."
            });
        });
        console.log(service);
    },

    // get all the service problem
    getServices: async (req, res) => {
        await ServiceSchema.find({})
        //.select("serviceProblem")
        .populate('solutions')
        .populate('causes')
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving service problem."
            });
        });

    },

    getCauses: async (req, res) => {
      await causeSchema.find({})
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
          message:
              err.message || "Some error occurred while retrieving service causes."
          });
      });
    },

    getSolutions: async (req, res) => {
      await solutionSchema.find({})
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
          message:
              err.message || "Some error occurred while retrieving service problem."
          });
      });
    },

    getCausesId: async (req, res) => {
      const id = req.params.id;
        await causeSchema.findById(id)
        //.select("name")
        //.populate('causes')
        .then(data => {
            if (!data)
              res.status(404).send({ message: "Not found cause with id " + id });
            else res.send(data);
          })
          .catch(err => {
            res
              .status(500)
              .send({ message: "Error retrieving cause with id=" + id });
          });
    },

    getSolutionId: async (req, res) => {
      const id = req.params.id;
        await solutionSchema.findById(id)
        //.select("name")
        //.populate('causes')
        .then(data => {
            if (!data)
              res.status(404).send({ message: "Not found solution with id " + id });
            else res.send(data);
          })
          .catch(err => {
            res
              .status(500)
              .send({ message: "Error retrieving solution with id=" + id });
          });

    },

    // get service problem by ID
    getServiceId: async (req, res) => {
        const id = req.params.id;
        await ServiceSchema.findById(id)
        //.select("name")
        .populate('causes')
        .then(data => {
            if (!data)
              res.status(404).send({ message: "Not found service problem with id " + id });
            else res.send(data);
          })
          .catch(err => {
            res
              .status(500)
              .send({ message: "Error retrieving service problem with id=" + id });
          });
    },

    // update cause by ID
    updateCause: async (req, res, next) => {
      const id = req.params.id;

      if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }

      await causeSchema.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update service problem with id=${id}. Maybe service problem was not found!`
          });
        } else res.send({ message: "service problem was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating service problem with id=" + id
        });
      });  
  },

  // update solution by ID
  updateSolution: async (req, res, next) => {
    const id = req.params.id;

    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }

    await solutionSchema.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update service problem with id=${id}. Maybe service problem was not found!`
        });
      } else res.send({ message: "service problem was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating service problem with id=" + id
      });
    });  
},

    // update service porblem by ID
    updateService: async (req, res, next) => {
        const id = req.params.id;

        if (!req.body) {
          return res.status(400).send({
            message: "Data to update can not be empty!"
          });
        }

        await ServiceSchema.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update service problem with id=${id}. Maybe service problem was not found!`
            });
          } else res.send({ message: "service problem was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating service problem with id=" + id
          });
        });  
    },

    // Delete service problem by ID
    deleteServiceId: async (req, res) => {
        const id = req.params.id;
        await ServiceSchema.findByIdAndDelete(id).then(data => {
            if (!data) {
              res.status(404).send({
                message: `Cannot delete service problem with id=${id}. Maybe service problem was not found!`
              });
            } else {
              res.send({
                message: "Service problem was deleted successfully!"
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete service problem with id=" + id
            });
          });
    },

    // add cause to service problem
    addCauseToService: async (req, res) => {
        const id = req.params.id;
        const newCause = new causeSchema(req.body);
        const service = await ServiceSchema.findById(id);
        newCause.serviceType = service;
        newCause.save();
        service.causes.push(newCause._id);
        service.save().then(data => {res.send(data)});
    },

    addSolutionToService: async (req, res) => {
        const id = req.params.id;
        const newSolution = new solutionSchema(req.body);
        const service = await ServiceSchema.findById(id);
        newSolution.serviceType = service;
        newSolution.save();
        service.solutions.push(newSolution._id);
        service.save().then(data => {res.send(data)});

    }



} // Module exports end ////
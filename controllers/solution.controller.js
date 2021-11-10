const db = require("../models/solution.model");
const solutionSchema = require("../models/solution.model");


exports.create = (req, res) => {
    
    // Create a Problem Service
    const solution = new solutionSchema({
      name: req.body.name,

    });
    console.log(solution);
    // Save Problem Service in the database
    solution
      .save(solution)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the E-PTO."
        });
      });

  }; // create end

  // Find all Problem Services
  exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    solutionSchema.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });

  }; //findall method end

   // Find Problem Service with an ID
   exports.findOne = (req, res) => {
    const id = req.params.id;
  
    solutionSchema.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found E-PTO with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving E-PTO with id=" + id });
      });
  }; //findOne method end

  // Update Problem Service with ID
  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    solutionSchema.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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
  };// Update method end



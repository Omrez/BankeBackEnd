const db = require("../models/pto.model");
const ptoSchema = require("../models/pto.model");


exports.create = (req, res) => {
    
   
    // Create an E-Pto
    const pto = new ptoSchema({
      vognNr: req.body.vognNr,
      serieNr: req.body.serieNr,
      fejlName: req.body.fejlName 
    });
    console.log(pto);
    // Save E-PTO in the database
    pto
      .save(pto)
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

  // Find all E-PTO
  exports.findAll = (req, res) => {
    const vognNr = req.query.vognNr;
    var condition = vognNr ? { vognNr: { $regex: new RegExp(vognNr), $options: "i" } } : {};
  
    ptoSchema.find(condition)
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

  // Find E-PTO with an ID
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    ptoSchema.findById(id)
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

  // Update E-PTO with ID
  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    ptoSchema.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

  // Delete E-PTO with ID
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    ptoSchema.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete E-PTO with id=${id}. Maybe E-PTO was not found!`
          });
        } else {
          res.send({
            message: "E-PTO was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete E-PTO with id=" + id
        });
      });
  }; // Delete method end

  // Delete all E-PTO
  exports.deleteAll = (req, res) => {
    ptoSchema.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} All E-PTO were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all E-PTO."
        });
      });
  };

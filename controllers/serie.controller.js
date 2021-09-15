const db = require("../models/serie.model");
const serieSchema = require("../models/serie.model");


exports.create = (req, res) => {
    
   
  
    // Create an E-Pto
    const serie = new serieSchema({
      serieNr: req.body.serieNr
    });
    console.log(serie);
    // Save E-PTO in the database
    serie
      .save(serie)
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


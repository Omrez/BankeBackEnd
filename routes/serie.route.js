module.exports = app => {
    const serie = require("../controllers/serie.controller.js");
  
    var router = require("express").Router();
  
    // Create a new E-PTO
    router.post("/", serie.create);
  /*
    // Retrieve all E-PTO
    router.get("/", pto.findAll);
 
    // Retrieve a single E-PTO with id
    router.get("/:id", pto.findOne);
   
    // Update a E-PTO with id
    router.put("/:id", pto.update);
  
    // Delete a E-PTO with id
    router.delete("/:id", pto.delete);
  
    // Delete all E-PTO
    router.delete("/", pto.deleteAll);
  */
    app.use('/serie', router);
  };
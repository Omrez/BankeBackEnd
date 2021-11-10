module.exports = app => {
    const solution = require("../controllers/solution.controller.js");
  
    var router = require("express").Router();
  
    // Create a new E-PTO
    router.post("/", solution.create);
  
    // Retrieve all E-PTO
    router.get("/", solution.findAll);
 
    // Retrieve a single E-PTO with id
    router.get("/:id", solution.findOne);
   
    // Update a E-PTO with id
    router.put("/:id", solution.update);
  /*
    // Delete a E-PTO with id
    router.delete("/:id", service.delete);
  
    // Delete all E-PTO
    router.delete("/", service.deleteAll);
  */
    app.use('/solution', router);
  };
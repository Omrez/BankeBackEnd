module.exports = app => {
    const service = require("../controllers/service.controller.js");
  
    var router = require("express").Router();
  
    // Create a new E-PTO
    router.post("/service", service.addService);

    router.get("/service/:id", service.getService);

    router.get("/service/:id/causes", service.getServiceCause);
    router.post("/service/:id/causes", service.addServiceCause);

    router.post("/service/:id/solutions", service.addServiceSolution);

    //router.post("/cause", service.createCause);
  
   /* // Retrieve all E-PTO
    router.get("/", service.findAll);
 
    // Retrieve a single E-PTO with id
    router.get("/:id", service.findOne);
   
    // Update a E-PTO with id
    router.put("/:id", service.update);
  
    // Delete a E-PTO with id
    router.delete("/:id", service.delete);
  
    // Delete all E-PTO
    router.delete("/", service.deleteAll);
  */
    app.use(router);
  };
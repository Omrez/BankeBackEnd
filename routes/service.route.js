module.exports = app => {
    const service = require("../controllers/service.controller.js");
  
    var router = require("express").Router();
  
    // Create a new E-PTO
    router.post("/service", service.createService);
  
    // Retrieve all E-PTO
    router.get("/service", service.getServices);
 
    // Retrieve a single E-PTO with id
    router.get("/service/:id", service.getServiceId);
   
    // Update a E-PTO with id
    router.put("/service/:id", service.updateService);
  
    // Delete a E-PTO with id
    router.delete("/service/:id", service.deleteServiceId);

    //
    router.post('/service/:id/cause', service.addCauseToService);

    router.post('/service/:id/solution', service.addSolutionToService)
  /*
    // Delete all E-PTO
    router.delete("/", service.deleteAll);*/
  
    app.use( router);
  };
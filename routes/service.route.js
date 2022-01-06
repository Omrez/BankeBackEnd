module.exports = app => {
    const service = require("../controllers/service.controller.js");
  
    var router = require("express").Router();
  
    // Create a new E-PTO
    router.post("/service", service.createService);
  
    // Retrieve all E-PTO
    router.get("/service", service.getServices);

    // Retrieve all causes
    router.get("/causes", service.getCauses);

    // Retrieve all solutions
    router.get("/solutions", service.getSolutions);

    // Retrieve a single cause with id
    router.get("/causes/:id", service.getCausesId);

    // Retrieve a single solution with id
    router.get("/solutions/:id", service.getSolutionId);
 
    // Retrieve a single E-PTO with id
    router.get("/service/:id", service.getServiceId);

     // Update cause with id
     router.put("/causes/:id", service.updateCause);

     // Update solution with id
     router.put("/solutions/:id", service.updateSolution);
   
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
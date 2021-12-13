module.exports = app => {
    const tests = require("../controllers/test.controller.js");
  
    const router = require("express").Router();
  
    // Create
    router.post("/", tests.create);
  
    // findAll
    router.get("/", tests.findAll);
  
    // findAllPublished
    router.get("/published", tests.findAllPublished);
  
    // findOne id
    router.get("/:id", tests.findOne);
  
    // Update
    router.put("/:id", tests.update);
  
    // Delete
    router.delete("/:id", tests.delete);
  
    // DeleteAll
    router.delete("/", tests.deleteAll);
  
    app.use('/api/tests', router);
  };
  
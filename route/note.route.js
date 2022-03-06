module.exports = (app) => {
  const noteController = require("../controllers/note.controller");

  //__Route for Create Note__//
  app.post("/notes", noteController.create);

  //__Route for Retrieve All Note__//
  app.get("/notes", noteController.findAll);

  //__Route for Retrieve an Single Note based on Id__//
  app.get("/notes/:noteId", noteController.findOne);

  //__Route for Update an Single Note based on Id__//
  app.put("/notes/:noteId", noteController.update);

  //__Route for Update an Single Note based on Id__//
  app.delete("/notes/:noteId", noteController.delete);
};

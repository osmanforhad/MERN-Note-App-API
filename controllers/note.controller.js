const NoteModel = require("../models/note.model");

//__Method for Create and Save a New Note__//
exports.create = (request, response) => {
  console.log("Method for Create New Note");
};

//__Retrieve and return all notes from the Database__//
exports.findAll = (request, response) => {
  console.log("Method for Show Note List");
};

//__Find a Single Note with a noteId__//
exports.findOne = (request, response) => {
  console.log("Method for Show an Single Note Based on ID");
};

//__Update a Single Note Which Identified with a noteId__//
exports.update = (request, response) => {
  console.log("Method for Update an Single Note Based on ID");
};

//__Delete a Single Note Which Identified with a noteId__//
exports.delete = (request, response) => {
  console.log("Method for Delete an Single Note Based on ID");
};

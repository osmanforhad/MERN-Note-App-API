const noteModel = require("../models/note.model");
const NoteModel = require("../models/note.model");

//__Method for Create and Save a New Note__//
exports.create = (request, response) => {
  //Validate Request
  if (!request.body.content) {
    return request.response.status(400).send({
      message: "Note content can't be empty",
    });
  }
  //Create a Note
  const note = new NoteModel({
    title: request.body.title || "Untitled Notes",
    content: request.body.content,
  });
  //Save Note into the Database
  note
    .save()
    .then((data) => {
      response.send(data);
    })
    .catch((error) => {
      response.status(500).send({
        message: error.message || "Some error occurred while creating a note",
      });
    });
};

//__Retrieve and return all notes from the Database__//
exports.findAll = (request, response) => {
  noteModel
    .find()
    .then((notes) => {
      response.send(notes);
    })
    .catch((error) => {
      response.status(500).send({
        message: error.message || "Some error occurred while retrieving notes",
      });
    });
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

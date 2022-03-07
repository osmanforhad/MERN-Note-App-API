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
  NoteModel.find()
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
  NoteModel.findById(request.params.noteId)
    .then((note) => {
      if (!note) {
        return response.status(404).send({
          message: "Note not found with this ID " + request.params.noteId,
        });
      }
      response.send(note);
    })
    .catch((error) => {
      if (error.kind === "ObjectId") {
        return response.status(404).send({
          message: "Note not found with this ID " + request.params.noteId,
        });
      }
      return response.status(500).send({
        message: "Error retrieving note with id " + request.params.noteId,
      });
    });
};

//__Update a Single Note Which Identified with a noteId__//
exports.update = (request, response) => {
  //Validate Request
  if (!request.body.content) {
    return response.status(400).send({
      message: "Note content can not be empty",
    });
  }
  //find note based on requested ID and update with the request body(input)
  NoteModel.findByIdAndUpdate(
    request.params.noteId,
    {
      title: request.body.title || "Untitled Note",
      content: request.body.content,
    },
    { new: true }
  )
    .then((note) => {
      if (!note) {
        return response.status(404).send({
          message: "Note not found with this id " + request.params.noteId,
        });
      }
      response.send(note);
    })
    .catch((error) => {
      if (error.kind === "ObjectId") {
        return response.status(404).send({
          message: "Note not found with this id " + request.params.noteId,
        });
      }
      return response.status(500).send({
        message: "Error Updating note with id " + request.params.noteId,
      });
    });
};

//__Delete a Single Note Which Identified with a noteId__//
exports.delete = (request, response) => {
  NoteModel.findByIdAndRemove(request.params.noteId)
    .then((note) => {
      if (!note) {
        return response.status(400).send({
          message: "Note not found with this id " + request.params.noteId,
        });
      }
      response.send({ message: "Note deleted successfully" });
    })
    .catch((error) => {
      if (error.kind === "ObjectId" || error.name === "NotFound") {
        return response.status(404).send({
          message: "Note not found with this id " + request.params.noteId,
        });
      }
      return response.status(500).send({
        message: "Could not delete note with this id " + request.params.noteId,
      });
    });
};

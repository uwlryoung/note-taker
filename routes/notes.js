const notes = require('express').Router;
const { readFile } = require("fs").promises;

// const {
//   readFromFile,
//   readAndAppend,
//   writeToFile,
// } = require('../helpers/fsUtils');


// Make a get, post and a delete here

// GET Route for retreiving all notes
notes.get('/', (req, res) => {
  readFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


// notes.get('/', (req, res) => {
//   readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
// });

// GET Route for a specific note
// notes.get('/:')


// everything with /api/notes needs to be done here
// (e.g., posts/gets from server)
// look at the fetch requests in index
// 

module.exports = notes;


const notes = require('express').Router;
const { readFile, writeFile } = require("fs").promises;
const { v4: uuidv4 } = require('uuid');

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

// GET Route for a specific note
notes.get('/:')


// notes.get('/', (req, res) => {
//   readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
// });

// GET Route for a specific note
// notes.get('/:')


// everything with /api/notes needs to be done here
// (e.g., posts/gets from server)
// look at the fetch requests in index
// 

// POST Route for a new note
notes.post('/', (req, res) => {
  console.log(req.body);

  const { username, topic, note} = req.body;

  if (req.body) {
    const newNote = {
      username,
      tip,
      topic,
      note_id: uuidv4(),
    }
    readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        writeFile('/db/db.json', parsedData);
      }
    });
  } else {
    res.error('Error in adding note');
  }
})

module.exports = notes;


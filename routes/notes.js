const notes = require('express').Router;
const { readFile, writeFile } = require("fs").promises;
const { v4: uuidv4 } = require('uuid');

// GET Route for retreiving all notes
notes.get('/', (req, res) => {
  readFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// GET Route for a specific note
notes.get('/:note_id', (req, res) => {
  const noteId = req.params.note_id;
  readFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.note_id === noteId);
      return result.length > 0
        ? res.json(result)
        : res.json('No note with that ID');
    })
})

// DELETE Route for a specific note
notes.delete('/:note_id', (req, res) => {
  const noteId = req.params.note_id;
  readFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.note_id !== noteId); 
      writeFile('./db/db.json', result);
      res.json(`Note ${noteId} has been deleted.`)
    });
})

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


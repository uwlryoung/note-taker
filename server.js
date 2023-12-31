const express = require('express');
const path = require('path');
const api = require('./routes/index')

const PORT = process.env.PORT || 3001

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static('public'));

// GET Routes
// Landing Page
app.get('/', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/pages/index.html'))
);

// Notes Page
app.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, 'public/pages/notes.html'))
);

// Wildcard - Redirects users to the index/start landing page if the link isn't found.
app.get('*', (req, res) => 
  res.sendFile(path.join(__dirname, 'public/pages/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

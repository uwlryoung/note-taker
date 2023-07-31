const router = require('express').Router();
const noteRoutes = require('./notes.js');

router.use('/notes', noteRoutes);

module.exports = router;


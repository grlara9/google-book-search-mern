const express = require('express')

const booksControllers= require('../controllers/books.controllers')

const router = express.Router();

router.get('/books', booksControllers.getBooks);

module.exports = router;
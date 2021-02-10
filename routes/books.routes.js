const express = require('express')

const booksControllers= require('../controllers/books.controllers')

const router = express.Router();

router.get('/books', booksControllers.getBooks);

router.delete('/books/:id', booksControllers.deleteBook)
module.exports = router;
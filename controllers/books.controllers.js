var express = require('express');
var router = express.Router();
var Book = require("../models/books");

router.get("/books", (req, res)=>{
    Book.find()
    .then(promise => res.json(promise))
    .catch(err=> res.status(400).json("Error: "+ err))
})

router.post("/books", (req, res)=>{
    const {title, authors, description, image, link} = req.body
    const newBook = new Book({
        title,
        authors,
        description,
        image,
        link
    })
    newBook.save()
    .then(()=> res.json("Book Added "))
    .catch(err=> res.status(400).json("Error: " + err))
})


module.exports = router
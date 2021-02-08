var express = require('express');
var router = express.Router();
var Book = require("../models/books");

router.get("/books", (req, res)=>{
    Book.find()
    .then(promise => res.json(promise))
    .catch(err=> res.status(400).json("Error: "+ err))
})

const getBooks = async (req, res, next)=>{
    
}
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

router.delete("/books/:id", (req, res)=>{
    Book.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Book Deleted"))
    .catch(err=>res.status(400).json("Error: " + err))
})

module.exports = router

var Book = require("../models/books");

const getBooks = (req, res) =>{
    Book.find()
    .then(promise =>{
        console.log("aver que sale: " + promise);
        res.json(promise)
    })
    .catch(err=> res.status(400).json("Error: "+ err))
}



exports.getBooks= getBooks;
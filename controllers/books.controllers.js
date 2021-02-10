
var Book = require("../models/books");

const getBooks = (req, res) =>{
    Book.find()
    .then(promise =>{
        console.log("aver que sale: " + promise);
        res.json(promise)
    })
    .catch(err=> res.status(400).json("Error: "+ err))
}

const deleteBook = (req, res)=>{
    Book.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Book Deleted"))
    .catch(err=>res.status(400).json("Error: " + err))
}

exports.getBooks= getBooks;
exports.deleteBook= deleteBook;
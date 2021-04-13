
const { response } = require("express");
const Book = require("../models/books");

const getBooks = (req, res) =>{
    Book.find()
    .then(promise =>{
        console.log("aver que sale: " + promise);
        res.json(promise)
    })
    .catch(err=> res.status(400).json("Error: "+ err))
}
 
const newBook = (req, res) =>{
    const {title, authors, description, image, link} = req.body

 
    Book.create( {
        title,
        authors,
        description,
        image,
        link
    })
        
    
    .then(()=> res.json("Book Added "))
    .catch(err=> res.status(400).json("Error: " + err))
}

const deleteBook = (req, res)=>{
    Book.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Book Deleted"))
    .catch(err=>res.status(400).json("Error: " + err))
}

exports.getBooks= getBooks;
exports.newBook= newBook;
exports.deleteBook= deleteBook;
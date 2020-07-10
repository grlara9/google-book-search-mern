const moongoose= require('mongoose');
const Schema = moongoose.Schema;

const BookSchema = new Schema({
title:{type:String },
authors:{type:String},
description:{type:String},
image: {type: String},
link:{type:String}
})

const Book = moongoose.model('Book', BookSchema);
module.exports = Book
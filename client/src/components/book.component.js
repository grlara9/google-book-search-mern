import React, { Component} from 'react'
import BookList from './booklist.component'

const Books= (props)=>{
   return props.books.map(book=>(
       <div className="container">
           <BookList 
                            key={book.id}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            published={book.volumeInfo.publishedDate}
                            preview={book.volumeInfo.infoLink}
                            image={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : "#"}
                      

                       />
       </div>
   ))
   }
export default Books
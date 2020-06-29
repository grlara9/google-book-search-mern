import React, { Component } from 'react'
import BookList from './booklist.component'


class Books extends Component {
    showBooks = () => {
        const book = this.props.books;

        if(book.length === 0) return null;

        console.log(book)

        return (
            <React.Fragment>
                Results: 
                <div className="col-12 p-5 row">
                    
                   { 
                    book.map((books) => (
                       <BookList 
                            key={books.id}
                            image={books.volumeInfo.imageLinks.thumbnail}
                            title={books.volumeInfo.title}
                            author={books.volumeInfo.authors}
                            published={books.volumeInfo.publishedDate}
                            preview={books.volumeInfo.infoLink}
                       />
                   ))}
                </div>
            </React.Fragment>
        )
    } 
    
    render() {
        return (
            <React.Fragment>
                { this.showBooks()}
            </React.Fragment>
        )
    }
}

export default Books
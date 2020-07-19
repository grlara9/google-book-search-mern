import React from "react";
import BookList from './booklist.component'

const SearchResult = props => {
    return (props.books.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Search Results</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h3>Search Results</h3>
                        {props.books.map(book => {
                            return (
                                <div>
                                <BookList 
                                 key={book.id}
                                 title={book.volumeInfo.title}
                                 author={book.volumeInfo.authors}
                                 published={book.volumeInfo.publishedDate}
                                 description={book.volumeInfo.description}
                                 preview={book.volumeInfo.infoLink}
                                 image={book.volumeInfo.imageLinks === undefined? "": `${book.volumeInfo.imageLinks.thumbnail}`}
                                 handleSavedButton={props.handleSavedButton}
                                 />
                                 </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
}
export default SearchResult
import React from "react";
import BookList from './booklist.component'

const SearchResult = props => {

    const { saveBook } = props;
   

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
                                 image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg"}
                                 saveBook={saveBook}
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
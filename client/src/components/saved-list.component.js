import React, { Component } from 'react'

const SavedList = props => {
    if (props.savedbooks.length === 0) {
        return (
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h2 style={{textAlign: "center"}}>No saved books found.</h2>
                    </div>
                </div>
            </div>
        );
    }
        return (
            <div className="card">
                {props.savedbooks.map(book => {
                    return (
                        <div> 
                            <div className="row">
                                <div className="column1">
                                    <div className="header">
                                        <h2>Title: {book.title}</h2>
                                        <p >Author: {book.author}</p>
                                    </div>
                                </div>
                                    <div className="column2">
                                        <div className="child-col">
                                            <a href={book.preview}><button type="button" className="btn btn-info">View</button></a>
                                            <button className="deleteBook btn btn-danger" id={book._id} onClick={() => props.DeleteButton(book._id)}>Delete Book</button>
                                        </div>
                                    </div>
                                </div>  

                            <div className="row">
                                <div className="column1">
                                    <div className="photo">
                                        <img src={book.image}  className="img" alt="text"  />
                                    </div>
                                </div>
                            <div className="column2">
                                <div className="content">
                                    <p>Published Date: {book.published}</p>
                                    <p className="card-text">Description: {book.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );                
            })} 
        </div>  
    )
} 
export default SavedList
import React from 'react'
import axios from 'axios'


function BookList(props)  {

  return( 
       
            <div className="book-container">
                <div className="row">
                    <div className="title-author">
                        <p className="card-text">Title: {props.title}</p>
                        <p className="card-text">Author: {props.author}</p>
                    </div>
                    <div className="buttons-div">
                        <button type="button" className="btn btn-info"><a href={props.preview}>View</a></button>
                        <button className="saveBook btn btn-primary" id={props.key} onClick={(event) => props.handleSavedButton(event)}>Save Book</button>
                    </div>
               </div>

               <div className="row">
                    <img src={props.image}  alt="text" className="card-img-top" />
                    <p className="card-text">Published Date: {props.published}</p>
                    <p className="card-text">Description: {props.description}</p>
               </div>
            </div>
       
    )

}
export default BookList


import React from 'react'



function BookList(props) {
    return( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
            <div className="card">
                <img src={props.image} alt="text" className="card-img-top" />
                  <p className="card-text">Title: {props.title}</p>
                  <p className="card-text">Author: {props.author}</p>
                  <p className="card-text">Published Date: {props.published}</p>
                  <button className="btn btn-primary" id={props.id} onClick={(e) => this.handleSavedButton(e)}>Save Book</button>
                  <button type="button" className="btn btn-info"><a href={props.preview}>View</a></button>
            </div>
        </div>
    )
}
export default BookList
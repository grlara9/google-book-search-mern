import React from 'react'
import axios from 'axios'


function BookList(props)  {

  return( 
       
            <div className="card">
                <div className="row">
                    <div className="column">
                        <div className="header">
                            <p className="card-text">Title: {props.title}</p>
                            <p className="card-text">Author: {props.author}</p>
                        </div>
                    </div>
                    <div className="column">
                        <button type="button" className="btn btn-info"><a href={props.preview}>View</a></button>
                        <button className="saveBook btn btn-primary" id={props.key} onClick={(event) => props.handleSavedButton(event)}>Save Book</button>
                    </div>
                  </div>  
                  
            <div className="row">
                <div className="column">
                    <div className="photo">
                        <img src={props.image}  className="img" alt="text"  />
                    </div>
                </div>

                <div className="column">
                    <div className="content">
                        <p className="card-text">Published Date: {props.published}</p>
                        <p className="card-text">Description: {props.description}</p>
                    </div>
                </div>
            </div>
                </div>                    
            
       
    )

}
export default BookList


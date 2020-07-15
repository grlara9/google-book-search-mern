import React from 'react'
import axios from 'axios'


function BookList(props)  {

  return( 
       
            <div className="card">
                <div className="row">
                    <div className="column1">
                        <div className="header">
                            <h2>Title: {props.title}</h2>
                            <p >Author: {props.author}</p>
                        </div>
                    </div>
                    <div className="column2">
                        <button type="button" className="btn btn-info"><a href={props.preview}>View</a></button>
                        <button className="saveBook btn btn-primary" id={props.key} onClick={(event) => props.handleSavedButton(event)}>Save Book</button>
                    </div>
                  </div>  

            <div className="row">
                <div className="column1">
                    <div className="photo">
                        <img src={props.image}  className="img" alt="text"  />
                    </div>
                </div>

                <div className="column2">
                    <div className="content">
                        <p>Published Date: {props.published}</p>
                        <p>Description: {props.description}</p>
                    </div>
                </div>
            </div>
                </div>                    
            
       
    )

}
export default BookList


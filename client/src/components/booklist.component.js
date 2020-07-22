import React from 'react'


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
                        <a href={props.preview}><button type="button" className="view-button">View</button></a>
                        <button className="save-button" id={props.key} onClick={(event) => props.handleSavedButton(event)}>Save Book</button>
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
                        <p className="card-text">Description: {props.description}</p>
                    </div>
                </div>
            </div>
                </div>                    
            
       
    )

}
export default BookList


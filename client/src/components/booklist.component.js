import React from 'react'


const BookList = props =>  {

    const { saveBook } = props;
    
    
  return( 
       
            <div className="card">
                <div className="row">
                    <div className="column1">
                        <div className="header" key={props.id}>
                            
                            <h2>Title: {props.title}</h2>
                            <p >Author: {props.author}</p>
                        </div>
                    </div>
                    <div className="column2">
                        <div className="child-col">
                            <a href={props.preview}><button type="button" className="view-button">View</button></a>
                            <button className="save-button" id={props.key} onClick={() => saveBook(props)} >Save Book</button>
                        </div>
                    </div>
                  </div>  

            <div className="row">
                <div className="column1">
                    <div className="photo">
                        <img src={props.image}  className="img" alt="text"  />
                    </div>
                    <p>Published Date: {props.published}</p>
                </div>

                <div className="column2">
                    <div className="content">
                        <p className="card-text">Description: {props.description}</p>
                    </div>
                </div>
            </div> 
                </div>                    
            
       
    )

}
export default BookList


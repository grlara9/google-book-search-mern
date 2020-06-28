import React, { Component } from 'react'


 const Search = ()=> {
    return (
        <form onSubmit={(e) => {props.onSubmit(e)}}> 
            <div className="row">

            <div className="form-group col-md-8">

            <input  type="text" 
            name="book"
            onChange={(e)=> {props.onChange(e.target.value)}}
            className="form-control form-control-lg" 
            placeholder="Search for Book..."/>
            </div>
            <div className="form-group col-md-4">

            <button type="submit" className="btn btn-primary btn-lg btn-block">Search..</button>
            </div>
            </div>
        </form>
        
        )
    
}
export default Search
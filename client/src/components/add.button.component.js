
import React, { Component } from 'react'
import axios from 'axios'

class AddButton extends Component{
    handleSaveClick = (book) => {
        var add = {
            title:book.title,
            author:book.author,
            description:book.description,
            image: book.image,
            link:book.link
        }
      
        axios.post("http://localhost:5000/api/books", add)
          .then(() => {console.log("Added")})
          .catch(err => console.log(err));
        }

    render(){
        return(
            <div>
          <button type="primary" onClick={() => {this.handleSaveClick(this.props)}}>
            Save Book
        </button>
        </div>
        )
    }
}
export default AddButton
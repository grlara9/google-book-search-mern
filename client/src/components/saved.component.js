import React, { Component } from 'react'
import axios from 'axios'
import SavedList from './saved-list.component';
export default class Saved extends Component {
    constructor(props){
        super(props);
        this.state ={
            savedbooks: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/api/books')
        .then(response => this.setState({ savedbooks: response.data }))
        .catch(err => console.log(err))
    }

    //function to remove book by id
    DeleteButton = (id) => {
        axios.delete('http://localhost:5000/api/books/'+id)
            .then(response => this.componentDidMount())
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <SavedList savedbooks={this.state.savedbooks} DeleteButton={this.DeleteButton}/>
            </div>
        )
    }
}

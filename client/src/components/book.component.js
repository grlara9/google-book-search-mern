import React, { Component} from 'react'
import BookList from './booklist.component'

export function Books({children}) {
    return (
      <ul className="list-group">{children}</ul>
      );
  }
  
export default Books
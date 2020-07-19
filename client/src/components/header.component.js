import React from 'react'
import { Link } from 'react-router-dom'
 

export default function Header(props) {
    return (  
        <nav className="navbar navbar-expand-lg navbar-primary">
            <Link to ="/"className="navbar-brand">
                <h2 className="text-white">Google Book Search</h2>
            </Link>

        
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <Link to="/" className="nav-link" >Search Books</Link>
                    </li>
                    <li className="nav-item" id="report">
                        <Link to="/saved" className="nav-link">Saved Books</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
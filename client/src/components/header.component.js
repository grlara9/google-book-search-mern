import React from 'react'
import { Link, withRouter } from 'react-router-dom'
 

export default function Header(props) {
    return (  
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
            <Link to ="/search"className="navbar-brand">
                <h2 className="text-white">Google Book Search</h2>
            </Link>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <Link to="/" className="nav-link" ><button type="button" className="btn btn-info text-white">Search Books</button></Link>
                    </li>
                    <li className="nav-item" id="report">
                        <Link to="/saved" className="nav-link"><button type="button" className="btn btn-warning text-white">Saved Books</button></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
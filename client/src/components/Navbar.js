import React from 'react'
import { Link,NavLink, withRouter } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <Link className="brand-logo">Ellectify</Link>
                <ul className="right">
                <li><NavLink to="/BlockApp">BlockApp</NavLink></li>
                    {/* <li><NavLink to="/Home">Home</NavLink></li>
                    <li><NavLink to="About">Vote</NavLink></li>
                    <li><NavLink to="/Contact">Party List</NavLink></li> */}
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);
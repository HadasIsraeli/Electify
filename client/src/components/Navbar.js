import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <Link className="brand-logo" to="/Home">Electify</Link>
                <ul className="right">
                    {/* <li><NavLink to="/Home">Home</NavLink></li>
                    <li><NavLink to="About">Vote</NavLink></li> */}
                    <li><NavLink to="/Contact">Party List</NavLink></li>
                    <li><NavLink to='/conduct-transaction'>Vote</NavLink></li>
                    <li><NavLink to='/transaction-pool'>Vote Submitted</NavLink></li>
                    <li><NavLink to="/BlockApp">Blockchain</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);
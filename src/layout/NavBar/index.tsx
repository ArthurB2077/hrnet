import React from "react"
import { Link } from "react-router-dom"

const NavBar: React.FC = (): JSX.Element => {
    return(
        <nav className="navbar">
            <Link to="/" className="navbar-title">HRNet</Link>
            <Link to="/add-employee" className="navbar-link">Add new employee</Link>
            <Link to="/employees" className="navbar-link">Employees</Link>
        </nav>
    )
}

export default NavBar
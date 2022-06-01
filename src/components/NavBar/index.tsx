import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = (): JSX.Element => {
    return(
        <nav className="navbar">
            <h1 className="navbar-title">HRNet</h1>
            <Link to="#" className="navbar-link">Add new employee</Link>
            <Link to="#" className="navbar-link">Employees</Link>
        </nav>
    )
};

export default NavBar;
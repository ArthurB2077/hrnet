import React from "react"
import { Link } from "react-router-dom"

interface Props {
    title: string,
    description: string,
    svg: Function,
    link: {
        to: string,
        text: string,
    }
}

const NavPanel: React.FC<Props> = ({ title, description, svg , link }): JSX.Element => {
    return(
        <div className="nav-panel">
            <h3 className="nav-panel-title">{title}</h3>
            <p className="nav-panel-description">{description}</p>
            <div className="nav-panel-svg-container">
                {svg("nav-panel-svg")}
            </div>
            <div className="nav-panel-link-container">
                <Link to={link.to} className="nav-panel-link">{link.text}</Link>
            </div>
        </div>
    )
}

export default NavPanel
import React from "react"
import NavPanel from "../NavPanel"
import { renderAddEmployeeSVG, renderViewEmployeesSVG } from "../../medias/svg/svgsExport"

const NavPanelMenu: React.FC = (): JSX.Element => {

    return(
        <div className="nav-panel-menu">
            <NavPanel 
                title="Add employee"
                description="Here you can add a new employee to the current list of all employee"
                svg={renderAddEmployeeSVG}
                link={{
                    to: "/add-employee",
                    text: "Add employee"
                }}
            />
            <NavPanel 
                title="View employees"
                description="Here you can view the list of all the current employees registered"
                svg={renderViewEmployeesSVG}
                link={{
                    to: "/employees",
                    text: "View employees"
                }}
            />
        </div>
    )
}

export default NavPanelMenu
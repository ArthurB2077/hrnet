import React from "react"
import NewEmployeeForm from "../../components/NewEmployeeForm"


const NewEmployee: React.FC = () => {


    return (
        <main className="new-employee">
            <section className="new-employee-form-section">
                <NewEmployeeForm/>
            </section>
        </main>
    )
}

export default NewEmployee
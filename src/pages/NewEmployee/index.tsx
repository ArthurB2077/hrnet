import React from "react"

const NewEmployee: React.FC = () => {

    return (
        <main className="new-employee">
            <section className="new-employee-form-section">
                <h1 className="create-employee-form-header">Add new employee</h1>
                <form className="create-employee-form" onSubmit={(e) => console.log(e)}>
                    <div className="create-employee-form-input">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" id="firstName" />
                    </div>
                    <div className="create-employee-form-input">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" id="lastName" />
                    </div>
                    <div className="create-employee-form-input">
                        <label htmlFor="dateOfBirth">Date of birth</label>
                        <input type="date" id="dateOfBirth" />
                    </div>
                    <div className="create-employee-form-input">
                        <label htmlFor="startDate">Start date</label>
                        <input type="date" id="startDate" />
                    </div>
                    <div className="create-employee-form-input-group">
                        <span className="create-employee-form-input-group__title">Adress</span>
                        <div className="create-employee-form-input">
                            <label htmlFor="street">Street</label>
                            <input type="text" id="street" />
                        </div>
                        <div className="create-employee-form-input">
                            <label htmlFor="city">City</label>
                            <input type="text" id="city" />
                        </div>
                        <div className="create-employee-form-input">
                            <label htmlFor="state">State</label>
                            <select id="state">
                                <option value="1">Alabama</option>
                                <option value="2">Oklahoma</option>
                                <option value="3">California</option>
                                <option value="4">New York</option>
                            </select>
                        </div>
                        <div className="create-employee-form-input">
                            <label htmlFor="zipCode">Zip Code</label>
                            <input type="text" id="zipCode" />
                        </div>
                    </div>
                    <div className="create-employee-form-input">
                        <label htmlFor="department">Department</label>
                        <select id="department">
                            <option value="1">IT</option>
                            <option value="2">HR</option>
                            <option value="3">Sales</option>
                            <option value="4">Marketing</option>
                        </select>
                    </div>
                    <div className="create-employee-form-input-button">
                    <button className="create-employee-form-button" type="submit">Save</button>

                    </div>
                </form>
            </section>
        </main>
    )
}

export default NewEmployee
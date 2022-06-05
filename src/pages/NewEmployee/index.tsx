import React, { useRef } from "react"
import { useDispatch } from "react-redux";


const NewEmployee: React.FC = () => {
    const dispatch = useDispatch();
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const dateOfBirthRef = useRef<HTMLInputElement>(null);
    const startDateRef = useRef<HTMLInputElement>(null);
    const streetRef = useRef<HTMLInputElement>(null);
    const cityRef = useRef<HTMLInputElement>(null);
    const stateRef = useRef<HTMLSelectElement>(null);
    const zipCodeRef = useRef<HTMLInputElement>(null);
    const departmentRef = useRef<HTMLSelectElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e.target)
    }

    return (
        <main className="new-employee">
            <section className="new-employee-form-section">
                <h1 className="create-employee-form-header">Add new employee</h1>
                <form className="create-employee-form" onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                    <div className="create-employee-form-input">
                        <label htmlFor="firstName">First name</label>
                        <input ref={firstNameRef} type="text" id="firstName" />
                    </div>
                    <div className="create-employee-form-input">
                        <label htmlFor="lastName">Last name</label>
                        <input ref={lastNameRef} type="text" id="lastName" />
                    </div>
                    <div className="create-employee-form-input">
                        <label htmlFor="dateOfBirth">Date of birth</label>
                        <input ref={dateOfBirthRef} type="date" id="dateOfBirth" />
                    </div>
                    <div className="create-employee-form-input">
                        <label htmlFor="startDate">Start date</label>
                        <input ref={startDateRef} type="date" id="startDate" />
                    </div>
                    <div className="create-employee-form-input-group">
                        <span className="create-employee-form-input-group__title">Adress</span>
                        <div className="create-employee-form-input">
                            <label htmlFor="street">Street</label>
                            <input ref={streetRef} type="text" id="street" />
                        </div>
                        <div className="create-employee-form-input">
                            <label htmlFor="city">City</label>
                            <input ref={cityRef} type="text" id="city" />
                        </div>
                        <div className="create-employee-form-input">
                            <label htmlFor="state">State</label>
                            <select ref={stateRef} id="state">
                                <option value="1">Alabama</option>
                                <option value="2">Oklahoma</option>
                                <option value="3">California</option>
                                <option value="4">New York</option>
                            </select>
                        </div>
                        <div className="create-employee-form-input">
                            <label htmlFor="zipCode">Zip Code</label>
                            <input ref={zipCodeRef} type="text" id="zipCode" />
                        </div>
                    </div>
                    <div className="create-employee-form-input">
                        <label htmlFor="department">Department</label>
                        <select ref={departmentRef} id="department">
                            <option value="1">Sales</option>
                            <option value="4">Marketing</option>
                            <option value="2">Engineering</option>
                            <option value="3">Human Resources</option>
                            <option value="3">Legal</option>
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
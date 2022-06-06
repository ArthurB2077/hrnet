import React, { useState, useRef, useEffect } from "react"
import { useDispatch, useSelector, connect } from "react-redux";
import { create as createEmployee } from "../../actions/employees"
import { characterRegex, dateRegex, zipCodeRegex } from "../../helpers/Regex"
import Modal from "../Modal"

interface Employee {
    "firstName": string,
    "lastName": string,
    "dateOfBirth": string,
    "startDate": string,
    "department": string,
    "street": string,
    "city": string,
    "state": string,
    "zipCode": string
}

interface EmployeesState {
    employeeReducer: {
        data: Employee[] | null,
        loading: boolean,
        error: string | null,
        message: string | null,
    }
}

const NewEmployeeForm: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [submitButtonClicked, setSubmitButtonClicked] = useState<boolean>(false)
    const [invalidForm, setInvalidForm] = useState<boolean>(false)
    const dispatch = useDispatch();
    const creationMessage = useSelector((state: EmployeesState) => state.employeeReducer.message);
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const dateOfBirthRef = useRef<HTMLInputElement>(null);
    const startDateRef = useRef<HTMLInputElement>(null);
    const streetRef = useRef<HTMLInputElement>(null);
    const cityRef = useRef<HTMLInputElement>(null);
    const stateRef = useRef<HTMLSelectElement>(null);
    const zipCodeRef = useRef<HTMLInputElement>(null);
    const departmentRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        if(creationMessage && submitButtonClicked) {
            setShowModal(true)
        }
        if(submitButtonClicked) {
            setSubmitButtonClicked(false)
        }
    }, [creationMessage, submitButtonClicked])

    const handleSubmit: Function = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

        const formValues = {
            firstName: firstNameRef.current?.value,
            lastName: lastNameRef.current?.value,
            dateOfBirth: dateOfBirthRef.current?.value,
            startDate: startDateRef.current?.value,
            department: departmentRef.current?.value,
            street: streetRef.current?.value,
            city: cityRef.current?.value,
            state: stateRef.current?.value,
            zipCode: zipCodeRef.current?.value
        }

        const isValid: Function = (fieldsValues: Employee | undefined | null): boolean => {
            if(fieldsValues === null || fieldsValues === undefined) {
                return false
            } else {
                return (
                    Object.values(fieldsValues).every(field => characterRegex.test(field) || dateRegex.test(field) || zipCodeRegex.test(field))
                )
            }
        }

        if(isValid(formValues)) {
            createEmployee(formValues)(dispatch)
            if(firstNameRef && firstNameRef.current &&
                lastNameRef && lastNameRef.current &&
                dateOfBirthRef && dateOfBirthRef.current &&
                startDateRef && startDateRef.current &&
                departmentRef && departmentRef.current &&
                streetRef && streetRef.current &&
                cityRef && cityRef.current &&
                stateRef && stateRef.current &&
                zipCodeRef && zipCodeRef.current
            ) {
                firstNameRef.current.value = ""
                lastNameRef.current.value = ""
                dateOfBirthRef.current.value = ""
                startDateRef.current.value = ""
                departmentRef.current.value = ""
                streetRef.current.value = ""
                cityRef.current.value = ""
                stateRef.current.value = ""
                zipCodeRef.current.value = ""
            }
        } else {
            setInvalidForm(true)
        }
    }

    return (
        <>
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
                            <option value="Alabama">Alabama</option>
                            <option value="Oklahoma">Oklahoma</option>
                            <option value="California">California</option>
                            <option value="New York">New York</option>
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
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Legal">Legal</option>
                    </select>
                </div>
                <div className="create-employee-form-input-button">
                    <button className="create-employee-form-button" type="submit" onClick={() => setSubmitButtonClicked(true)}>Save</button>
                </div>
            </form>
            {showModal && creationMessage &&
                <Modal content={creationMessage} closeModal={setShowModal}/>
            }
            {invalidForm && 
                <Modal content="Invalid fields values" closeModal={setShowModal} invalidFields={setInvalidForm}/>
            }
        </>
    )
}

export default connect()(NewEmployeeForm)
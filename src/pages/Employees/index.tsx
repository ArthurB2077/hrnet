import React, { useEffect } from "react"
import { useDispatch, useSelector, connect } from "react-redux"
import { retrieve } from "../../actions/employees";
import { DataTable } from "react-delta-table"

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

const Employees: React.FC = () => {
    const dispatch = useDispatch()
    const employees = useSelector((state: EmployeesState) => state.employeeReducer.data)

    useEffect(() => {
        retrieve()(dispatch)
    }, [])

    return (
        <main>
            <section style={{width: "80vw", margin: "auto"}}>
                {employees &&
                    <DataTable 
                        headers={Object.keys(employees[0])} 
                        rows={employees.map(item => Object.values(item))}
                        itemPerPageRanges={[5, 10, 20, 50, 100]}
                        labels={{
                            search: "Search : ",
                            display: "Display : ",
                            export: "Export to :",
                            first: "First",
                            previous: "Prev",
                            next: "Next",
                            last: "Last",
                        }}
                        className=""
                        theme="light"
                    />
                }
            </section>
        </main>
    )
}

export default connect()(Employees)
import { AnyAction } from 'redux'
import { 
    RETRIEVE_EMPLOYEE_SUCCESS, 
    RETRIEVE_EMPLOYEE_LOADING, 
    RETRIEVE_EMPLOYEE_ERROR, 
    CREATE_EMPLOYEE_SUCCESS, 
    CREATE_EMPLOYEE_LOADING, 
    CREATE_EMPLOYEE_ERROR
} from '../../constants/action-types'

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
    data: Employee[] | null,
    loading: boolean,
    error: string | null,
    message: string | null,
}

const initialState: EmployeesState = {
    data: null,
    loading: false,
    error: null,
    message: null,
}

export const employeeReducer = (state: EmployeesState = initialState, action: AnyAction): EmployeesState => {
    switch(action.type) {
        case RETRIEVE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                // Reducer have to handle the integrity of data because there is no database for this project
                data: state.data !== null ? [...state.data, ...action.payload.content].filter((employee: Employee, index: number, mergedArray: Employee[]) => mergedArray.indexOf(employee) === index) : action.payload.content,
                loading: false,
                error: null,
                message: "Employees retrieved successfully",
            }
        case RETRIEVE_EMPLOYEE_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
                message: "Retrieving employees...",
            }
        case RETRIEVE_EMPLOYEE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                message: "An error occurred while retrieving employee",
            }
        case CREATE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                data: state.data !== null ? [...state.data, action.payload.content] : [action.payload.content],
                loading: false,
                error: null,
                message: "Employee created successfully",
            }
        case CREATE_EMPLOYEE_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
                message: "Creating employee...",
            }
        case CREATE_EMPLOYEE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                message: "An error occurred while creating employee",
            }
        default:
            return state
    }
}
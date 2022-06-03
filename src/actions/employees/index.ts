import { Exception } from "sass"
import  { 
    RETRIEVE_EMPLOYEE_SUCCESS, 
    RETRIEVE_EMPLOYEE_LOADING, 
    RETRIEVE_EMPLOYEE_ERROR, 
    CREATE_EMPLOYEE_SUCCESS, 
    CREATE_EMPLOYEE_LOADING, 
    CREATE_EMPLOYEE_ERROR
} from "../../constants/action-types"

interface ResponseToJSON {
    content: {  
        "firstName": string,
        "lastName": string,
        "dateOfBirth": string,
        "startDate": string,
        "department": string,
        "street": string,
        "city": string,
        "state": string,
        "zipCode": string,
    }
    status: number
}

export const create: Function = (employee: ResponseToJSON["content"]) => (dispatch: Function): void => {
    dispatch({
        type: CREATE_EMPLOYEE_LOADING
    })

    try {
        const response: ResponseToJSON = {
            content: {
                "firstName": employee.firstName,
                "lastName": employee.lastName,
                "dateOfBirth": employee.dateOfBirth,
                "startDate": employee.startDate,
                "department": employee.department,
                "street": employee.street,
                "city": employee.city,
                "state": employee.state,
                "zipCode": employee.zipCode,
            },
            status: 201,
        }

        dispatch({
            type: CREATE_EMPLOYEE_SUCCESS,
            payload: response
        })
    }
    catch(error) {
        dispatch({
            type: CREATE_EMPLOYEE_ERROR,
            payload: {
                error: error
            }
        })
    }
}

export const retrieve: Function = (path: string = "/mocked-data/employee-mock-data.json") => (dispatch: Function): void => {
    dispatch({
        type: RETRIEVE_EMPLOYEE_LOADING
    })

    fetch(path, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then((res: Response) => (res.json()))
    .then((response: Response) => {
        if(response.ok) {
            dispatch({
                type: RETRIEVE_EMPLOYEE_SUCCESS,
                payload: {
                    content: response.body
                }
            })
        }
    })
    .catch((error: Error) => {
        dispatch({
            type: RETRIEVE_EMPLOYEE_ERROR,
            payload: {
                error: error
            }
        })
    })
}
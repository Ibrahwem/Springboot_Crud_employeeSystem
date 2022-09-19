import axios from 'axios'

const EMPLOYEE_GET_LIST_URL="http://localhost:5000/api/v1/employees";

class EmployeeService {

    getAllEmployees(){
        return axios.get(EMPLOYEE_GET_LIST_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_GET_LIST_URL,employee);

    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_GET_LIST_URL+'/'+employeeId);

    }

    updateEmployeeById(employeeId ,employee){
        return axios.put(EMPLOYEE_GET_LIST_URL+'/'+employeeId,employee);

    }

    deleteEmployeeById(employeeId){
        return axios.delete(EMPLOYEE_GET_LIST_URL+'/'+employeeId);
    }
}

export default new EmployeeService();
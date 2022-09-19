import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = () => {

  const [employees,setEmployees] = useState([])
  
  useEffect(() => {
    getAllEmployees()}
    , []);

 
  const getAllEmployees=()=>{
    EmployeeService.getAllEmployees().then((response) =>{
      setEmployees(response.data)
      console.log(employees)
    }).catch(error => console.log(error))
  }

  
  const deleteEmp=(empId)=>{
    EmployeeService.deleteEmployeeById(empId);
    getAllEmployees();
  }

  return (
    <div className='container'>
    <h2 className='text-center'> Employees List</h2>
    <Link to ="/add-employee" className='btn btn-primary mb-3'> Add Employee</Link>
    <table className='table table-bordered table-striped'>
        <thead>
            <th>Employee Id</th>
            <th> First Name </th>
            <th> Last Name </th>
            <th> Email </th>
            <th> Actions </th>
        </thead>
        <tbody>
            {
                employees.map(employee =>
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.emailId}</td>
                    <td>
                      <Link className='btn btn-info' to={`/edit-employee/${employee.id}`}>Update</Link>
                      <button className='btn btn-danger' onClick={()=>deleteEmp(employee.id)} style={{margin:"8px"}}>Delete</button>

                    </td>

                </tr>
                
                )
            }
        </tbody>
    </table>
      
    </div>
  )
}

export default ListEmployeeComponent

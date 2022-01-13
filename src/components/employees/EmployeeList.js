import React, { useEffect, useState } from "react"
// allows us to use react features

//react takes JSX( like html), converts it into JS then renders html
export const EmployeeList = () => {
    //whatever this export function returns will be the html that gets generated browser
    const [employees, modifyEmployees] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(response => response.json())
                .then((employeesArray) => {
                    modifyEmployees(employeesArray)
                }
                )
        },
        []
    )
    //return statement must include '()' with the html you want rendered inside
    return (
        <>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee---${employee.id}`}>{employee.name} </p>
                    }
                )
            }
        </>
    )
}
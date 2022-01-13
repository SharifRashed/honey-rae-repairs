import React, { useEffect, useState } from "react"
// allows us to use react features

//react takes JSX( like html), converts it into JS then renders html
export const EmployeeList = () => {
    //whatever this export function returns will be the html that gets generated browser
    const [employees, modifyEmployees] = useState([])
    const [employeeSpecialty, showSpecialty] = useState("")

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

    useEffect(
        /*
           1. Use .map() to get the specialty of each employee
           2. Then update a state variable to be a comma-separated string
               (e.g. "iPhone, Printers, ...")
       */


        () => {
            //declaring a function that allows us to map over the employee array and acess the employee object property of specialty
            const justSpecialities = employees.map(employee => employee.specialty)

            //the useState variable 'showSpecialty' interates over the .map function above to concatenate all the elements in an array 
            showSpecialty(justSpecialities.join(", "))
        },
        [employees]
    )

    //return statement must include '()' with the html you want rendered inside
    return (
        <>
            <div>
                Specialties: {employeeSpecialty}
            </div>
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
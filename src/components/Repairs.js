//repairs.js component is only responsible for the order a component should be displayed

import React from "react"
// allows us to use react features
import { CustomerList } from "./customers/CustomerList.js"
import { EmployeeList } from "./employees/EmployeeList.js"

//react takes JSX( like html), converts it into JS then renders html
export const Repairs = () => {

    return (
        <>
            <h1>Honey Rae's Repair Shop</h1>

            <h2>Customer List</h2>
            <CustomerList />

            <h2>Employee List</h2>
            <EmployeeList />
        </>
    )
}
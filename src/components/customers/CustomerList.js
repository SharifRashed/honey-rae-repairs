import React, { useEffect, useState } from "react"
// allows us to use react features

//react takes JSX( like html), converts it into JS then renders html
export const CustomerList = () => {
    //whatever this export function returns will be the html that gets generated browser
    const [customers, modifyCustomers] = useState([])

    const [totalCustomerMessage, updateMessage] = useState("")

    useEffect(
        () => {
            console.log("initial useEffect")
            fetch("http://localhost:8088/customers")
                .then(response => response.json())
                .then((customerArray) => {
                    modifyCustomers(customerArray)
                }
                )
        },
        []
    )

    //adding another useEffect to constantly change state when rendering the html for total customer message in return statement
    useEffect(
        () => {
            console.log("customers state changed", customers)
            if (customers.length === 1) {
                updateMessage("You have 1 customer")
            }
            else {
                updateMessage(`You have ${customers.length} customers`)
            }
        },
        [customers]

    )

    //return statement must include '()' with the html you want rendered inside
    return (
        <>
            <div>{totalCustomerMessage}</div>
            {
                customers.slice(0, 5).map(
                    (customerObject) => {
                        return <p key={`customer---${customerObject.id}`}>{customerObject.name} </p>
                    }
                )
            }
        </>
    )
}

// cannot directly modify state using react

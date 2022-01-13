import React, { useEffect, useState } from "react"
// allows us to use react features

//react takes JSX( like html), converts it into JS then renders html
export const TicketList = () => {
    //whatever this export function returns will be the html that gets generated browser
    const [tickets, modifyTickets] = useState([])


    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(response => response.json())
                .then((data) => {
                    modifyTickets(data)
                }
                )
        },
        []
    )

    //return statement must include '()' with the html you want rendered inside
    return (
        <>

            {
                tickets.map(
                    (ticket) => {
                        return <div key={`ticket---${ticket.id}`}>
                            <p> {ticket.description} submitted by {ticket.customer.name} and worked on by {ticket.employee.name}</p>
                        </div>
                    }
                )
            }
        </>
    )
}
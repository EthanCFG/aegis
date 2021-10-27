import React, { Component, useEffect, useState } from 'react';
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import axios from 'axios';



const fetch_drivers = async () => {
    const drivers_list_response = await axios.post("http://localhost:3001/get_drivers", {
                organizationID1: localStorage.getItem('sponsorid'),
                organizationID2: localStorage.getItem('sponsorid'),
                organizationID3: localStorage.getItem('sponsorid')
	})
    console.log(drivers_list_response.data);
}

function TableData(props) {

    const add_points_handler = (i) => {
        axios.post("http://localhost:3001/update_driver_points1", {
            pointChange: 10,
            driverID: props.id[i],
            organizationID: localStorage.getItem('sponsorid'),
            date: 'tuesday',
            reason: 'some reason'
        })
    }

    const [driverPoints, setDriverPoints] = useState(props.points)

    const [driversData, setDriversData] = useState([])

    useEffect(() => {
        fetch_drivers().then(driversData => {
            setDriversData(driversData)
        })
    }, [])

    let html_rows = [];

	for (let i = 0; i < props.id.length; i++) {
        html_rows.push(
            <tbody>
                <tr>
                    <th>{props.id[i]}</th>
                    <td>{props.first[i]} {props.last[i]}</td>
                    <td>{props.email[i]}</td>
                    <td>{props.points[i]}</td>
                    <td><Button onclick={() => fetch_drivers}>+</Button> <Button>-</Button></td>
                    <td></td>
                </tr>
            </tbody>
        )
    }
    
    return (
        html_rows
    )
}

export default TableData;
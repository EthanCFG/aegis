import React, { Component, useEffect, useState } from 'react';
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import axios from 'axios';


/*const add_points_handler = (i) => {
    axios.post("http://localhost:3001/update_driver_points1", {
        pointChange: 10,
        driverID: props.id[i],
        organizationID: localStorage.getItem('sponsorid'),
        date: 'tuesday',
        reason: 'some reason'
    })
}

const [driverPoints, setDriverPoints] = useState(props.points)*/

var getCompleted = false;


const fetch_drivers = async () => {
    const drivers_list_response = await axios.post("http://localhost:3001/get_drivers", {
        organizationID1: localStorage.getItem('sponsorid'),
        organizationID2: localStorage.getItem('sponsorid'),
        organizationID3: localStorage.getItem('sponsorid')
    })

    getCompleted = true;
    console.log(drivers_list_response);
    return drivers_list_response;
}


function TableData(props) {

    const [driversData, setDriversData] = useState([])

    const render_data_table = () => {
        /*console.log('entered render_data_table');
        console.log(driversData);*/
        if (getCompleted == false) { return null }
        
        else {
            return driversData.map((driver, index) => {
                const { id, first, last, email, points } = driver
                return (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{first}</td>
                        <td>{last}</td>
                        <td>{email}</td>
                        <td>{points}</td>
                    </tr>
                )
            })
        }
    }

    useEffect(() => {
        async function fetchDrivers() {
            const drivers_response = await axios.post("http://localhost:3001/get_drivers", {
                organizationID1: localStorage.getItem('sponsorid'),
                organizationID2: localStorage.getItem('sponsorid'),
                organizationID3: localStorage.getItem('sponsorid')
            })
            setDriversData(drivers_response.data);
            console.log(drivers_response.data)
        }
        fetchDrivers();
    }, []);

    //console.log(driversData);
    return (<tbody>{driversData.map((driver, index) => {
        const { Driver_ID, Driver_First_Name, Driver_Last_Name, Driver_Email, Driver_Points1 } = driver
        console.log(Driver_ID);
        return (
            <tr key={Driver_ID}>
                <td>{Driver_ID}</td>
                <td>{Driver_First_Name} {Driver_Last_Name}</td>
                <td>{Driver_Email}</td>
                <td>{Driver_Points1}</td>
                <td><Button onClick={() => console.log(Driver_ID)}>+</Button> <Button>-</Button></td>
            </tr>
        )
    })}</tbody>)
}

export default TableData;
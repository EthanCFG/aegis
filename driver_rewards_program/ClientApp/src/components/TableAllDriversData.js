import React, { Component, useEffect, useState } from 'react';
import 'bulma/css/bulma.min.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


function TableAllDriversData(props) {

    const [driversData, setDriversData] = useState([])


    useEffect(() => {
        async function fetchDrivers() {
            const drivers_response = await axios.post("http://localhost:3001/get_all_drivers")
            setDriversData(drivers_response.data);
            //console.log(drivers_response.data)
        }
        fetchDrivers();
    }, [props.dataStatus]);

    //console.log(driversData);
    return (<tbody>{driversData.map((driver) => {
        const id = driver.Driver_ID;
        const first = driver.Driver_First_Name;
        const last = driver.Driver_Last_Name;
        const email = driver.Driver_Email
        const org1 = driver.Organization_ID1;
        const org2 = driver.Organization_ID2;
        const org3 = driver.Organization_ID3;
        const points1 = driver.Driver_Points1;
        const points2 = driver.Driver_Points2;
        const points3 = driver.Driver_Points3;
        //const { Driver_ID, Driver_First_Name, Driver_Last_Name, Driver_Email, Driver_Points1 } = driver
        //console.log(id);
        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{first} {last}</td>
                <td>{email}</td>
                <td>{org1}</td>
                <td>{points1}</td>
                <td>{org2}</td>
                <td>{points2}</td>
                <td>{org3}</td>
                <td>{points3}</td>
                <td><Button onClick={() => { props.setAddModal(true); props.setDriver(id); props.setOrg1(org1); props.setOrg2(org2); props.setOrg3(org3); }}>+</Button> <Button onClick={() => { props.setSubModal(true); props.setDriver(id); props.setOrg1(org1) }}>-</Button></td>
            </tr>
        )
    })}</tbody>)
}

export default TableAllDriversData;
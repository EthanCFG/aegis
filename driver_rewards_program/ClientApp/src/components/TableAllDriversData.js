import React, { Component, useEffect, useState } from 'react';
import 'bulma/css/bulma.min.css';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { propTypes } from 'react-bootstrap/esm/Image';


function TableAllDriversData(props) {

    let history = useHistory();

    const [driversData, setDriversData] = useState([])
    const [controllingDriver, setControllingDriver] = useState(false)
    const [selectedDriverID, setSelectedDriverID] = useState(0)


    useEffect(() => {
        async function fetchDrivers() {
            const drivers_response = await axios.post("http://localhost:3001/get_all_drivers")
            setDriversData(drivers_response.data);
            //console.log(drivers_response.data)
        }
        fetchDrivers();
    }, [props.dataStatus]);

    useEffect(() => {
        async function switchToDriver() {

            console.log(selectedDriverID);

            const driver_response = await axios.post("http://localhost:3001/get_driver_data", {
                driver_id: selectedDriverID
            })

            console.log(driver_response);

            const org_list_response = await axios.get("http://localhost:3001/list_of_orgs");

            let organization_list = [];
            for (let i = 0; i < org_list_response.data.length; i++) {
                organization_list.push(org_list_response.data[i].Organization_Name);
            }

            localStorage.setItem('id', driver_response.data[0].Driver_ID);
            localStorage.setItem('email', driver_response.data[0].Driver_Email);
            localStorage.setItem('first', driver_response.data[0].Driver_First_Name);
            localStorage.setItem('last', driver_response.data[0].Driver_Last_Name);
            localStorage.setItem('address', driver_response.data[0].Driver_Address);
            localStorage.setItem('city', driver_response.data[0].Driver_City);
            localStorage.setItem('state', driver_response.data[0].Driver_State);
            localStorage.setItem('zip', driver_response.data[0].Driver_Zip);
            localStorage.setItem('orgid1', driver_response.data[0].Organization_ID1);
            localStorage.setItem('orgid2', driver_response.data[0].Organization_ID2);
            localStorage.setItem('orgid3', driver_response.data[0].Organization_ID3);

            const org1_response = await axios.post("http://localhost:3001/get_org1", {
                org1: localStorage.getItem('orgid1')
            })

            const org2_response = await axios.post("http://localhost:3001/get_org2", {
                org2: localStorage.getItem('orgid2')
            })

            const org3_response = await axios.post("http://localhost:3001/get_org3", {
                org3: localStorage.getItem('orgid3')
            })

            if (org1_response.data[0] != null) {
                localStorage.setItem('orgname1', org1_response.data[0].Organization_Name);
                localStorage.setItem('orgactive', org1_response.data[0].Organization_Name);
                localStorage.setItem('orgactive_ID', org1_response.data[0].Organization_ID);
            }
            else {
                localStorage.setItem('orgname1', null);
                localStorage.setItem('orgactive', null);
                localStorage.setItem('orgactive_ID', null)
            }
            if (org2_response.data[0] != null) {
                localStorage.setItem('orgname2', org2_response.data[0].Organization_Name);
            }
            else {
                localStorage.setItem('orgname2', null);
            }
            if (org3_response.data[0] != null) {
                localStorage.setItem('orgname3', org3_response.data[0].Organization_Name);
            }
            else {
                localStorage.setItem('orgname3', null);
            }
            localStorage.setItem('orglist', JSON.stringify(organization_list));
            localStorage.setItem('points1', driver_response.data[0].Driver_Points1);
            localStorage.setItem('points2', driver_response.data[0].Driver_Points2);
            localStorage.setItem('points3', driver_response.data[0].Driver_Points3);
            localStorage.setItem('activepoints', driver_response.data[0].Driver_Points1);
            history.push('/driver_home');
        }
        if (controllingDriver) {
        switchToDriver();
        }
    }, [controllingDriver]);


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
                <td>
                    <DropdownButton id="dropdown-basic-button" title="Manage">
                        <Dropdown.Item onClick={() => { props.setAddModal(true); props.setDriver(id); props.setOrg1(org1); props.setOrg2(org2); props.setOrg3(org3); }}>Add Points</Dropdown.Item>
                        <Dropdown.Item onClick={() => { props.setSubModal(true); props.setDriver(id); props.setOrg1(org1); props.setOrg2(org2); props.setOrg3(org3); }}>Subtract Points</Dropdown.Item>
                        <Dropdown.Item onClick={() => { setSelectedDriverID(id); setControllingDriver(true);}}>Enter Driver View</Dropdown.Item>
                        <Dropdown.Divider></Dropdown.Divider>
                        <Dropdown.Item onClick={() => { props.setDeleteModal(true); props.setDriver(id); }} style={{color: 'red'}}>Delete Driver</Dropdown.Item>
                    </DropdownButton>
                </td>
            </tr>
        )
    })}</tbody>)
}

export default TableAllDriversData;
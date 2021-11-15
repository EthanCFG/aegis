import React, { Component, useEffect, useState } from 'react';
import 'bulma/css/bulma.min.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';


function TableAllSponsorsData(props) {

    let history = useHistory();

    const [sponsorsData, setSponsorsData] = useState([])
    const [controllingSponsor, setControllingSponsor] = useState(false)
    const [selectedSponsorID, setSelectedSponsorID] = useState(0)


    useEffect(() => {
        async function fetchSponsors() {
            const sponsors_response = await axios.post("http://localhost:3001/get_all_sponsors")
            setSponsorsData(sponsors_response.data);
        }
        fetchSponsors();
    }, [props.dataStatus]);

    useEffect(() => {
        async function switchToSponsor() {

            const sponsor_response = await axios.post("http://localhost:3001/get_sponsor_data", {
			    sponsor_id: selectedSponsorID
		    })

            const org_list_response = await axios.get("http://localhost:3001/list_of_orgs");

            localStorage.setItem('sponsorid', sponsor_response.data[0].Sponsor_ID);
			localStorage.setItem('orgid', sponsor_response.data[0].Organization_ID);

			for (let i = 0; i < org_list_response.data.length; i++) {
				if (org_list_response.data[i].Organization_ID == sponsor_response.data[0].Organization_ID) { 
					localStorage.setItem('sponsorname', org_list_response.data[i].Organization_Name);
				}
			}

			const drivers_list_response = await axios.post("http://localhost:3001/get_drivers", {
				organizationID1: localStorage.getItem('orgid'),
				organizationID2: localStorage.getItem('orgid'),
				organizationID3: localStorage.getItem('orgid')
			})

			let drivers_ids = [];
			let drivers_first = [];
			let drivers_last = [];
			let drivers_email = [];
			let drivers_points = [];
			for (let i = 0; i < drivers_list_response.data.length; i++) {
				drivers_ids.push(drivers_list_response.data[i].Driver_ID);
				drivers_first.push(drivers_list_response.data[i].Driver_First_Name);
				drivers_last.push(drivers_list_response.data[i].Driver_Last_Name);
				drivers_email.push(drivers_list_response.data[i].Driver_Email);
				drivers_points.push(drivers_list_response.data[i].Driver_Points1);
			}

			localStorage.setItem('driversid', JSON.stringify(drivers_ids));
			localStorage.setItem('driversfirst', JSON.stringify(drivers_first));
			localStorage.setItem('driverslast', JSON.stringify(drivers_last));
			localStorage.setItem('driversemail', JSON.stringify(drivers_email));
			localStorage.setItem('driverspoints', JSON.stringify(drivers_points));

			localStorage.setItem('sponsoremail', sponsor_response.data[0].Sponsor_Email);
			localStorage.setItem('sponsorfirst', sponsor_response.data[0].Sponsor_First_Name);
			localStorage.setItem('sponsorlast', sponsor_response.data[0].Sponsor_Last_Name);
			history.push('/sponsor_home');
        }
        if(controllingSponsor) {
            switchToSponsor();
        }
    }, [controllingSponsor])

    //console.log(driversData);
    return (<tbody>{sponsorsData.map((sponsor) => {
        const id = sponsor.Sponsor_ID;
        const orgid = sponsor.Organization_ID
        const first = sponsor.Sponsor_First_Name;
        const last = sponsor.Sponsor_Last_Name;
        const email = sponsor.Sponsor_Email;
        //const { Driver_ID, Driver_First_Name, Driver_Last_Name, Driver_Email, Driver_Points1 } = driver
        //console.log(id);
        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{orgid}</td>
                <td>{first} {last}</td>
                <td>{email}</td>
                    <DropdownButton id="dropdown-basic-button" title="Manage">
                        <Dropdown.Item onClick={() => { setSelectedSponsorID(id); setControllingSponsor(true); }}>Enter Sponsor View</Dropdown.Item>
                        <Dropdown.Divider></Dropdown.Divider>
                        <Dropdown.Item onClick={() => { props.setDeleteModal(true); props.setSponsor(id); }} style={{color: 'red'}}>Delete Sponsor</Dropdown.Item>
                    </DropdownButton>
            </tr>
        )
    })}</tbody>)
}

export default TableAllSponsorsData;
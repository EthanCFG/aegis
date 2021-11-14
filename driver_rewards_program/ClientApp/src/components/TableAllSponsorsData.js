import React, { Component, useEffect, useState } from 'react';
import 'bulma/css/bulma.min.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


function TableAllSponsorsData(props) {

    const [sponsorsData, setSponsorsData] = useState([])


    useEffect(() => {
        async function fetchSponsors() {
            console.log('fetchinggggg')
            const sponsors_response = await axios.post("http://localhost:3001/get_all_sponsors")
            setSponsorsData(sponsors_response.data);
            console.log(sponsors_response.data)
        }
        fetchSponsors();
    }, [props.dataStatus]);

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
            </tr>
        )
    })}</tbody>)
}

export default TableAllSponsorsData;
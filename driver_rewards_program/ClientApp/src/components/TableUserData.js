import React, { Component, useEffect, useState } from 'react';
import 'bulma/css/bulma.min.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


function TableUserData(props) {

    const [loginData, setLoginData] = useState([])

    useEffect(() => {
        async function fetchLogins() {
            const login_response = await axios.post("http://localhost:3001/get_all_logins");
            setLoginData(login_response.data.reverse());
        }
        fetchLogins();
    }, []);

    return (<tbody>{loginData.map((item) => {
        const id = item.Login_Attempt_ID;
        const email = item.Login_Attempt_Email;
        const login_status = item.Login_Attempt_Status;
        const login_date = item.Login_Attempt_Date;
        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{email}</td>
                <td>{login_status}</td>
                <td>{login_date}</td>
            </tr>
        )
    })}</tbody>)
}

export default TableUserData;
import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

function FormDisplaySponsorData(props) {

    const submitHandler = (event) => {
        event.preventDefault();

        props.onEditPressed();
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>Email Address: {localStorage.getItem('sponsoremail')}</p>
                <p>First Name: {localStorage.getItem('sponsorfirst')}</p>
                <p>Last Name: {localStorage.getItem('sponsorlast')}</p>
                <Button type='submit'>Edit</Button>
            </form>
        </div>
    );
};

export default FormDisplaySponsorData;
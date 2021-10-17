import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

function FormDisplayUserData(props) {

    const submitHandler = (event) => {
        event.preventDefault();

        props.onEditPressed();
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>Email Address: {localStorage.getItem('email')}</p>
                <p>First Name: {localStorage.getItem('first')}</p>
                <p>Last Name: {localStorage.getItem('last')}</p>
                <p>City: {localStorage.getItem('city')}</p>
                <p>Address: {localStorage.getItem('address')}</p>
                <p>State: {localStorage.getItem('state')}</p>
                <p>Zip: {localStorage.getItem('zip')}</p>
                <Button type='submit'>Edit</Button>
            </form>
        </div>
    );
};

export default FormDisplayUserData;
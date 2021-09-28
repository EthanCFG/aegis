import React, {Component, useState} from "react";
import Form from 'react-bootstrap/Form';

function PhoneNumberForm (props) {

    const [enteredPhone, setEnteredPhone] = useState('');

    const phoneChangeHandler = (event) => {
        setEnteredPhone(event.target.value);

        props.onPhoneEntered(event.target.value)
    }

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone Number:</Form.Label>
                <Form.Control type="phone" placeholder="Enter phone #..." onChange={phoneChangeHandler} />
                </Form.Group> 
            </Form>
        </div>
    )
}

export default PhoneNumberForm;
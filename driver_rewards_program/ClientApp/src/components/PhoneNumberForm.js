import React, {Component} from "react";
import Form from 'react-bootstrap/Form'

function PhoneNumberForm () {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone Number:</Form.Label>
                <Form.Control type="phone" placeholder="Enter phone #..." />
                </Form.Group> 
            </Form>
        </div>
    )
}

export default PhoneNumberForm;
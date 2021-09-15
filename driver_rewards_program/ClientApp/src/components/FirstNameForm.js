import React, {Component} from "react";
import Form from 'react-bootstrap/Form'

function FirstNameForm () {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Form>
                <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name:</Form.Label>
                <Form.Control type="name" placeholder="Enter first name..." />
                </Form.Group> 
            </Form>
        </div>
    )
}

export default FirstNameForm;
import React, {Component} from "react";
import Form from 'react-bootstrap/Form'

function LastNameForm () {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Form>
                <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control type="name" placeholder="Enter last name..." />
                </Form.Group> 
            </Form>
        </div>
    )
}

export default LastNameForm;
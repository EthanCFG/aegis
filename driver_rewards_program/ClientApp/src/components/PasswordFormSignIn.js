import React, {Component} from "react";
import Form from 'react-bootstrap/Form'

function PasswordForm () {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter password..." />
                </Form.Group> 
            </Form>
        </div>
    )
}

export default PasswordForm;
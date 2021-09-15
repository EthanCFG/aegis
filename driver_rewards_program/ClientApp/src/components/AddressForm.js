import React, {Component} from "react";
import Form from 'react-bootstrap/Form'

function AddressForm () {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address:</Form.Label>
                <Form.Control type="address" placeholder="Enter street address..." />
                </Form.Group> 
            </Form>
        </div>
    )
}

export default AddressForm;
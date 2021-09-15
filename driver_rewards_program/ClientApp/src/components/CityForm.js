import React, {Component} from "react";
import Form from 'react-bootstrap/Form'

function CityForm () {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Label>Address:</Form.Label>
                <Form.Control type="city" placeholder="Enter city..." />
                </Form.Group> 
            </Form>
        </div>
    )
}

export default CityForm;
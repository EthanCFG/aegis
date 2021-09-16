import React, {Component} from "react";
import Form from 'react-bootstrap/Form'

function ZipForm () {
    return (
        <div class="state-city">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicZip">
                <Form.Label>Zip Code:</Form.Label>
                <Form.Control type="zip" placeholder="Enter zip code..." />
                </Form.Group> 
            </Form>
        </div>
    )
}

export default ZipForm;
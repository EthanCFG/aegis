import React, {Component, useState} from "react";
import Form from 'react-bootstrap/Form'

function ZipForm (props) {

    const [enteredZip, setEnteredZip] = useState('');

    const zipChangeHandler = (event) => {
        setEnteredZip(event.target.value);

        props.onZipEntered(event.target.value)
    }

    return (
        <div class="state-city">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicZip">
                <Form.Label>Zip Code:</Form.Label>
                <Form.Control type="zip" placeholder="Enter zip code..." onChange={zipChangeHandler}/>
                </Form.Group>
            </Form>
        </div>
    )
}

export default ZipForm;
import React, {Component, useState} from "react";
import Form from 'react-bootstrap/Form'

function CityForm (props) {

    const [enteredCity, setEnteredCity] = useState('');

    const cityChangeHandler = (event) => {
        setEnteredCity(event.target.value);

        props.onCityEntered(event.target.value)
    }

    return (
        <div class="state-city">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Label>City:</Form.Label>
                <Form.Control type="city" placeholder="Enter city..." onChange={cityChangeHandler}/>
                </Form.Group> 
            </Form>
        </div>
    )
}

export default CityForm;
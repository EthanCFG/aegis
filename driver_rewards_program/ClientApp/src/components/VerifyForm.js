import React, {Component, useState} from "react";
import Form from 'react-bootstrap/Form'

function CodeForm () {
    
    const [enteredCode, setEnteredCode] = useState('');
    
    const codeChangeHandler = (event) => {
        setEnteredCode(event.target.value);
    }
    
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Form>
              <Form.Group className="mb-3" controlId="formBasicCode">
              <Form.Label>Code:</Form.Label>
              <Form.Control type="code" placeholder="Enter the Verification Code..." onChange={codeChangeHandler} />
              </Form.Group> 
          </Form>
        </div>
    )
}

export default CodeForm;
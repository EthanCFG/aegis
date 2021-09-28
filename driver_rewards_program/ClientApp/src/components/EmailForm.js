import React, {Component, useState} from "react";
import Form from 'react-bootstrap/Form'

function EmailForm () {
    
    const [enteredEmail, setEnteredEmail] = useState('');
    
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    }
    
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="Enter email address..." onChange={emailChangeHandler} />
              </Form.Group> 
          </Form>
        </div>
    )
}

export default EmailForm;
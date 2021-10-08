import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

function FormChangeUserData() {

  const [enteredEmail, setEmail] = useState();
  const [enteredFirstName, setFirstName] = useState();
  const [enteredLastName, setLastName] = useState();

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await axios.post("http://localhost:3001/update_driver", {
      email: enteredEmail,
      first: enteredFirstName,
      last: enteredLastName,
      id: localStorage.getItem('id')
    })

    localStorage.setItem('email', response.data[0].Driver_Email);
    localStorage.setItem('first', response.data[0].Driver_First_Name);
		localStorage.setItem('last', response.data[0].Driver_Last_Name);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
          <Form.Group>
              <Form.Label>Email Address:</Form.Label>
              <Form.Control
                value={localStorage.getItem('email')}
                name="email"
                type="text"
                placeholder="Enter e-mail address..."
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Text> Please, Enter like "asd@asd.com"</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                name="firstname"
                value={localStorage.getItem('first')}
                type="text"
                placeholder="Enter first name..."
                onChange={e => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                name="secondname"
                value={localStorage.getItem('last')}
                type="text"
                placeholder="Enter last name..."
                onChange={e => setLastName(e.target.value)}
              />
            </Form.Group>
            <Button className="btn-lg" variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormChangeUserData;
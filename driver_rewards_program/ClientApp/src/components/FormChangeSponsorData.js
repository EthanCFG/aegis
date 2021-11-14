import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

function FormChangeSponsorData(props) {

  const [enteredEmail, setEmail] = useState(localStorage.getItem('sponsoremail'));
  const [enteredFirstName, setFirstName] = useState(localStorage.getItem('sponsorfirst'));
  const [enteredLastName, setLastName] = useState(localStorage.getItem('sponsorlast'));

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await axios.post("http://localhost:3001/update_sponsor", {
      email: enteredEmail,
      first: enteredFirstName,
      last: enteredLastName,
      id: localStorage.getItem('id')
    })

    localStorage.setItem('sponsoremail', enteredEmail);
    localStorage.setItem('sponsorfirst', enteredFirstName);
    localStorage.setItem('sponsorlast', enteredLastName);


    props.onSubmitPressed();
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
          <Form.Group>
              <Form.Label>Email Address:</Form.Label>
              <Form.Control
                defaultValue={localStorage.getItem('sponsoremail')}
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
                defaultValue={localStorage.getItem('sponsorfirst')}
                type="text"
                placeholder="Enter first name..."
                onChange={e => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                name="secondname"
                defaultValue={localStorage.getItem('sponsorlast')}
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

export default FormChangeSponsorData;
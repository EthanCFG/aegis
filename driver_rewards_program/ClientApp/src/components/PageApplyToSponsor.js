import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ComboBox from "react-responsive-combo-box";
import "react-responsive-combo-box/dist/index.css";

function PageApplyToSponsor(props) {
  let history = useHistory();

  const [chosenOrg, setChosenOrg] = useState("");

  const [chosenReason, setChosenReason] = useState("");

  const orgChangeHandler = (event) => {
    setChosenOrg(event.target.value);
  };

  const reasonChangeHandler = (event) => {
    setChosenReason(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let the_response = axios
      .post("http://localhost:3001/create_application", {
        driver_id: localStorage.getItem("id"),
        org_name: chosenOrg,
        date: "tuesday",
        status: "pending",
        reason: chosenReason,
      })
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => console.error(error));

    //send message that driver has created an application
    const message_response = axios.post("http://localhost:3001/send_message", {
      driverID: localStorage.getItem("id"),
      messageText: "Your application to " + chosenOrg + " is pending approval",
      messageType: "Application",
    });

    history.push("/driver_home");
  };

  return (
    <form onSubmit={submitHandler}>
      <div class="container">
        <div class="columns is-centered">
          <div class="columns is-half">
            <div class="notification is-white py-3 my-6">
              <h1
                class="signup-header py-2 is-size-3 has-text-weight-semibold"
                style={{
                  marginBottom: 30,
                }}
              >
                Apply to a Sponsor
              </h1>

              <h1
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: 3,
                }}
              >
                Sponsor Organization Name:
              </h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ComboBox
                  options={JSON.parse(localStorage.getItem("orglist"))}
                  enableAutocomplete
                  onSelect={(option) => setChosenOrg(option)}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Form>
                  <Form.Group className="mb-3" controlId="FormSponsor">
                    <Form.Label>Reason for Application:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Provide brief justification..."
                      onChange={reasonChangeHandler}
                    />
                  </Form.Group>
                </Form>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 6,
                  marginBottom: 6,
                }}
              >
                <Button type="submit">Apply</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PageApplyToSponsor;

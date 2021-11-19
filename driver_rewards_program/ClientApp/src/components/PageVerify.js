import React, { Component, useEffect, useState } from "react";
import NavBarSponsor from "./NavBarSponsor";
import "bulma/css/bulma.min.css";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class PageVerify extends Component {
  constructor(props) {
    super(props);
    this.state = {
        code: "",
        status: null,
      };
      this.setVerificationCode = this.setVerificationCode.bind(this);
      this.checkRequest = this.checkRequest.bind(this);
  }

  setVerificationCode(val) {
    this.setState({ code: val });
  }

async checkRequest()
{
    const response = await axios.post("http://localhost:3001/verifycode",
    {
        verifyRequestId:localStorage.getItem("verificationResult"),
        code: this.state.code,
    })
    console.log(response.data);
    this.setState({ status: response.data });
    if (this.state.status == '0')
    {
        
    }
}
  render() {
          return (
              <div class="container is-centered">
                  <div class="columns is-centered">
                      <div class="columns is-half">
                          <div class="notification is-white py-3 my-6">
                              <h1 class="login-header py-2 is-size-3 has-text-weight-semibold" style={{
                                  marginBottom: 30
                              }}>Verify</h1>
                              <div class="field">
                                <label class="code-sign-in">Verification Code:</label>
                                <p class="control">
                                <input
                                    class="input"
                                    type="code"
                                    placeholder="Enter your Verification Code..."
                                    onChange={(e) => this.setVerificationCode(e.target.value)}
                                ></input>
                                </p>
                              </div>
                              <Button
                                onClick={() => this.checkRequest()}>
                                Verify Code
                              </Button>
                              <Button href="/driver_home" disabled ={this.state.status != '0'}>Go to Home Page</Button>
                          </div>
                      </div>
                  </div>
              </div>
          )
      }
  }

export default PageVerify;

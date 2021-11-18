import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class PageUserType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDriver: true,
      inputsDisabled: true,
      email: "",
      newPassword: "",
      waitingForID: true,
      driverID: null,
      sponsorID: null,
      incorrectEmail: false,
      passwordChanged: false,
    };
    this.handleDriverClick = this.handleDriverClick.bind(this);
    this.handleSponsorClick = this.handleSponsorClick.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setNewPassword = this.setNewPassword.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.getDriverID = this.getDriverID.bind(this);
    this.getSponsorID = this.getSponsorID.bind(this);
  }

  handleDriverClick() {
    this.setState({ isDriver: true, inputsDisabled: false });
  }

  handleSponsorClick() {
    this.setState({ isDriver: false, inputsDisabled: false });
  }

  setEmail(val) {
    this.setState({ email: val });
  }

  setNewPassword(val) {
    this.setState({ newPassword: val });
  }

  async getDriverID() {
    const driverDataResponse = await axios.post(
      "http://localhost:3001/get_driverID",
      {
        email: this.state.email,
      }
    );
    console.log(driverDataResponse);
    var driver_ID = null;
    if (driverDataResponse.data[0] != null) {
      driver_ID = driverDataResponse.data[0].Driver_ID;
      this.setState({ driverID: driver_ID, waitingForID: false });
      this.changePassword();
    } else {
      this.setState({ incorrectEmail: true, passwordChanged: false });
    }
  }

  async getSponsorID() {
    const sponsorDataResponse = await axios.post(
      "http://localhost:3001/get_sponsorID",
      {
        email: this.state.email,
      }
    );
    console.log(sponsorDataResponse);
    var sponsor_ID = null;
    if (sponsorDataResponse.data[0] != null) {
      sponsor_ID = sponsorDataResponse.data[0].Sponsor_ID;
      this.setState({ sponsorID: sponsor_ID, waitingForID: false });
      this.changePassword();
    } else {
      this.setState({ incorrectEmail: true, passwordChanged: false });
    }
  }

  async changePassword() {
    if (this.state.isDriver) {
      if (!this.state.waitingForID) {
        console.log("DriverID = " + this.state.driverID);
        const response = await axios.post(
          "http://localhost:3001/reset_password_driver",
          {
            driverID: this.state.driverID,
            email: this.state.email,
            type: "Driver reset",
            newPassword: this.state.newPassword,
          }
        );
        console.log(response);

        //send message that driver has changed their password
        const message_response = axios.post(
          "http://localhost:3001/send_message",
          {
            driverID: this.state.driverID,
            messageText: "Your password has been reset",
            messageType: "Password Reset",
          }
        );
      }
    } else {
      if (!this.state.waitingForID) {
        console.log("SponsorID = " + this.state.sponsorID);
        const response = await axios.post(
          "http://localhost:3001/reset_password_sponsor",
          {
            sponsorID: this.state.sponsorID,
            email: this.state.email,
            type: "Sponsor reset",
            newPassword: this.state.newPassword,
          }
        );
        console.log(response);
      }
    }
    this.setState({
      email: "",
      newPassword: "",
      waitingForID: true,
      driverID: null,
      sponsorID: null,
      incorrectEmail: false,
      passwordChanged: true,
      inputsDisabled: true,
    });
  }

  render() {
    return (
      <div class="container">
        <div class="columns is-centered">
          <div class="columns is-half">
            <div class="notification is-white py-3 my-6">
              <Button onClick={() => this.handleDriverClick()}>
                I am a Driver
              </Button>
              <Button onClick={() => this.handleSponsorClick()}>
                I am a Sponsor
              </Button>
              <div class="field">
                <label class="username-sign-in">Email:</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Enter email..."
                    onChange={(e) => this.setEmail(e.target.value)}
                    disabled={this.state.inputsDisabled}
                  ></input>
                </div>
              </div>
              <div class="field">
                <label class="password-sign-in">New password:</label>
                <p class="control">
                  <input
                    class="input"
                    type="password"
                    placeholder="Enter new password..."
                    onChange={(e) => this.setNewPassword(e.target.value)}
                    disabled={this.state.inputsDisabled}
                  ></input>
                </p>
              </div>
              <Button
                onClick={() => {
                  this.state.isDriver
                    ? this.getDriverID()
                    : this.getSponsorID();
                }}
                disabled={
                  this.state.inputsDisabled ||
                  this.state.email == "" ||
                  this.state.newPassword == ""
                }
              >
                Reset Password
              </Button>
              {this.state.incorrectEmail ? (
                <p style={{ color: "red" }}>Invalid email. Please try again</p>
              ) : null}
              {this.state.passwordChanged ? (
                <p style={{ color: "green" }}>Password was reset!</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

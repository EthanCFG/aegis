import React, { Component, useEffect, useState } from "react";
import "bulma/css/bulma.min.css";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class TableMessagesData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageData: this.fetchMessages(),
      loading: true,
    };
    this.fetchMessages = this.fetchMessages.bind(this);
  }

  async fetchMessages() {
    const message_response = await axios.post(
      "http://localhost:3001/get_messages",
      {
        driverID: localStorage.getItem("id"),
      }
    );
    this.setState({
      messageData: message_response.data.reverse(),
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return <tbody></tbody>;
    } else {
      return (
        <tbody>
          {this.state.messageData.map((item) => {
            const id = item.Message_ID;
            const type = item.Message_Type;
            const message = item.Message_Text;
            const received = item.Message_Time;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{type}</td>
                <td>{message}</td>
                <td>{received}</td>
              </tr>
            );
          })}
        </tbody>
      );
    }
  }
}

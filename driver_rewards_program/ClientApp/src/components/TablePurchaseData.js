import React, { Component, useEffect, useState } from "react";
import "bulma/css/bulma.min.css";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class TablePurchaseData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchaseData: this.fetchPurchases(),
      loading: true,
    };
    this.fetchPurchases = this.fetchPurchases.bind(this);
    this.cancelPurchase = this.cancelPurchase.bind(this);
    this.addPoints = this.addPoints.bind(this);
  }

  async fetchPurchases() {
    const purchase_response = await axios.post(
      "http://localhost:3001/get_cart",
      {
        driverID: localStorage.getItem("id"),
      }
    );
    this.setState({
      purchaseData: purchase_response.data.reverse(),
      loading: false,
    });
  }

  async cancelPurchase(id, price) {
    window.location.reload(false);
    this.addPoints(price);
    const cancel_response = await axios.post(
      "http://localhost:3001/cancel_purchase",
      {
        purchaseID: id,
      }
    );
  }

  async addPoints(price) {
    const url =
      "http://localhost:3001/add_driver_points" +
      localStorage.getItem("orgactive_ID");
    console.log(url);

    console.log("updating activepoints");
    localStorage.setItem(
      "activepoints",
      Number(localStorage.getItem("activepoints")) + price
    );

    window.location.reload(false);

    const response = await axios.post(url, {
      pointChange: price,
      driverID: localStorage.getItem("id"),
      organizationID: localStorage.getItem("orgactive_ID"),
      reason: "Cancelled purchase",
    });
  }

  render() {
    if (this.state.loading) {
      return <tbody></tbody>;
    } else {
      return (
        <tbody>
          {this.state.purchaseData.map((item) => {
            const id = item.Purchase_ID;
            const name = item.Purchase_Name;
            const price = item.Purchase_Price;
            const status = item.Purchase_Status;
            const time = item.Purchase_Time;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{status}</td>
                <td>{time}</td>
                <td>
                  <button
                    class="btn-primary"
                    onClick={() => this.cancelPurchase(id, price)}
                    disabled={status != "In cart"}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      );
    }
  }
}

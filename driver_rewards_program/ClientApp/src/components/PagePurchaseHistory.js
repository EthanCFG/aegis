import React, { Component } from "react";
import TablePurchaseHistory from "./TablePurchaseHistory";

export default class PageUserLogs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-9">
              <div class="notification logs-notification is-white py-6 my-6">
                <section>
                  <div>
                    <div class="container">
                      <h1 class="title">Purchase History</h1>
                    </div>
                  </div>
                </section>
                <div class="columns">
                  <div class="column is-6 py-6">
                    <TablePurchaseHistory></TablePurchaseHistory>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

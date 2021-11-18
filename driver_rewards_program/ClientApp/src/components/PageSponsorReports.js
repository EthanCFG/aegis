import React, { Component } from "react";
import TablePointTracking from "./TablePointTracking";

export default class PageSponsorReports extends Component {
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
              <div class="notification logs-table is-white py-6 my-6">
                <section>
                  <div>
                    <div class="container">
                      <h1 class="title">Driver Point Tracking</h1>
                    </div>
                  </div>
                </section>
                <div class="columns">
                  <div class="column is-8 py-6">
                    <TablePointTracking></TablePointTracking>
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

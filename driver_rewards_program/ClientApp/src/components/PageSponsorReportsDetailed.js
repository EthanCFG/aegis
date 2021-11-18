import React, { Component } from "react";
import TablePointTrackingDetailed from "./TablePointTrackingDetailed";

export default class PageSponsorReportsDetailed extends Component {
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
                      <h1 class="title">
                        Driver #{localStorage.getItem("report_driverID")}: Point
                        Change History
                      </h1>
                    </div>
                  </div>
                </section>
                <div class="columns">
                  <div class="column is-8 py-6">
                    <TablePointTrackingDetailed></TablePointTrackingDetailed>
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

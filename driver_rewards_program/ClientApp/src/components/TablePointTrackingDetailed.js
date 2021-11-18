import React, { Component, useState } from "react";
import "bulma/css/bulma.min.css";
import TablePointTrackingData from "./TablePointTrackingData";

function TablePointTrackingDetailed() {
  const [ascendingOrder, setAscendingOrder] = useState(false);

  return (
    <div class="logs-scroll-table2">
      <table class="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Value</th>
            <th>Reason</th>
          </tr>
        </thead>
        <TablePointTrackingData
          setAscending={setAscendingOrder}
        ></TablePointTrackingData>
      </table>
    </div>
  );
}

export default TablePointTrackingDetailed;

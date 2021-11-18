import React, { Component, useState } from "react";
import "bulma/css/bulma.min.css";
import TableDriverData from "./TableDriverData";

function TablePointTracking() {
  const [ascendingOrder, setAscendingOrder] = useState(false);

  return (
    <div class="logs-scroll-table2">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Point Balance</th>
            <th></th>
          </tr>
        </thead>
        <TableDriverData setAscending={setAscendingOrder}></TableDriverData>
      </table>
    </div>
  );
}

export default TablePointTracking;

import React, { Component, useState } from "react";
import "bulma/css/bulma.min.css";
import TablePurchaseData from "./TablePurchaseData";

function TableUserLogs() {
  const [ascendingOrder, setAscendingOrder] = useState(false);

  return (
    <div class="logs-scroll-table">
      <table class="table">
        <thead>
          <tr>
            <th>Purchase ID</th>
            <th>Name</th>
            <th>Points</th>
            <th>Status</th>
            <th>Purchase Time</th>
          </tr>
        </thead>
        <TablePurchaseData setAscending={setAscendingOrder}></TablePurchaseData>
      </table>
    </div>
  );
}

export default TableUserLogs;

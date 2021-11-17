import React, { Component, useState } from "react";
import "bulma/css/bulma.min.css";
import TableMessagesData from "./TableMessagesData";

function TableMessages() {
  const [ascendingOrder, setAscendingOrder] = useState(false);

  return (
    <div class="logs-scroll-table2">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Message</th>
            <th>Received</th>
          </tr>
        </thead>
        <TableMessagesData setAscending={setAscendingOrder}></TableMessagesData>
      </table>
    </div>
  );
}

export default TableMessages;

import React, { Component, useState } from 'react';
import 'bulma/css/bulma.min.css';
import TableUserData from './TableUserData'

function TableUserLogs () {

	const [activeLoginID, setActiveLoginID] = useState()
    const [ascendingOrder, setAscendingOrder] = useState(false)

    return (
		<div class="logs-scroll-table">
        	<table class="table">
					<thead>
                        <tr>
                        <th>Attempt ID</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Date</th>
                        </tr>
					</thead>
					<TableUserData setLogin={setActiveLoginID} setAscending={setAscendingOrder}></TableUserData>
				</table>
		</div>
    )
}

export default TableUserLogs;
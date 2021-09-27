import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom'; 

function TableSponsorDrivers () {
    return (
        <table class="table">
					<thead>
							<tr>
							<th>Driver No.</th>
							<th>Full Name</th>
							<th>Email</th>
							<th>Points</th>
							<th>Add/Remove Points</th>
							</tr>
					</thead>
					<tbody>
						<tr>
							<th>1</th>
							<td>John Wick</td>
							<td>keanu@reeves.net</td>
							<td>5,000</td>
							<td></td>
						</tr>
					</tbody>
				</table>
    )
}

export default TableSponsorDrivers;
import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom'; 
import TableData from './TableData';

function TableSponsorDrivers (props) {
	/*const displayRows = () => {
		for (let i = 0; i < props.data.length; i++) {
			return (<tbody>
				<tr>
					<th>{props.data[i].Driver_ID}</th>
					<td>{props.data[i].Driver_First_Name} {props.data[i].Driver_Last_Name}</td>
					<td>{props.data[i].Driver_Email}</td>
					<td>{props.data[i].Driver_Points1}</td>
					<td></td>
				</tr>
			</tbody>)
		}
	}*/

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
					<TableData id={props.id} first={props.first} last={props.last} email={props.email} points={props.points}></TableData>
				</table>
    )
}

export default TableSponsorDrivers;
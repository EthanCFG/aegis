import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom'; 

function TableData(props) {
    let html_rows = [];

	for (let i = 0; i < props.id.length; i++) {
        html_rows.push(
            <tbody>
                <tr>
                    <th>{props.id[i]}</th>
                    <td>{props.first[i]} {props.last[i]}</td>
                    <td>{props.email[i]}</td>
                    <td>{props.points[i]}</td>
                    <td></td>
                </tr>
            </tbody>
        )
    }
    
    return (
        html_rows
    )
}

export default TableData;
import React, { Component, useState } from 'react';
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom'; 
import TableData from './TableData';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';


function TableSponsorDrivers (props) {

	const [showAddModal, setShowAddModal] = useState(false)

	const [showRemoveModal, setShowRemoveModal] = useState(false)

	const [showSubModal, setShowSubModal] = useState(false)

	const [sponsorToRemove, setSponsorToRemove] = useState()

	const [activeDriverID, setActiveDriverID] = useState()

	const [pointsToAdd, setPointsToAdd] = useState()

	const [reasonToAdd, setReasonToAdd] = useState()

	const [Organization, setOrganization] = useState()

	const [dataChanged, setDataChanged] = useState(false);


	const removeDriver = () => {
		console.log(sponsorToRemove);
		if(sponsorToRemove == 1) {
			axios.post("http://localhost:3001/remove_sponsor1_from_driver", {
				driver_id: activeDriverID
			})
		}
		else if (sponsorToRemove == 2) {
			axios.post("http://localhost:3001/remove_sponsor2_from_driver", {
				driver_id: activeDriverID
			})
		}
		else if (sponsorToRemove == 3) {
			axios.post("http://localhost:3001/remove_sponsor3_from_driver", {
				driver_id: activeDriverID
			})
		}
	}

	const addPoints = () => {
		console.log(Organization);
		if(Organization == 1) {
			axios.post("http://localhost:3001/add_driver_points1", {
				pointChange: pointsToAdd,
				driverID: activeDriverID,
				organizationID: localStorage.getItem('orgid'),
				date: 'tuesday',
				reason: reasonToAdd
			})
		}
		else if (Organization == 2) {
			axios.post("http://localhost:3001/add_driver_points2", {
				pointChange: pointsToAdd,
				driverID: activeDriverID,
				organizationID: localStorage.getItem('orgid'),
				date: 'tuesday',
				reason: reasonToAdd
			})
		}
		else if (Organization == 3) {
			axios.post("http://localhost:3001/add_driver_points3", {
				pointChange: pointsToAdd,
				driverID: activeDriverID,
				organizationID: localStorage.getItem('orgid'),
				date: 'tuesday',
				reason: reasonToAdd
			})
		}
	}

    return (
		<div class="scroll-table">
        	<table class="table">
					<div>
						<Modal show={showAddModal}>
							<Modal.Header closeButton>
								<Modal.Title>Add Points to Driver #{activeDriverID}</Modal.Title>
							</Modal.Header>
						<Modal.Body>
							<div class="control">
								<input class="input" type="text" placeholder="Enter how many points to add..." onChange={e => setPointsToAdd(e.target.value)}></input>
								<input class="input" type="text" placeholder="Reasoning" onChange={e => setReasonToAdd(e.target.value)}></input>
							</div>
						</Modal.Body>
							<Modal.Footer>
								<Button variant="secondary" onClick={() => setShowAddModal(false)}>
									Close
								</Button>
								<Button variant="primary" onClick={() => {addPoints(); if(dataChanged == true) {setDataChanged(false);}; if (dataChanged == false) {setDataChanged(true);}; setShowAddModal(false)}}>
									Add Points
								</Button>
							</Modal.Footer>
						</Modal>
						<Modal show={showRemoveModal}>
							<Modal.Header closeButton>
								<Modal.Title>Remove Driver #{activeDriverID} from Sponsorship?</Modal.Title>
							</Modal.Header>
							<Modal.Footer>
								<Button variant="secondary" onClick={() => setShowRemoveModal(false)}>
									No
								</Button>
								<Button variant="primary" onClick={() => {removeDriver(); if(dataChanged == true) {setDataChanged(false);}; if (dataChanged == false) {setDataChanged(true);}; setShowRemoveModal(false)}}>
									Yes
								</Button>
							</Modal.Footer>
						</Modal>
					</div>
					<thead>
							<tr>
							<th>Driver No.</th>
							<th>Full Name</th>
							<th>Email</th>
							<th>Points</th>
							<th>Add/Remove Points</th>
							</tr>
					</thead>
					<TableData setAddModal={setShowAddModal} setSubModal={setShowSubModal} setRemoveModal={setShowRemoveModal} setRemovedSponsor={setSponsorToRemove} setDriver={setActiveDriverID} setOrg={setOrganization} dataStatus={dataChanged}></TableData>
			</table>
		</div>
    )
}

export default TableSponsorDrivers;
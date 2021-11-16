import React, { Component, useState } from 'react';
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom';
import TableAllDriversData from './TableAllDriversData';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';


function TableAllDrivers(props) {

    const [showAddModal, setShowAddModal] = useState(false)

    const [showSubModal, setShowSubModal] = useState(false)

    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const [activeDriverID, setActiveDriverID] = useState()

    const [pointsToAdd, setPointsToAdd] = useState()

    const [reasonToAdd, setReasonToAdd] = useState()

    const [Organization1, setOrganization1] = useState()

    const [Organization2, setOrganization2] = useState()

    const [Organization3, setOrganization3] = useState()

    const [dataChanged, setDataChanged] = useState(false);

    const handleCloseAdd = () => setShowAddModal(false);

    const deleteDriver = () => {
        axios.post("http://localhost:3001/delete_driver", {
            id: activeDriverID
        })
    }

    const addPoints = (chosenOrg) => {
        if (chosenOrg == 1) {
            axios.post("http://localhost:3001/add_driver_points1", {
                pointChange: pointsToAdd,
                driverID: activeDriverID,
                organizationID: Organization1,
                reason: reasonToAdd
            })
        }
        else if (chosenOrg == 2) {
            axios.post("http://localhost:3001/add_driver_points2", {
                pointChange: pointsToAdd,
                driverID: activeDriverID,
                organizationID: Organization2,
                reason: reasonToAdd
            })
        }
        else if (chosenOrg == 3) {
            axios.post("http://localhost:3001/add_driver_points3", {
                pointChange: pointsToAdd,
                driverID: activeDriverID,
                organizationID: Organization3,
                reason: reasonToAdd
            })
        }
    }

    return (
        <div class="scroll-table">
            <table class="table">
                <div>
                    <Modal show={showAddModal} onHide={handleCloseAdd}>
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
                            <Button variant="secondary" onClick={handleCloseAdd}>
                                Close
                            </Button>
                            {Organization1 ? <Button variant="primary" onClick={() => { addPoints(1); if (dataChanged == true) { setDataChanged(false); }; if (dataChanged == false) { setDataChanged(true); }; handleCloseAdd() }}>
                                Add Points to Sponsor 1
                            </Button> : null}
                            {Organization2 ? <Button variant="primary" onClick={() => { addPoints(2); if (dataChanged == true) { setDataChanged(false); }; if (dataChanged == false) { setDataChanged(true); }; handleCloseAdd() }}>
                                Add Points to Sponsor 2
                            </Button> : null}
                            {Organization3 ? <Button variant="primary" onClick={() => { addPoints(3); if (dataChanged == true) { setDataChanged(false); }; if (dataChanged == false) { setDataChanged(true); }; handleCloseAdd() }}>
                                Add Points to Sponsor 3
                            </Button> : null}
                        </Modal.Footer>
                    </Modal>
                    <Modal show={showDeleteModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Remove Driver #{activeDriverID} from Sponsorship?</Modal.Title>
                        </Modal.Header>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                                No
                            </Button>
                            <Button variant="primary" onClick={() => {deleteDriver(); if(dataChanged == true) {setDataChanged(false);}; if (dataChanged == false) {setDataChanged(true);}; setShowDeleteModal(false)}}>
                                Yes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <thead>
                    <tr>
                        <th>Driver #</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Sponsor 1</th>
                        <th>Points 1</th>
                        <th>Sponsor 2</th>
                        <th>Points 2</th>
                        <th>Sponsor 3</th>
                        <th>Points 3</th>
                        <th>Add/Remove Points</th>
                    </tr>
                </thead>
                <TableAllDriversData setAddModal={setShowAddModal} setSubModal={setShowSubModal} setDeleteModal={setShowDeleteModal} setDriver={setActiveDriverID} setOrg1={setOrganization1} setOrg2={setOrganization2} setOrg3={setOrganization3} dataStatus={dataChanged}></TableAllDriversData>
            </table>
        </div>
    )
}

export default TableAllDrivers;
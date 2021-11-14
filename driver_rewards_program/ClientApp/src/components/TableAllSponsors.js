import React, { Component, useState } from 'react';
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom';
import TableAllSponsorsData from './TableAllSponsorsData';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';


/*const fetch_drivers = async () => {
    const drivers_list_response = await axios.post("http://localhost:3001/get_drivers", {
        organizationID1: localStorage.getItem('sponsorid'),
        organizationID2: localStorage.getItem('sponsorid'),
        organizationID3: localStorage.getItem('sponsorid')
    })
	
    console.log(drivers_list_response);
    return drivers_list_response;
}*/

function TableAllSponsors(props) {

    const [showAddModal, setShowAddModal] = useState(false)

    const [showSubModal, setShowSubModal] = useState(false)

    const [activeDriverID, setActiveDriverID] = useState()

    const [pointsToAdd, setPointsToAdd] = useState()

    const [reasonToAdd, setReasonToAdd] = useState()

    const [Organization, setOrganization] = useState()

    const [dataChanged, setDataChanged] = useState(false);

    const handleCloseAdd = () => setShowAddModal(false);

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
                        </Modal.Footer>
                    </Modal>
                </div>
                <thead>
                    <tr>
                        <th>Sponsor #</th>
                        <th>Organization #</th>
                        <th>Full Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <TableAllSponsorsData setAddModal={setShowAddModal} setSubModal={setShowSubModal} setDriver={setActiveDriverID} setOrg={setOrganization} dataStatus={dataChanged}></TableAllSponsorsData>
            </table>
        </div>
    )
}

export default TableAllSponsors;
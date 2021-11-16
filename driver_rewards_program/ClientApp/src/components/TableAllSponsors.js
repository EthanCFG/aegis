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

    const [showModal, setShowModal] = useState(false)

    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const [activeSponsorID, setActiveSponsorID] = useState()

    const [pointsToAdd, setPointsToAdd] = useState()

    const [reasonToAdd, setReasonToAdd] = useState()

    const [Organization, setOrganization] = useState()

    const [dataChanged, setDataChanged] = useState(false);

    const handleCloseModal = () => setShowModal(false);

    const deleteSponsor = () => {
        axios.post("http://localhost:3001/delete_sponsor_user", {
            id: activeSponsorID
        })
    }

    return (
        <div class="scroll-table">
            <table class="table">
                <div>
                    <Modal show={showModal} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Manage Sponsor #{activeSponsorID}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div class="control">
                                <input class="input" type="text" placeholder="Enter how many points to add..." onChange={e => setPointsToAdd(e.target.value)}></input>
                                <input class="input" type="text" placeholder="Reasoning" onChange={e => setReasonToAdd(e.target.value)}></input>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <Modal show={showDeleteModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Remove Sponsor #{activeSponsorID} from Sponsorship?</Modal.Title>
                        </Modal.Header>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                                No
                            </Button>
                            <Button variant="primary" onClick={() => {deleteSponsor(); if(dataChanged == true) {setDataChanged(false);}; if (dataChanged == false) {setDataChanged(true);}; setShowDeleteModal(false)}}>
                                Yes
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
                        <th>Manage Sponsor</th>
                    </tr>
                </thead>
                <TableAllSponsorsData setModal={setShowModal} setDeleteModal={setShowDeleteModal} setSponsor={setActiveSponsorID} setOrg={setOrganization} dataStatus={dataChanged}></TableAllSponsorsData>
            </table>
        </div>
    )
}

export default TableAllSponsors;
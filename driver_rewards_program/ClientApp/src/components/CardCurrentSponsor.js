import axios from "axios";
import React, {Component, useState} from "react";
import { Modal, Button } from 'react-bootstrap';

function CardCurrentSponsor (props) {

    const [displayModal, setDisplayModal] = useState(false);

    /*const handleRemoveSponsor = () => {
        if (localStorage.getItem('orgactive') == )
        axios.post("remove_sponsor_from_driver", {

        })
    }*/

    return (
        <div class="card">
            <Modal show={displayModal} >
							<Modal.Header closeButton>
								<Modal.Title>Remove Sponsor: {localStorage.getItem('orgactive')}</Modal.Title>
							</Modal.Header>
						<Modal.Body>
                            <h1>Removing Sponsor. Are you sure?</h1>
						</Modal.Body>
							<Modal.Footer>
								<Button variant="secondary" onClick={() => setDisplayModal(false)}>
									No
								</Button>
								<Button variant="primary">
									Yes
								</Button>
							</Modal.Footer>
						</Modal>
            <header class="card-header">
                <p class="card-header-title">
                Current Sponsor
                </p>
                <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </header>
            <div class="card-content">
                <div class="content">
                    <img src={props.sponsor_image_url}></img>
                    <br></br>
                </div>
            </div>
            <div class="card-content has-text-centered">
              <h1><strong>{props.sponsor}</strong></h1>
            </div>
            <footer class="card-footer">
              <a class="card-footer-item" onClick={() => setDisplayModal(true)}>Remove</a>
              <a href="#" class="card-footer-item">Visit Sponsor</a>
            </footer>
        </div>
    )
}

export default CardCurrentSponsor;
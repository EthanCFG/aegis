import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function UserTypeSelect () {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <ButtonToolbar size="lg" className="mb-2">
                <Button variant="primary" className="btn-primary">Driver</Button>
                <Button variant="primary" className="btn-primary">Sponsor</Button>
            </ButtonToolbar>
        </div>
    )
}

export default UserTypeSelect;
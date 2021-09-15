import React, {Component} from "react";
import Button from 'react-bootstrap/Button';

function SelectSponsor () {
    return (
        <div>
            <Button variant="primary" class="btn-user-type"
            style={{
                marginBottom: 10
            }}>Sponsor</Button>
        </div>
    )
}

export default SelectSponsor;
import React, {Component} from "react";
import Button from 'react-bootstrap/Button';

function SelectDriver () {
    return (
        <div>
            <Button variant="primary" class="btn-user-type"
            style={{
                marginBottom: 10
            }}>Driver</Button>
        </div>
    )
}

export default SelectDriver;
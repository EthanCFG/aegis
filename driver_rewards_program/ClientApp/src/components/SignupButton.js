import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function SignupButton () {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 6,
            marginBottom: 6,
        }}>
            <Link to="/home">
                <Button>Sign Up</Button>
            </Link>
        </div>
    )
}

export default SignupButton;
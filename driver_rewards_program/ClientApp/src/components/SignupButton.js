import React, {Component} from "react";
import Button from 'react-bootstrap/Button';

function SignupButton () {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 6,
            marginBottom: 6,
        }}>
            <Button>Sign Up</Button>
        </div>
    )
}

export default SignupButton;
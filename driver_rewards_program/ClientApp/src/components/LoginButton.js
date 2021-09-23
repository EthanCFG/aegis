import React, {Component} from "react";
import Button from 'react-bootstrap/Button';

function LoginButton () {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 6,
            marginBottom: 6,
        }}>
            <Button>Login</Button>
        </div>
    )
}

export default LoginButton;
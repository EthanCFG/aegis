import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; 

function LoginButton () {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 6,
            marginBottom: 6,
        }}>
            <Link to="/home">
                <Button>Login</Button>
            </Link>
        </div>
    )
}

export default LoginButton;
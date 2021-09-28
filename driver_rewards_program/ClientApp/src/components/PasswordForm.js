import React, {Component, useState} from "react";
import Form from 'react-bootstrap/Form'

function PasswordForm () {
    
    const [enteredPassword, setEnteredPassword] = useState('');
     
		const passwordChangeHandler = (event) => {
      setEnteredPassword(event.target.value);
		}	

    return (
			<div style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}>
				<Form>
						<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password:</Form.Label>
						<Form.Control type="password" placeholder="Choose a password..." onChange={passwordChangeHandler} />
						</Form.Group> 
				</Form>
		</div>
    )
}

export default PasswordForm;
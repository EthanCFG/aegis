import React, { Component, useState, useRef } from 'react';
import 'bulma/css/bulma.min.css';
import { Link, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom';

/*async function loginUser(credentials) {
	return fetch('http://localhost:3001/welcome', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(credentials)
	})
	.then(data => data.json())
	.catch(error => console.log(error))
}*/

function PageWelcome ({ setToken }) {

	let history = useHistory();

	const [enteredEmail, setEmail] = useState();
	const [enteredPassword, setPassword] = useState();

	const handleSubmit = async e => {
		e.preventDefault();

		var token = false;

		const driver_response = await axios.post("http://localhost:3001/login_driver", {
			email: enteredEmail,
			password: enteredPassword
		})

		const sponsor_response = await axios.post("http://localhost:3001/login_sponsor", {
			email: enteredEmail,
			password: enteredPassword
		})

		console.log(driver_response.data[0]);

		if (driver_response.data[0] != null) {
			console.log('entered driver response');
			localStorage.setItem('id', driver_response.data[0].Driver_ID);
			localStorage.setItem('email', driver_response.data[0].Driver_Email);
			localStorage.setItem('first', driver_response.data[0].Driver_First_Name);
			localStorage.setItem('last', driver_response.data[0].Driver_Last_Name);
			localStorage.setItem('address', driver_response.data[0].Driver_Address);
			localStorage.setItem('city', driver_response.data[0].Driver_City);
			localStorage.setItem('state', driver_response.data[0].Driver_State);
			localStorage.setItem('zip', driver_response.data[0].Driver_Zip);
			localStorage.setItem('points', driver_response.data[0].Driver_Point_Balance);
			//var tempShit = localStorage.getItem('state');
			//console.log(tempShit);
			setToken(token);
			history.push('/driver_home');
		}

		else if (sponsor_response.data[0] != null) {
			console.log('entered sponsor response');
			localStorage.setItem('id', sponsor_response.data[0].Sponsor_ID);
			localStorage.setItem('email', sponsor_response.data[0].Sponsor_Email);
			localStorage.setItem('first', sponsor_response.data[0].Sponsor_First_Name);
			localStorage.setItem('last', sponsor_response.data[0].Sponsor_Last_Name);
			setToken(token);
			history.push('/sponsor_home');
		}

	}

    return (
		
			<div class="container">
			<div class="columns is-centered welcome-vertical-alignment">
				<div class="columns is-half">
					<div class="column">
							<div class="notification is-white py-3 my-6">
									<img id="welcome-logo" src="https://1.bp.blogspot.com/-5uFQq0w64Hg/YVC6wgzpm0I/AAAAAAAAAAU/5q9okcQ4FJgFogvA0oQsauC85fo7mqDBwCLcBGAsYHQ/s841/Aegis%2BLogo%2BTemp%2BCopy.png"></img>
									<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
									<div class="field">
									<label class="username-sign-in">Email:</label>
									<div class="control">
											<input class="input" type="text" placeholder="Enter email..." onChange={e => setEmail(e.target.value)}></input>
										</div>
									</div>
									<div class="field">
										<label class="password-sign-in">Password:</label>
										<p class="control">
											<input class="input" type="password" placeholder="Enter password..." onChange={e => setPassword(e.target.value)}></input>
										</p>
									</div>
									<div class="columns is-centered">
										<form onSubmit={handleSubmit}>
											<button type='submit' class="button is-info my-3">Sign In</button>
										</form>
									</div>
									<div class="block py-4">
											<div class="columns is-centered">
													Don't have an account?{' '}<Link to="/user_type">Sign up!</Link>
											</div>
									</div>
						</div>
				</div>
				</div>
			</div>
			</div>

    )
}

PageWelcome.propTypes = {
	setToken: PropTypes.func.isRequired
}

export default PageWelcome;
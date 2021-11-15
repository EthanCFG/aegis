import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types'


function PageWelcome ({ setToken }) {

	let history = useHistory();

	localStorage.setItem('usertype', 'none');

	const [enteredEmail, setEmail] = useState();
	const [enteredPassword, setPassword] = useState();
	const [displayError, setDisplayError] = useState(false);

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

		const admin_response = await axios.post("http://localhost:3001/login_admin", {
			email: enteredEmail,
			password: enteredPassword
		})

		const org_list_response = await axios.get("http://localhost:3001/list_of_orgs");

		let organization_list = [];
		for (let i = 0; i < org_list_response.data.length; i++) {
			organization_list.push(org_list_response.data[i].Organization_Name);
		}

		if (driver_response.data[0] != null) {
			localStorage.setItem('usertype', 'driver');
			localStorage.setItem('id', driver_response.data[0].Driver_ID);
			localStorage.setItem('email', driver_response.data[0].Driver_Email);
			localStorage.setItem('first', driver_response.data[0].Driver_First_Name);
			localStorage.setItem('last', driver_response.data[0].Driver_Last_Name);
			localStorage.setItem('address', driver_response.data[0].Driver_Address);
			localStorage.setItem('city', driver_response.data[0].Driver_City);
			localStorage.setItem('state', driver_response.data[0].Driver_State);
			localStorage.setItem('zip', driver_response.data[0].Driver_Zip);
			localStorage.setItem('orgid1', driver_response.data[0].Organization_ID1);
			localStorage.setItem('orgid2', driver_response.data[0].Organization_ID2);
			localStorage.setItem('orgid3', driver_response.data[0].Organization_ID3);

			axios.post("http://localhost:3001/log_successful_login", {
				email: driver_response.data[0].Driver_Email
			})

			const org1_response = await axios.post("http://localhost:3001/get_org1", {
			org1: localStorage.getItem('orgid1')
			})

			const org2_response = await axios.post("http://localhost:3001/get_org2", {
				org2: localStorage.getItem('orgid2')
			})

			const org3_response = await axios.post("http://localhost:3001/get_org3", {
					org3: localStorage.getItem('orgid3')
			})

			if (org1_response.data[0] != null) {
				localStorage.setItem('orgname1', org1_response.data[0].Organization_Name);
				localStorage.setItem('orgactive', org1_response.data[0].Organization_Name);
			}
			else {
				localStorage.setItem('orgname1', null);
				localStorage.setItem('orgactive', null);
			}
			if (org2_response.data[0] != null) {
				localStorage.setItem('orgname2', org2_response.data[0].Organization_Name);
			}
			else {
				localStorage.setItem('orgname2', null);
			}
			if (org3_response.data[0] != null) {
				localStorage.setItem('orgname3', org3_response.data[0].Organization_Name);
			}
			else {
				localStorage.setItem('orgname3', null);
			}
			localStorage.setItem('orglist', JSON.stringify(organization_list));
			localStorage.setItem('points1', driver_response.data[0].Driver_Points1);
			localStorage.setItem('points2', driver_response.data[0].Driver_Points2);
			localStorage.setItem('points3', driver_response.data[0].Driver_Points3);
			localStorage.setItem('activepoints', driver_response.data[0].Driver_Points1);
			setToken(token);
			history.push('/driver_home');
		}

		else if (sponsor_response.data[0] != null) {

			axios.post("http://localhost:3001/log_successful_login", {
				email: sponsor_response.data[0].Sponsor_Email
			})

			localStorage.setItem('usertype', 'sponsor');
			localStorage.setItem('sponsorid', sponsor_response.data[0].Sponsor_ID);
			localStorage.setItem('orgid', sponsor_response.data[0].Organization_ID);

			for (let i = 0; i < org_list_response.data.length; i++) {
				if (org_list_response.data[i].Organization_ID == sponsor_response.data[0].Organization_ID) { 
					localStorage.setItem('sponsorname', org_list_response.data[i].Organization_Name);
				}
			}

			const drivers_list_response = await axios.post("http://localhost:3001/get_drivers", {
				organizationID1: localStorage.getItem('orgid'),
				organizationID2: localStorage.getItem('orgid'),
				organizationID3: localStorage.getItem('orgid')
			})

			let drivers_ids = [];
			let drivers_first = [];
			let drivers_last = [];
			let drivers_email = [];
			let drivers_points = [];
			for (let i = 0; i < drivers_list_response.data.length; i++) {
				drivers_ids.push(drivers_list_response.data[i].Driver_ID);
				drivers_first.push(drivers_list_response.data[i].Driver_First_Name);
				drivers_last.push(drivers_list_response.data[i].Driver_Last_Name);
				drivers_email.push(drivers_list_response.data[i].Driver_Email);
				drivers_points.push(drivers_list_response.data[i].Driver_Points1);
			}

			localStorage.setItem('driversid', JSON.stringify(drivers_ids));
			localStorage.setItem('driversfirst', JSON.stringify(drivers_first));
			localStorage.setItem('driverslast', JSON.stringify(drivers_last));
			localStorage.setItem('driversemail', JSON.stringify(drivers_email));
			localStorage.setItem('driverspoints', JSON.stringify(drivers_points));

			localStorage.setItem('sponsoremail', sponsor_response.data[0].Sponsor_Email);
			localStorage.setItem('sponsorfirst', sponsor_response.data[0].Sponsor_First_Name);
			localStorage.setItem('sponsorlast', sponsor_response.data[0].Sponsor_Last_Name);
			setToken(token);
			history.push('/sponsor_home');
		}

		else if (admin_response.data[0] != null) {

			axios.post("http://localhost:3001/log_successful_login", {
				email: admin_response.data[0].Admin_Email
			})

			localStorage.setItem('usertype', 'admin');

			console.log(localStorage.getItem('usertype'));

			const all_drivers_response = await axios.post("http://localhost:3001/get_all_drivers");

			console.log(all_drivers_response);
			setToken(token);
			history.push('/admin_home');
		}

		else {
			axios.post("http://localhost:3001/log_unsuccessful_login", {
				email: enteredEmail
			})

			setDisplayError(true);
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
										{displayError ? <p style={{color:"red"}}>Incorrect email / password combination.</p> : null}
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
  setToken: PropTypes.func.isRequired,
};

export default PageWelcome;

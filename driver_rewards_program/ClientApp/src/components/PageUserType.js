import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; 


function PageUserType() {
	return (
	<div class="container">
		<div class="columns is-centered">
			<div class="columns is-half">
				<div class="notification is-white py-3 my-6">
					<Link to="/driver_signup">
						<Button>I am a Driver</Button>
					</Link>
					<Link to="/sponsor_signup">
						<Button>I am a Sponsor</Button>
					</Link>
				</div>
			</div>
		</div>
	</div>
	)
}

export default PageUserType;
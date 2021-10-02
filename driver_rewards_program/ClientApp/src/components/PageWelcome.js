import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom'; 

function PageWelcome () {
    return (
        <div class="container">
          <div class="columns is-centered welcome-vertical-alignment">
            <div class="columns is-half">
							<div class="column">
									<div class="notification is-white py-3 my-6">
											<img id="welcome-logo" src="https://1.bp.blogspot.com/-5uFQq0w64Hg/YVC6wgzpm0I/AAAAAAAAAAU/5q9okcQ4FJgFogvA0oQsauC85fo7mqDBwCLcBGAsYHQ/s841/Aegis%2BLogo%2BTemp%2BCopy.png"></img>
											<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
											<div class="field">
  											<label class="username-sign-in">Username / Email:</label>
  											<div class="control">
													<input class="input" type="text" placeholder="Enter username / email..."></input>
												</div>
											</div>
											<div class="field">
												<label class="password-sign-in">Password:</label>
												<p class="control">
													<input class="input" type="password" placeholder="Enter password..."></input>
												</p>
											</div>
											<div class="columns is-centered">
												<Link to="/driver_home" style={{ textDecoration: 'none' }}>
													<button class="button is-info my-3">Sign In</button>
												</Link>
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

export default PageWelcome;
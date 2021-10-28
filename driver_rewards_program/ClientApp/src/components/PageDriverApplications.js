import React, { Component, useState } from 'react';
import StateDropDown from './StateDropDown';
import CityForm from './CityForm';
import ZipForm from './ZipCodeForm';
import PhoneNumberForm from './PhoneNumberForm';
import NavBarSponsor from './NavBarSponsor';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function PageDriverApplications (props) {

    return (
			<div>
				<NavBarSponsor></NavBarSponsor>
        <div class="container">
          <div class="columns is-centered">
            <div class="columns is-half">
              <div class="notification is-white py-3 my-6">
                <h1 class="signup-header py-2 is-size-3 has-text-weight-semibold" style={{
                  marginBottom: 30
                }}>Pending Driver Applications</h1>


              </div>
            </div>
        	</div>
        </div>
			</div>
    )
}

export default PageDriverApplications;
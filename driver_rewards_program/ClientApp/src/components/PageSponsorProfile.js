import React, { Component, useState, useEffect } from 'react';
import ProfilePicture from './ProfilePicture';
import NavBar from './NavBar';
import CardProfilePic from './CardProfilePic';
import CardTotalPoints from './CardTotalPoints';
import 'bulma/css/bulma.min.css';
import ProfilePictureSponsor from './ProfilePictureSponsor';
import FormDisplaySponsorData from './FormDisplaySponsorData';
import FormChangeSponsorData from './FormChangeSponsorData';
import NavBarSponsor from './NavBarSponsor';
import axios from 'axios';

function PageSponsorProfile() {

    const [editData, setEditData] = useState(false)

    const editButtonHandler = () => {
      setEditData(true);
    }

    const submitButtonHandler = () => {
      setEditData(false);
    }

    return (
      <div>
        <NavBarSponsor></NavBarSponsor>
        <div class="container">
          <div class="columns">
            <div class="column is-3">
              <div class="notification is-white py-6 my-6">
                <ProfilePictureSponsor></ProfilePictureSponsor>
                <CardTotalPoints></CardTotalPoints>
              </div>
            </div>
            <div class="column is-three-quarters">
              <div class="notification is-white py-6 my-6">
                <h1>Account Information:</h1>
                {editData ? <FormChangeSponsorData onSubmitPressed={submitButtonHandler}></FormChangeSponsorData> : <FormDisplaySponsorData onEditPressed={editButtonHandler}></FormDisplaySponsorData>}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PageSponsorProfile;
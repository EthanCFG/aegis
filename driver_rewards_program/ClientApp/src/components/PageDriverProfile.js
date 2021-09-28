import React, { Component } from 'react';
import ProfilePicture from './ProfilePicture';
import NavBar from './NavBar';
import CardTotalPoints from './CardTotalPoints';
import 'bulma/css/bulma.min.css';
import ProfilePictureSponsor from './ProfilePictureSponsor';

function PageDriverProfile(props) {
    return (
      <div>
        <NavBar pic={props.pic}></NavBar>
        <div class="container">
          <div class="columns">
            <div class="column is-3">
              <div class="notification is-white py-6 my-6">
                <ProfilePicture pic={props.pic}></ProfilePicture>
                <CardTotalPoints points={props.points}></CardTotalPoints>
              </div>
            </div>
            <div class="column is-three-quarters">
              <div class="notification is-white py-6 my-6">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PageDriverProfile;
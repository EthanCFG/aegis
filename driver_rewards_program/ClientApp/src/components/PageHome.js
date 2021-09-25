import React, { Component } from 'react';
import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';
import LoginButton from './LoginButton';
import ProfilePicture from './ProfilePicture';

function PageHome () {
    return (
        <div class="container is-fluid">
          <div class="colums is-centered">
            <div class="columns is-half">
              <div class="notification is-white py-6 my-6">
                <div class="columns is-one-third">
                 <ProfilePicture></ProfilePicture>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default PageHome;
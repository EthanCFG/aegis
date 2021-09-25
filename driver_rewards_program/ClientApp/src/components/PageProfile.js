import React, { Component } from 'react';
import ProfilePicture from './ProfilePicture';
import NavBar from './NavBar';
import 'bulma/css/bulma.min.css';

function PageProfile() {
    return (
        <div>
            <NavBar></NavBar>
            <div class="container is-widescreen">
                <div class="notification is-white py-6 my-6">
                    <ProfilePicture></ProfilePicture>
                </div>
            </div>
        </div>
    )
}

export default PageProfile;
import React, { Component } from 'react';
import ProfilePicture from './ProfilePicture';

function DriverHomeSideBar () {
    return (

        //Top layer of sidebar
        <div>
          <div class="container is-centered">
            <div class="columns is-centered">
              <div class="notification is-white py-6 my-6">
                <div class="columns">
                  <div class="column is-4">
                    <div class="content">
                        <h1>Welcome, Jerry!</h1>
                    </div>
                  </div>
                  <div class="column is-8">
                    <div class="content">
                      <h1>Current Sponsor: NBC</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
    )
}

export default DriverHomeSideBar;
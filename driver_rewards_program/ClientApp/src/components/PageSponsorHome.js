import React, { Component } from 'react';
import ProfilePicture from './ProfilePicture';
import DriverHomeSideBar from './DriverHomeSideBar';
import CardCurrentSponsor from './CardCurrentSponsor';
import TableSponsorDrivers from './TableSponsorDrivers';
import NavBarSponsor from './NavBarSponsor';

function PageSponsorHome () {
    return (
      <div>
        <NavBarSponsor></NavBarSponsor>
        <div class="container">
          <div class="columns">
            <div class="column is-3">
              <div class="notification is-white py-6 my-6">
                <p class="menu-label">
                  General
                </p>
                <ul class="menu-list">
                  <li><a>Dashboard</a></li>
                  <li><a>Customers</a></li>
                  <li><a>Other</a></li>
                </ul>
              </div>
            </div>
            <div class="column is-9">
              <div class="notification is-white py-6 my-6">
                <section class="hero is-a-beautiful-sunset has-rounded-corners welcome is-small">
                  <div class="hero-body">
                    <div class="container">
                      <h1 class="title">
                        Hello, Sponsor.
                      </h1>
                      <h2 class="subtitle">
                        I hope you are having a great day!
                      </h2>
                    </div>
                  </div>
                </section>
                <div class="columns">
                  <div class="column is-6 py-6">
                    <TableSponsorDrivers></TableSponsorDrivers>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PageSponsorHome;
import React, { useState, useEffect } from 'react';
import TableSponsorDrivers from './TableSponsorDrivers';
import NavBarAdmin from './NavBarAdmin';

function PageAdminHome () {

  const [driver_ids] = useState(JSON.parse(localStorage.getItem('driversid')));
  const [driver_firsts] = useState(JSON.parse(localStorage.getItem('driversfirst')));
  const [driver_lasts] = useState(JSON.parse(localStorage.getItem('driverslast')));
  const [driver_emails] = useState(JSON.parse(localStorage.getItem('driversemail')));
  const [driver_points] = useState(JSON.parse(localStorage.getItem('driverspoints')));

  const [listDrivers, setListDrivers] = useState(true);
  const [listSponsors, setListSponsors] = useState(false);

  const [activeDriverID, setActiveDriverID] = useState()

  //useEffect(() => {} ,[listDrivers, listSponsors])

    return (
      <div>
        <NavBarAdmin></NavBarAdmin>
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
                  <li><a>View Page As Driver</a></li>
                  <li><a>View Page As Sponsor</a></li>
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
                        Hello, Admin.
                      </h1>
                      <h2 class="subtitle">
                        I hope you are having a great day!
                      </h2>
                    </div>
                  </div>
                </section>
               
                <div class="tabs is-centered is-boxed is-medium" style={{marginTop: 30}}>
                  <ul>
                    <li class={listDrivers ? "is-active" : ""} onClick={() => setListDrivers(true)}>
                      <a>
                        <span><i class="fas fa-image" aria-hidden="true"></i></span>
                        <span>List Drivers</span>
                      </a>
                    </li>
                    <li class={listDrivers ? "" : "is-active"} onClick={() => setListDrivers(false)}>
                      <a>
                        <span><i class="fas fa-music" aria-hidden="true"></i></span>
                        <span>List Sponsors</span>
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div class="columns">
                  {listDrivers ? <div class="column is-6 py-6" style={{marginLeft: 110}}>
                  <TableSponsorDrivers 
                  id={driver_ids}
                  first={driver_firsts}
                  last={driver_lasts}
                  email={driver_emails}
                  points={driver_points}>
                  </TableSponsorDrivers>
                  </div> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PageAdminHome;
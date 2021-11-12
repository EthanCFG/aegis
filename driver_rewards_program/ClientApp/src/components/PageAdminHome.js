import React, { useState } from 'react';
import TableSponsorDrivers from './TableSponsorDrivers';
import NavBarAdmin from './NavBarAdmin';

function PageAdminHome () {

  const [driver_ids] = useState(JSON.parse(localStorage.getItem('driversid')));
  const [driver_firsts] = useState(JSON.parse(localStorage.getItem('driversfirst')));
  const [driver_lasts] = useState(JSON.parse(localStorage.getItem('driverslast')));
  const [driver_emails] = useState(JSON.parse(localStorage.getItem('driversemail')));
  const [driver_points] = useState(JSON.parse(localStorage.getItem('driverspoints')));

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
                  <li><a>View Page As Driver</a></li>
                  <li><a>View Page As Sponsor</a></li>
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
               
                <form>
                  <select name = "view lists">
                      <option value = "Computer Architecture" selected>View driver list</option>
                      <option value = "Discrete Mathematics">View sponsor list</option>
                  </select>
                </form>

                <div class="columns">
                  <div class="column is-6 py-6">
                    <TableSponsorDrivers 
                    id={driver_ids}
                    first={driver_firsts}
                    last={driver_lasts}
                    email={driver_emails}
                    points={driver_points}>
                    </TableSponsorDrivers>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PageAdminHome;
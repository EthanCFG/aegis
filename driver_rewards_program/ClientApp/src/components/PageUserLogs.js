import React, { useState } from 'react';
import TableUserLogs from './TableUserLogs'
import NavBarAdmin from './NavBarAdmin';

function PageUserLogs () {

    return (
      <div>
        <NavBarAdmin></NavBarAdmin>
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-9">
              <div class="notification logs-notification is-white py-6 my-6">
                <section>
                  <div>
                    <div class="container">
                      <h1 class="title">
                        Login Attempts History
                      </h1>
                    </div>
                  </div>
                </section>
                <div class="columns">
                  <div class="column is-6 py-6">
                    <TableUserLogs></TableUserLogs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PageUserLogs;
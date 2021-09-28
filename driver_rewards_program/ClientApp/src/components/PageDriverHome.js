import React, { Component } from 'react';
import CardCurrentSponsor from './CardCurrentSponsor';
import CardTotalPoints from './CardTotalPoints';

function PageDriverHome (props) {
    return (
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
                        Hello, Driver.
                      </h1>
                      <h2 class="subtitle">
                        I hope you are having a great day!
                      </h2>
                    </div>
                  </div>
                </section>
                <div class="columns">
                  <div class="column is-6" style={{ marginTop: 36 }}>
                    <CardCurrentSponsor
                      sponsor={props.sponsor}
                      sponsor_image_url={props.sponsor_image_url}>
                    </CardCurrentSponsor>
                  </div>
                  <div class="column is-6" style={{ marginTop: 16 }}>
                    <CardTotalPoints
                      points={props.points}>
                    </CardTotalPoints>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default PageDriverHome;
import React, { Component } from 'react';
import NavBarSponsor from './NavBarSponsor';

function PageSponsorCatalog (props) {
    return (
        <div>
          <NavBarSponsor></NavBarSponsor>
          <div class="columns">
            <div class="notification is-white py-6 my-6">
              <div class="column is one-quarter">
                <p class="menu-label">
                  Sponsor Catalog
                </p>
                  <div class="buttons">
                    <button class="button">Add Item</button>
                  </div>
                  <div class="buttons">
                    <button class="button">Delete Item</button>
                  </div>
                  <div class="buttons">
                    <button class="button">Refresh Items</button>
                  </div>
              </div>
            </div>
            <div class="column is three-quarter">
              <div class="notification is-white py-6 my-6">
                <p class="title is-5">Sponsor Catalog</p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="box">
            </div>
          </div>
        </div>
    )
}

export default PageSponsorCatalog;
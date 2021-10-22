import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom';
import ProfilePictureSponsor from './ProfilePictureSponsor';

const NavBarSponsor = () => {
      return (
        <div>
            <nav class="navbar" role="navigation" aria-label="main navigation">
              <div class="navbar-brand">
              <div id="header-logo" class="navbar-item">
                </div>
            
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
            
              <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                  <Link to="/sponsor_home" class="navbar-start">
                    <a class="navbar-item">
                      Home
                    </a>
                  </Link>
                  <Link to="/sponsor_catalog" class="navbar-start">
                    <a class="navbar-item">
                      Sponsor Catalog
                    </a>
                  </Link>
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                      More
                    </a>
            
                    <div class="navbar-dropdown">
                      <a class="navbar-item">
                        About
                      </a>
                      <a class="navbar-item">
                        Jobs
                      </a>
                      <a class="navbar-item">
                        Contact
                      </a>
                      <hr class="navbar-divider"/>
                      <a class="navbar-item">
                        Report an issue
                      </a>
                    </div>
                  </div>
                </div>
            
                <div class="navbar-end">
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                      <ProfilePictureSponsor></ProfilePictureSponsor>
                    </a>
                    <div class="navbar-dropdown" style={{ minWidth: 150, left: -41 }}>
                      <Link to="/sponsor_profile">
                        <a class="navbar-item">
                          View Profile
                        </a>
                      </Link>
                      <Link to="/welcome">
                        <a class="navbar-item">
                          Log Out
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        
      )
  }
  
export default NavBarSponsor;
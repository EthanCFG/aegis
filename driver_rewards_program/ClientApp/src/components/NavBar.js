import React, { Component, useState, useEffect } from 'react';
import ProfilePicture from './ProfilePicture';
import 'bulma/css/bulma.min.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const NavBar = (props) => {

  let history = useHistory();

  const setActiveSponsor1 = () => {
    localStorage.setItem('orgactive', localStorage.getItem('orgname1'));
    localStorage.setItem('activepoints', localStorage.getItem('points1'));
    props.setActiveOrg(localStorage.getItem('orgname1')); 
    props.setActivePoints(localStorage.getItem('points1'));
  }

  const setActiveSponsor2 = () => {
    localStorage.setItem('orgactive', localStorage.getItem('orgname2'));
    localStorage.setItem('activepoints', localStorage.getItem('points2'));
    props.setActiveOrg(localStorage.getItem('orgname2')); 
    props.setActivePoints(localStorage.getItem('points2'));
  }

  const setActiveSponsor3 = () => {
    localStorage.setItem('orgactive', localStorage.getItem('orgname3'));
    localStorage.setItem('activepoints', localStorage.getItem('points3'));
    props.setActiveOrg(localStorage.getItem('orgname3')); 
    props.setActivePoints(localStorage.getItem('points3'));
  }

  useEffect(() => {
    props.setActivePoints(localStorage.getItem('activepoints'))
    props.setActiveOrg(localStorage.getItem('orgactive'))
  }, [])

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
                  <Link to="/driver_home" class="navbar-start">
                    <a class="navbar-item">
                      Home
                    </a>
                  </Link>
                  <Link to="/driver_catalog" class="navbar-start">
                    <a class="navbar-item">
                      Sponsor Catalog
                    </a>
                  </Link>
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                      Active Sponsor
                    </a>
            
                    <div class="navbar-dropdown">

                      {(localStorage.getItem('orgname1') == 'null') ? 
                      <Link to="/sponsor_application">
                        <a class="navbar-item">
                          <p>Apply to a Sponsor!</p>
                        </a>
                      </Link> : 
                      <a class="navbar-item" onClick={() => { setActiveSponsor1() }}>{localStorage.getItem('orgname1')}</a>}

                      {(localStorage.getItem('orgname2') == 'null') ?
                      <Link to="/sponsor_application">
                        <a class="navbar-item">
                          <p>Apply to a Sponsor!</p>
                        </a>
                      </Link> :
                      <a class="navbar-item" onClick={() => { setActiveSponsor2() }}>{localStorage.getItem('orgname2')}</a>}
                  
                      {(localStorage.getItem('orgname3') == 'null') ?
                      <Link to="/sponsor_application">
                        <a class="navbar-item">
                          <p>Apply to a Sponsor!</p>
                        </a>
                      </Link> :
                      <a class="navbar-item" onClick={() => { setActiveSponsor3() }}>{localStorage.getItem('orgname3')}</a>}

                      <hr class="navbar-divider"/>
                      <a class="navbar-item">
                        Report an issue
                      </a>
                    </div>
                  </div>
                  {(localStorage.getItem('usertype') == 'admin') ? <Link to="/admin_home" class="navbar-start">
                    <a class="navbar-item" style={{color: "red"}}>
                      Leave Driver View
                    </a>
                  </Link> : null}
                  {(localStorage.getItem('usertype') == 'sponsor') ? <Link to="/sponsor_home" class="navbar-start">
                    <a class="navbar-item" style={{color: "red"}}>
                      Leave Driver View
                    </a>
                  </Link> : null}
                </div>
            
                <div class="navbar-end">
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                      <ProfilePicture
                        pic={props.pic}>
                      </ProfilePicture>
                    </a>
                    <div class="navbar-dropdown" style={{ minWidth: 150, left: -41 }}>
                      <Link to="/driver_profile">
                        <a class="navbar-item">
                          View Profile
                        </a>
                      </Link>
                      <Link to="/welcome">
                        <a class="navbar-item" onClick={() => localStorage.setItem('userType', 'none')}>
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
  
export default NavBar;
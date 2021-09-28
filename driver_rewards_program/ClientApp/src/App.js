import React, { Component, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PageWelcome from './components/PageWelcome';
import PageCreateAccount from './components/PageCreateAccount';
import NavBar from './components/NavBar';
import PageDriverProfile from './components/PageDriverProfile';
import PageDriverHome from './components/PageDriverHome';
import PageSponsorProfile from './components/PageSponsorProfile';
import PageSponsorHome from './components/PageSponsorHome';
import './custom.css';
import axios from 'axios';

//Axios will be used to post user data to backend.

export default class App extends Component {
  static displayName = App.name;

  render () {
    
    const createAccountHandler = (userData) => {
      console.log(userData);
    }

    return (
      <div>
        <Route exact path="/">
          <Redirect to="/welcome"></Redirect>
        </Route>
        <Route path="/welcome">
          <PageWelcome></PageWelcome>
        </Route>
        <Route path="/signup">
          <PageCreateAccount onCreateAccount={createAccountHandler}></PageCreateAccount>
        </Route>
        <Route path="/driver_home">
          <NavBar pic={'https://cdn.britannica.com/70/211670-050-69254076/Jerry-Seinfeld-2019.jpg'}></NavBar>
          <PageDriverHome 
            points={2500}
            sponsor={'Nonexistent Logistics'}
            sponsor_image_url={'https://thumbs.dreamstime.com/b/letter-v-orange-red-rectangles-business-logo-placeholder-name-company-name-geometric-vector-logo-design-elements-169170579.jpg'}>
          </PageDriverHome>
        </Route>
        <Route path="/driver_profile">
          <PageDriverProfile
            pic={'https://cdn.britannica.com/70/211670-050-69254076/Jerry-Seinfeld-2019.jpg'}
            points={2500}>
          </PageDriverProfile>
        </Route>
        <Route path="/sponsor_home">
          <PageSponsorHome></PageSponsorHome>
        </Route>
        <Route path="/sponsor_profile">
          <PageSponsorProfile></PageSponsorProfile>
        </Route>
    </div>
    )
  }
}
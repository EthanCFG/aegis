import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PageWelcome from './components/PageWelcome';
import PageCreateAccount from './components/PageCreateAccount';
import NavBar from './components/NavBar';
import PageDriverProfile from './components/PageDriverProfile';
import PageDriverHome from './components/PageDriverHome';
import PageSponsorProfile from './components/PageSponsorProfile';
import PageSponsorHome from './components/PageSponsorHome';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div>
        <Route exact path="/">
          <Redirect to="/welcome"></Redirect>
        </Route>
        <Route path="/welcome">
          <PageWelcome></PageWelcome>
        </Route>
        <Route path="/signup">
          <PageCreateAccount></PageCreateAccount>
        </Route>
        <Route path="/driver_home">
          <NavBar></NavBar>
          <PageDriverHome></PageDriverHome>
        </Route>
        <Route path="/driver_profile">
          <PageDriverProfile></PageDriverProfile>
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

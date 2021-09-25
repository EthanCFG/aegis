import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PageCreateAccount from './components/PageCreateAccount';
import PageSignIn from './components/PageSignIn';
import NavBar from './components/NavBar';
import PageProfile from './components/PageProfile';
import PageHome from './components/PageHome';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div>
        <Route path="/create_account">
          <PageCreateAccount></PageCreateAccount>
        </Route>
        <Route path="/login">
          <PageSignIn></PageSignIn>
        </Route>
        <Route path="/home">
          <NavBar></NavBar>
          <PageHome></PageHome>
        </Route>
        <Route path="/profile">
          <PageProfile></PageProfile>
        </Route>
    </div>
    )
  }
}

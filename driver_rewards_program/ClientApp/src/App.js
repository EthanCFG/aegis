import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import EmailForm from './components/EmailForm';
import PasswordForm from './components/PasswordForm';
import SelectDriver from './components/SelectDriver';
import SelectSponsor from './components/SelectSponsor';
import FirstNameForm from './components/FirstNameForm';
import LastNameForm from './components/LastNameForm';
import AddressForm from './components/AddressForm';
import StateDropDown from './components/StateDropDown';
import CityForm from './components/CityForm';
import ZipForm from './components/ZipCodeForm';
import PhoneNumberForm from './components/PhoneNumberForm';
import SignupButton from './components/SignupButton';
import PageCreateAccount from './components/PageCreateAccount';
import PageSignIn from './components/PageSignIn';
import NavBar from './components/NavBar';

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
          <PageSignIn></PageSignIn>
        </Route>
    </div>
    )
  }
}

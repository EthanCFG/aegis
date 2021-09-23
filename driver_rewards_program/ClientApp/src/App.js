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
import CreateAccountPage from './components/CreateAccountPage';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Route path="/create_account">
        <CreateAccountPage></CreateAccountPage>
      </Route>
    )
  }
}

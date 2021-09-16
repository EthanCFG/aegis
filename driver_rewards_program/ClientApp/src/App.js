import React, { Component } from 'react';
import Helmet from 'react-helmet';
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

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div class="container">
        <h1 class="signup-header" style={{
          marginBottom: 30
        }}>Account Creation</h1>
        <EmailForm></EmailForm>
        <PasswordForm></PasswordForm>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 20
        }}>
        <SelectDriver></SelectDriver>
        <SelectSponsor></SelectSponsor>
        </div>
        <FirstNameForm></FirstNameForm>
        <LastNameForm></LastNameForm>
        <AddressForm></AddressForm>
        <div style={{
          display: "flex",
          alignItems: "normal",
          justifyContent: "center",
          gap: 20
        }}>
          <StateDropDown></StateDropDown>
          <CityForm></CityForm>
          <ZipForm></ZipForm>
        </div>
        <PhoneNumberForm></PhoneNumberForm>
        <SignupButton></SignupButton>
      </div>
    )
  }
}

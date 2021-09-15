import React, { Component } from 'react';
import EmailForm from './components/EmailForm';
import PasswordForm from './components/PasswordForm';
import UserTypeSelect from './components/UserTypeSelect';
import FirstNameForm from './components/FirstNameForm';
import LastNameForm from './components/LastNameForm';
import AddressForm from './components/AddressForm';
import StateDropDown from './components/StateDropDown';
import CityForm from './components/CityForm';
import PhoneNumberForm from './components/PhoneNumberForm';
import SignupButton from './components/SignupButton';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div class="container">
        <h1 class="signup-header">Account Creation</h1>
        <EmailForm></EmailForm>
        <PasswordForm></PasswordForm>
        <UserTypeSelect></UserTypeSelect>
        <FirstNameForm></FirstNameForm>
        <LastNameForm></LastNameForm>
        <AddressForm></AddressForm>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <StateDropDown></StateDropDown>
          <CityForm></CityForm>
        </div>
        <PhoneNumberForm></PhoneNumberForm>
        <SignupButton></SignupButton>
      </div>
    )
  }
}

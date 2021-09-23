import React, { Component } from 'react';
import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';
import SelectDriver from './SelectDriver';
import SelectSponsor from './SelectSponsor';
import FirstNameForm from './FirstNameForm';
import LastNameForm from './LastNameForm';
import AddressForm from './AddressForm';
import StateDropDown from './StateDropDown';
import CityForm from './CityForm';
import ZipForm from './ZipCodeForm';
import PhoneNumberForm from './PhoneNumberForm';
import SignupButton from './SignupButton';

function CreateAccountPage () {
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

export default CreateAccountPage;